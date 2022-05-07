import React, { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import slugify from "../../node_modules/slugify/slugify";
import AuthContext from "../context/AuthContext";

const Kayit = () => {
  let navigate = useNavigate();
  let { registerUser } = useContext(AuthContext);
  return (
    <div className="col-lg-8 col-10 offset-1 offset-lg-2">
      <h4 style={{ fontWeight: "400" }} className="text-center mt-5">
        Kayıt Olma
      </h4>
      <form onSubmit={registerUser}>
        <p className="mt-5">Kullanıcı Adı</p>
        <input type="text" name="username" className="form-control" />
        <p className="mt-5">Email</p>
        <input type="text" name="email" className="form-control" />
        <p className="mt-5">Şifre</p>
        <input type="password" name="password" className="form-control" />
        <p className="mt-5">Şifre (Tekrar)</p>
        <input type="password" name="password1" className="form-control" />
        <div className="d-flex justify-content-center">
          <input
            type="submit"
            value="Kayıt Ol"
            className="mt-5 mb-5 btn btn-outline-dark"
          />
        </div>
      </form>
    </div>
  );
};

export default Kayit;
