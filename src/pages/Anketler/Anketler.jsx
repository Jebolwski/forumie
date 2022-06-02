import React from "react";
import { GiHearts, GiBrokenHeart } from "react-icons/gi/index.esm";
import { AiFillEye } from "react-icons/ai/index.esm";
import { TiTick } from "react-icons/ti/index.esm";
import "./Anketler.css";
const Anketler = () => {
  return (
    <div>
      <h4 className="text-center">Anketler</h4>
      <div className="anket-ornek col-8 offset-2 border border-dark mt-5 p-3 bg-light">
        <ul className="list-unstyled d-flex justify-content-around">
          <li>
            <h5 className="mt-2">
              <img
                style={{ height: "50px", width: "50px" }}
                src="https://pbs.twimg.com/profile_images/1727586445/n507915524_2010510_8306_400x400.jpg"
                className="col-1 rounded-circle"
              />
              <span className="ms-3 d-none d-md-inline-block">Jebolwski</span>
            </h5>
          </li>
          <li>&nbsp;</li>
          <li>&nbsp;</li>
          <li>&nbsp;</li>
          <li>&nbsp;</li>
          <li>&nbsp;</li>
          <li className="mt-3">
            <GiBrokenHeart size={21} />
            <span className="m-2">3</span>
          </li>
          <li className="mt-3">
            <GiHearts color="red" size={21} />
            <span className="ms-2">24</span>
          </li>
        </ul>
        <h5 className="ms-2 ms-md-4 ms-lg-5  mt-5">Çizgi Filmler</h5>
        <p style={{ position: "relative", left: "80%", top: "-10px" }}>
          <TiTick size={30} color="gray" />
        </p>
        <p className="ms-2 ms-md-4 ms-lg-5 mb-5">
          <i>Çizgi filmler ile ilgili yaptığım anket.</i>
        </p>

        <ul className="list-unstyled d-flex justify-content-around">
          <li className="d-none d-lg-block">8 Nisan 2022</li>
          <li>
            <i>8 Soru</i>
          </li>
          <li>
            <AiFillEye size={21} />
            <span className="ms-2">156</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Anketler;
