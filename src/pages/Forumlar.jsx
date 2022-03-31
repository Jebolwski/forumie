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
      <ul className="d-flex list-unstyled py-5 my-5 justify-content-evenly">
        <li>
          <Link
            to={"/forumlar/mma/"}
            className="text-black text-decoration-none"
            style={{ fontSize: "20px", fontWeight: "400" }}
          >
            MMA
          </Link>
        </li>
        <li>
          <Link
            to={"/forumlar/spor/"}
            className="text-black text-decoration-none"
            style={{ fontSize: "20px", fontWeight: "400" }}
          >
            Spor
          </Link>
        </li>
      </ul>

      <br />
      <br />
    </div>
  );
};

export default Forumlar;
