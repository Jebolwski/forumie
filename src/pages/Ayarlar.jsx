import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Link } from "react-router-dom";
const Ayarlar = () => {
  return (
    <div className="col-10 col-lg-8 offset-1 offset-lg-2">
      <Link
        to={"/sifre-degistir/"}
        className="my-5 text-decoration-none text-dark"
      >
        <h5 className="text-center">Şifre Değiştir</h5>
      </Link>
      <Link to={"/email-degistir/"} className="text-decoration-none text-dark">
        <h5 className="mt-5 text-center">Email Değiştir</h5>
      </Link>
    </div>
  );
};

export default Ayarlar;
