import React, { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import "./EmailDegistir.css";
const EmailDegistir = () => {
  let navigate = useNavigate();
  let { user, authTokens } = useContext(AuthContext);
  const [oldEmail, setOldEmail] = useState(null);
  const [userId, setUserId] = useState(user.user_id);
  const [newEmail, setNewEmail] = useState(null);
  const [newEmail1, setNewEmail1] = useState(null);
  let emailDegistir = async (e) => {
    if (oldEmail != user.email) {
      e.preventDefault();
      document.querySelector(".old_email").value = "";
      alert("eski email yanlış.");
    } else if (newEmail != newEmail1) {
      e.preventDefault();
      alert("emailler eşleşmiyor.");
    } else {
      e.preventDefault();
      let response = await fetch("http://127.0.0.1:8000/api/email-degistir/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + String(authTokens.access),
        },
        body: JSON.stringify({
          newEmail: newEmail,
          userId: userId,
        }),
      });
      if (response.status == 200) {
        navigate("/ayarlar/");
      } else {
      }
    }
  };
  return (
    <>
      <div className="col-10 col-lg-6 offset-1 offset-lg-3">
        <h4 style={{ fontWeight: "300" }} className="text-center pt-5">
          Email Değiştir
        </h4>
        <form onSubmit={emailDegistir}>
          <p className="mt-5">Eski Email</p>
          <input
            type="email"
            className="old_email form-control"
            onChange={(e) => {
              setOldEmail(e.target.value);
            }}
          />
          <p className="mt-5">Yeni Email</p>
          <input
            type="email"
            name="new_email"
            className="new_email form-control"
            onChange={(e) => {
              setNewEmail(e.target.value);
            }}
          />
          <p className="mt-5">Yeni Email (Tekrar)</p>
          <input
            type="email"
            className="new_email1 form-control"
            onChange={(e) => {
              setNewEmail1(e.target.value);
            }}
          />
          <input type="submit" className="center btn btn-outline-danger mt-5" />
        </form>
      </div>
    </>
  );
};

export default EmailDegistir;
