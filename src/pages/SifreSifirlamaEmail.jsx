import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const SifreSifirlamaEmail = () => {
  let navigate = useNavigate();
  const [email, setEmail] = useState();
  const emailSifirla = async () => {
    let response = await fetch("http://127.0.0.1:8000/api/password_reset/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
      }),
    });
    if (response.status === 200) {
      navigate("/email-iletildi/");
    }
  };

  return (
    <div>
      <h4 style={{ textAlign: "center", fontWeight: "300" }} className="mt-5">
        Şifre Sıfırlama
      </h4>
      <p className="text-center mt-5">
        Şifreni sıfırlamak için emailine şifre sıfırlama emaili atmamız lazım.
        <br />
        Emailini gir ve şifreni sıfırla.
      </p>
      <div className="col-8 col-lg-4 offset-2 offset-lg-4 mt-4">
        <input
          type="text"
          className="form-control"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>

      <button
        onClick={emailSifirla}
        className="btn btn-outline-danger center mt-3"
      >
        İlet
      </button>
    </div>
  );
};

export default SifreSifirlamaEmail;
