import React, { useContext } from "react";
import { Link } from "react-router-dom";
import slugify from "../../node_modules/slugify/slugify";
import {
  AiFillEye,
  AiFillDelete,
  AiOutlineEdit,
} from "../../node_modules/react-icons/ai/index.esm";
import { BiUpvote, BiDownvote } from "react-icons/bi/index.esm";
import "./Forum.css";
import AuthContext from "../context/AuthContext";

const Forum = (props) => {
  let { user, authTokens } = useContext(AuthContext);
  let tarih = props.forum.guncelle.slice(0, 10);
  const user_id = user.id;

  console.log(props.forum);
  return (
    <>
      <tr key={props.forum.id}>
        <td>
          <span
            onClick={async () => {
              let response = await fetch(
                `http://127.0.0.1:8000/api/forum/${props.forum.id}/begen/`,
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + String(authTokens.access),
                  },
                  body: JSON.stringify({
                    username: user.username,
                  }),
                }
              );
              if (response.status === 200) {
                if (props.forum.category === "MMA") {
                  props.mmaforumlarGel();
                } else {
                  props.sporforumlarGel();
                }
              }
            }}
          >
            <BiUpvote style={{ cursor: "pointer" }} />
          </span>
          <span className="ms-2 my-1 py-1">{props.forum.likes.length}</span>

          <span
            className="ms-2"
            onClick={async () => {
              let response = await fetch(
                `http://127.0.0.1:8000/api/forum/${props.forum.id}/begenme/`,
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + String(authTokens.access),
                  },
                  body: JSON.stringify({
                    username: user.username,
                  }),
                }
              );
              if (response.status === 200) {
                if (props.forum.category === "MMA") {
                  props.mmaforumlarGel();
                } else {
                  props.sporforumlarGel();
                }
              }
            }}
          >
            <BiDownvote style={{ cursor: "pointer" }} />
          </span>

          <span className="ms-2 my-1 py-1">{props.forum.dislikes.length}</span>
        </td>
        <td className="aciklama">{props.forum.baslik}</td>
        <td className="aciklama">{props.forum.soru}</td>
        <td className="d-none d-md-table-cell">
          {props.forum.category == "MMA" ? (
            <img
              src="https://pngimg.com/uploads/mma/mma_PNG10.png"
              className="aciklama"
            />
          ) : props.forum.category == "Spor" ? (
            <img
              src="https://www.freepnglogos.com/uploads/sport-png/sport-steadman-philippon-institute-official-site-16.png"
              className="aciklama"
            />
          ) : (
            <p>Diğer</p>
          )}
        </td>
        <td className="d-none d-md-table-cell">{tarih}</td>
        <td>
          <Link to={`/forum/${props.forum.id}/`}>
            <AiFillEye size={22} color="black" />
          </Link>
        </td>
      </tr>
    </>
  );
};

export default Forum;
