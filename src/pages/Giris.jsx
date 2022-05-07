import React, { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";
import { Link } from "react-router-dom";

const Giris = () => {
  let { loginUser } = useContext(AuthContext);
  return (
    <>
      <div className="col-8 col-lg-6 offset-2 offset-lg-3">
        <form onSubmit={loginUser}>
          <h5 style={{ fontWeight: "400" }} className="text-center pt-5">
            Forumie'ye giriş yap
          </h5>
          <p className="pt-5">Kullanıcı Adı</p>
          <input type="text" className="form-control mb-5" name="username" />
          <p>Şifre</p>
          <input type="password" className="form-control" name="password" />
          <input
            type="submit"
            className="btn btn-outline-danger mt-4"
            style={{ marginLeft: "50%", transform: "translate(-50%)" }}
          />
        </form>
        <p className="mt-5 text-center">
          Hesabınız yok mu ?{" "}
          <Link to={"/kayit-ol/"} className="text-black">
            Kayıt Ol
          </Link>
        </p>
      </div>
    </>
  );
};

export default Giris;
