import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const SifreDegistir = () => {
  const [oldPassword, setOldPassword] = useState(null);
  const [newPassword1, setNewPassword1] = useState(null);
  const [newPassword2, setNewPassword2] = useState(null);
  let { user, authTokens } = useContext(AuthContext);
  let navigate = useNavigate();
  let sifre = async (e) => {
    e.preventDefault();
    let response = await fetch(`http://127.0.0.1:8000/api/sifre-sifirla/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + String(authTokens.access),
      },
      body: JSON.stringify({
        old_password: oldPassword,
        new_password1: newPassword1,
        new_password2: newPassword2,
      }),
    });
    if (response.status == 200) {
      navigate(`/ayarlar/`);
    } else {
    }
  };

  return (
    <>
      <div className="col-10 col-lg-6 offset-1 offset-lg-3">
        <h4 className="text-center pt-5 pb-4" style={{ fontWeight: "400" }}>
          Şifreni Değiştir
        </h4>
        <form onSubmit={sifre}>
          <p className="mt-4">Eski Şifre</p>
          <input
            type="password"
            name="old_password"
            onChange={(e) => {
              setOldPassword(e.target.value);
            }}
            className="form-control"
          />
          <p className="mt-5">Yeni Şifre</p>
          <input
            type="password"
            name="new_password1"
            onChange={(e) => {
              setNewPassword1(e.target.value);
            }}
            className="form-control"
          />
          <p className="mt-5">Yeni Şifre (Tekrar)</p>
          <input
            type="password"
            name="new_password2"
            onChange={(e) => {
              setNewPassword2(e.target.value);
            }}
            className="form-control"
          />
          <input type="submit" className="btn btn-outline-dark center mt-4" />
        </form>
      </div>
    </>
  );
};

export default SifreDegistir;
