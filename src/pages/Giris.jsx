import React, { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";

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
      </div>
    </>
  );
};

export default Giris;
