import React from "react";
import { GiHearts, GiBrokenHeart } from "react-icons/gi/index.esm";
import { AiFillEye } from "react-icons/ai/index.esm";
import { TiTick } from "react-icons/ti/index.esm";
import { Link } from "react-router-dom";

const Anket = (props) => {
  return (
    <>
      <div
        className="anket-ornek col-8 offset-2 border border-dark mb-5 p-3 bg-light"
        key={props.anket.id}
      >
        <ul className="list-unstyled d-flex justify-content-around">
          <li>
            <h5 className="mt-2">
              <img
                style={{ height: "50px", width: "50px" }}
                src={"http://127.0.0.1:8000/api" + props.anket.url}
                className="col-1 rounded-circle"
              />
              <span className="ms-3 d-none d-md-inline-block">
                {props.anket.username}
              </span>
            </h5>
          </li>
          <li>&nbsp;</li>
          <li>&nbsp;</li>
          <li>&nbsp;</li>
          <li>&nbsp;</li>
          <li>&nbsp;</li>
          <li className="mt-3">
            <GiBrokenHeart size={21} />
            <span className="m-2">{props.anket.dislikes.length}</span>
          </li>
          <li className="mt-3">
            <GiHearts color="red" size={21} />
            <span className="ms-2">{props.anket.likes.length}</span>
          </li>
        </ul>
        <h5 className="ms-2 ms-md-4 ms-lg-5  mt-5">{props.anket.baslik}</h5>
        <p style={{ position: "relative", left: "80%", top: "-10px" }}>
          <Link to={`/anket/${props.anket.id}/`}>
            <TiTick size={30} className="icon" />
          </Link>
        </p>
        <p className="ms-2 ms-md-4 ms-lg-5 mb-5">
          <i>{props.anket.aciklama}</i>
        </p>

        <ul className="list-unstyled d-flex justify-content-around">
          <li className="d-none d-lg-inline-block">{props.anket.guncelle}</li>
          <li>
            <i>{props.anket.soru_sayisi} Soru</i>
          </li>
          <li>
            <AiFillEye size={21} />
            <span className="ms-2">{props.anket.goruldu.length}</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Anket;
