import React, { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import slugify from "../../node_modules/slugify/slugify";
import AuthContext from "../context/AuthContext";
import "./Giris.css";
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
        <input
          type="text"
          name="username"
          required
          minLength="8"
          className="form-control"
        />
        <p className="mt-5">Email</p>
        <input type="email" name="email" required className="form-control" />
        <p className="mt-5">Şifre</p>
        <input
          type="password"
          name="password"
          minLength="8"
          required
          className="form-control"
        />
        <p className="mt-5">Şifre (Tekrar)</p>
        <input
          type="password"
          name="password1"
          minLength="8"
          required
          className="form-control"
        />
        <div className="d-flex justify-content-center">
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
            value="Kayıt Ol"
            className="mt-5 mb-5 btn btn-outline-danger"
          />
        </div>
      </form>
    </div>
  );
};

export default Kayit;
