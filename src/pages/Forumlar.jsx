import React, { useState } from "react";
import { Link } from "react-router-dom";
const Forumlar = () => {
  //   const [forumlar, setForumlar] = useState([]);
  //   let forumlarGel = async () => {
  //     let response = await fetch("http://127.0.0.1:8000/api/forumlar/", {
  //       method: "GET",
  //       headers: "Content-Type : application/json",
  //     });
  //     data = await response.json();
  //     setForumlar(data);
  //   };

  return (
    <div className="text-center">
      <Link to={"/forumlar/mma/"}>MMA</Link>
      <br />
      <br />
      <Link to={"/forumlar/spor/"}>Spor</Link>
    </div>
  );
};

export default Forumlar;
