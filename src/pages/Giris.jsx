import React, { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";
import "./Giris.css";
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
          <div
            class="giris-alert-1 alert alert-danger mt-4 display-none"
            role="alert"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              class="bi bi-exclamation-triangle-fill flex-shrink-0 me-3"
              viewBox="0 0 16 16"
              role="img"
              aria-label="Warning:"
            >
              <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg>
            Kullanıcı adı veya şifre hatalı!
          </div>
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
