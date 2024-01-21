import React from "react";
import "./Sidebar.css";
function Sidebar({toggleclick}) {

const handleonclick = () => {

  toggleclick();
}

  return (
    <div className="sidecontainer">
      <div className="insidecont">
        <div className="sidetag" onClick={handleonclick}>Home</div>
        <div className="sidetag" onClick={handleonclick}>Create Post</div>
      </div>
      <div className="sidefooter">
        <hr />
        <div className="userid flex justify-between md:text-xl text-base m-2 cursor-pointer">
          <div className="username font-bold">
            Harry
          </div>
          <div className="">
            Logout
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
