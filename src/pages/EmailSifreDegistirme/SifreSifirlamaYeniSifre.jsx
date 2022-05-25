import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SifreSifirlamaYeniSifre = () => {
  const [yeniSifre1, setYeniSifre1] = useState(null);
  const [yeniSifre2, setYeniSifre2] = useState(null);
  let token = window.location.pathname.slice(
    15,
    window.location.pathname.length - 1
  );
  let navigate = useNavigate();
  const sifirla = async () => {
    let response = await fetch(
      "http://127.0.0.1:8000/api/password_reset/confirm/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token: token,
          password: yeniSifre1,
          password1: yeniSifre2,
        }),
      }
    );
    if (response.status === 200) {
      navigate("/sifre-degisti/");
    }
  };
  return (
    <div>
      <div className="col-10 col-lg-8 offset-1 offset-lg-2">
        <h4 style={{ fontWeight: "300" }} className="text-center">
          Şifre Sıfırla
        </h4>
        <p className="mt-5">Yeni Şifre</p>
        <input
          type="password"
          className="form-control"
          onChange={(e) => {
            setYeniSifre1(e.target.value);
          }}
        />
        <p className="mt-5">Yeni Şifre (Tekrar)</p>
        <input
          type="password"
          className="form-control"
          onChange={(e) => {
            setYeniSifre2(e.target.value);
          }}
        />
        <button
          className="btn btn-outline-danger mt-5 center"
          onClick={sifirla}
        >
          Sıfırla
        </button>
      </div>
    </div>
  );
};

export default SifreSifirlamaYeniSifre;
