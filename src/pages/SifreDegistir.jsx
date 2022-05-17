import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const SifreDegistir = () => {
  const [oldPassword, setOldPassword] = useState(null);
  const [newPassword1, setNewPassword1] = useState(null);
  const [newPassword2, setNewPassword2] = useState(null);
  let { user, authTokens, logoutUser } = useContext(AuthContext);
  let navigate = useNavigate();
  let sifre = async (e) => {
    e.preventDefault();
    let response = await fetch(
      `http://127.0.0.1:8000/api/change_password/${user.user_id}/`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + String(authTokens.access),
        },
        body: JSON.stringify({
          old_password: oldPassword,
          password: newPassword1,
          password2: newPassword2,
        }),
      }
    );
    if (response.status == 200) {
      logoutUser();
    } else {
      let alert_mesaj = document.querySelector(".giris-alert-masaj");
      let resp = await response.json();
      if (
        resp.old_password &&
        resp.old_password["old_password"] == "Old password is not correct"
      ) {
        alert_mesaj.innerHTML = "Şu anki şifre doğru değil.";
      } else if (resp.password) {
        if (resp.password[0] == "Bu parola çok geneldir.") {
          alert_mesaj.innerHTML = resp["password"][0];
        } else if (resp.password[0] == "Password fields didn't match.") {
          alert_mesaj.innerHTML = "Girdiğiniz yeni şifreler eşleşmedi.";
        }
      }
      let alert = document.querySelector(".giris-alert-1");
      alert.classList.remove("display-none");
      alert.classList.add("giris-alert");
      alert.classList.add("display-block");
      setTimeout(() => {
        alert.classList.remove("display-block");
        alert.classList.add("display-none");
        alert.classList.remove("giris-alert");
      }, 5000);
    }
  };

  return (
    <>
      <div className="col-10 col-lg-6 offset-1 offset-lg-3">
        <h4 className="text-center pt-5 pb-4" style={{ fontWeight: "300" }}>
          Şifreni Değiştir
        </h4>
        <form onSubmit={sifre}>
          <p className="mt-4">Şu anki Şifre</p>
          <input
            type="password"
            name="old_password"
            minLength={8}
            required
            onChange={(e) => {
              setOldPassword(e.target.value);
            }}
            className="form-control"
          />
          <p className="mt-5">Yeni Şifre</p>
          <input
            type="password"
            name="new_password1"
            minLength={8}
            onChange={(e) => {
              setNewPassword1(e.target.value);
            }}
            required
            className="form-control"
          />
          <p className="mt-5">Yeni Şifre (Tekrar)</p>
          <input
            type="password"
            name="new_password2"
            minLength={8}
            onChange={(e) => {
              setNewPassword2(e.target.value);
            }}
            required
            className="form-control"
          />
          <div
            className="giris-alert-1 alert alert-danger mt-4 display-none"
            role="alert"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-exclamation-triangle-fill flex-shrink-0 me-3"
              viewBox="0 0 16 16"
              role="img"
              aria-label="Warning:"
            >
              <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg>
            <span className="giris-alert-masaj">Bir hata oluştu.</span>
          </div>
          <input type="submit" className="btn btn-outline-danger center mt-4" />
        </form>
      </div>
    </>
  );
};

export default SifreDegistir;
