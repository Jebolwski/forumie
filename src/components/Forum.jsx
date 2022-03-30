import React from "react";
import { Link } from "react-router-dom";
import slugify from "../../node_modules/slugify/slugify";
import {
  AiFillEye,
  AiFillDelete,
  AiOutlineEdit,
} from "../../node_modules/react-icons/ai/index.esm";
import "./Forum.css";

const Forum = (props) => {
  let tarih = props.forum.guncelle.slice(0, 10);
  return (
    <>
      <tr>
        <td className="aciklama">{props.forum.baslik}</td>
        <td className="aciklama">{props.forum.soru}</td>
        <td>
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
        <td>
          <Link to={`/forum/${props.forum.id}/duzenle/`}>
            <AiOutlineEdit size={22} color="black" />
          </Link>
        </td>
        <td>
          <Link to={`/forum/${props.forum.id}/sil/`}>
            <AiFillDelete size={22} color="black" />
          </Link>
        </td>
      </tr>
    </>
  );
};

export default Forum;
