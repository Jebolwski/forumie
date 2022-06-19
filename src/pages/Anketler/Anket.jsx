import React from "react";
import { GiHearts, GiBrokenHeart } from "react-icons/gi/index.esm";
import { AiOutlineAreaChart } from "react-icons/ai/index.esm";
import { AiFillEye } from "react-icons/ai/index.esm";
import { TiTick } from "react-icons/ti/index.esm";
import { Link } from "react-router-dom";
import { CgEditBlackPoint } from "react-icons/cg/index.esm";
import moment from "../../../node_modules/moment/moment";

const Anket = (props) => {
  let time1 = moment().format("h:mm");
  console.log(time1);
  var today = new Date();

  var time =
    today.getDate() + "-" + today.getMonth() + "-" + today.getFullYear();
  // console.log(
  //   time,
  //   " ",
  //   props.anket.guncelle.slice(
  //     props.anket.guncelle.length - 5,
  //     props.anket.guncelle.length
  //   )
  // );
  console.log(props.anket.guncelle);
  let guncelleme = false;
  if (today.getFullYear() == 1) {
    console.log("s");
  }
  return (
    <>
      <div
        className="anket-ornek col-8 offset-2 border border-dark mb-5 p-3 bg-light"
        key={props.anket.id}
      >
        <ul className="list-unstyled d-flex justify-content-around">
          <li>
            <h5 className="mt-2">
              {props.anket.url ? (
                <img
                  style={{ height: "50px", width: "50px" }}
                  src={"http://127.0.0.1:8000/api" + props.anket.url}
                  className="col-1 rounded-circle border"
                />
              ) : (
                <img
                  style={{ height: "50px", width: "50px" }}
                  src="https://i.kym-cdn.com/photos/images/facebook/001/150/314/fb4.png"
                  className="col-1 rounded-circle border"
                />
              )}

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

        <p className="pt-3 d-flex justify-content-evenly">
          <Link to={`/anket/${props.anket.id}/`}>
            <TiTick size={30} className="icon" />
          </Link>
          <Link to={`/anket/${props.anket.id}/analiz/`}>
            <AiOutlineAreaChart size={24} color="gray" className="" />
          </Link>
          <Link to={`/anket/${props.anket.id}/duzenle/`}>
            <CgEditBlackPoint size={30} className="icon " />
          </Link>
        </p>
        <h5 className="ms-2 ms-md-4 ms-lg-5  mt-5">{props.anket.baslik}</h5>
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
