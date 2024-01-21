import React from "react";
import "./Create.css";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../Firebase";


function Create() {

  function handleonsubmitpost(e){

    e.preventDefault()
    const title = e.target[0].value
    const post = e.target[1].value
    const tags = e.target[2].value

    console.log(title,post,tags)

    const postsCollection = collection(db, "posts");

    addDoc(postsCollection, {
      title: title,
      post: post,
      tags: tags,
      like:0,
    })
      .then(() => {
        console.log("Document successfully written!");
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
  }


  return (
    <div className="postcontainer">
      <div className="post_inner">
        <form onSubmit={handleonsubmitpost}>
          <div className="mb-[1.5rem]">
            <div className="mb-3">
              <label htmlFor="Title">Title</label>
            </div>
            <div>
              <input  className="p-1 rounded-md outline-none" type="text" />
            </div>
          </div>
          <div className="mb-[1.5rem]">
            <div className="mb-3">
              <label htmlFor="desc">Post Desc</label>
            </div>
            <div>
              <textarea className="p-1 rounded-md outline-none" placeholder="What's your Screat" col={3} rows={3}/>
            </div>
          </div>
          <div className="mb-[1.5rem]">
            <div className="mb-3">
              <label htmlFor="Tags">Post Tags</label>
            </div>
            <div>
              <input className="p-1 rounded-md outline-none" type="text" />
            </div>
          </div>
          <button  className="submit_btn"type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Create;
