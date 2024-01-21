import React from "react";
import { useState, useEffect } from "react";
import "./Seepost.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../Firebase";

function Seepost() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const postsCollection = collection(db, "posts"); // Replace "posts" with your actual Firestore collection

      try {
        const querySnapshot = await getDocs(postsCollection);
        const documents = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setData(documents);
      } catch (error) {
        console.error("Error retrieving data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="postcontainer">
  {data.map((items) => (
    <div className="postinner" key={items.id}>
      <div className="post_title mb-2">{items.title}</div>
      {console.log(items.title)}
      <div className="post_desc mb-2">{items.post}</div>
      <div className="post_tags mb-2">{items.tags}</div>
      <div className="post_reaction">
        <div className="post_like">like</div>
        <div className="post_cmnt">cmnt</div>
        <div className="post_bug">bug</div>
      </div>
    </div>
  ))}
</div>

  );
}

export default Seepost;
