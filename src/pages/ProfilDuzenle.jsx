import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";
import "./ProfilDuzenle.css";
import slugify from "../../node_modules/slugify/slugify";
import { useNavigate } from "react-router-dom";
import FormData from "form-data";

const ProfilDuzenle = () => {
  let navigate = useNavigate();
  let profilFonk = async () => {
    let response = await fetch(
      `http://127.0.0.1:8000/api/profil/${slugify(
        user.username
      ).toLowerCase()}/`,
      {
        method: "GET",
        "Conent-Type": "application/json",
      }
    );
    let data = await response.json();
    setProfil(data);
    setLoading(false);
    setBiyografi(data.biyografi);
  };
  const [biyografi, setBiyografi] = useState();
  const [profil_foto, setProfil_foto] = useState();
  const [arkaplan_foto, setArkaplan_foto] = useState();
  const [profil, setProfil] = useState([]);
  const [arkaplan_foto_tem, setArkaplan_foto_tem] = useState(false);
  const [profil_foto_tem, setProfil_foto_tem] = useState(false);
  let [loading, setLoading] = useState(true);
  let { user, authTokens } = useContext(AuthContext);

  let duzenle = async (e) => {
    e.preventDefault();
    var formdata = new FormData();
    formdata.append("biyografi", biyografi);
    formdata.append("profil_foto_tem", profil_foto_tem);
    formdata.append("arkaplan_foto_tem", arkaplan_foto_tem);
    if (profil_foto != null) {
      formdata.append("profil_foto", profil_foto, profil_foto.name);
    }
    if (arkaplan_foto != null) {
      formdata.append("arkaplan_foto", arkaplan_foto, arkaplan_foto.name);
    }

    var requestOptions = {
      method: "PUT",
      body: formdata,
      redirect: "follow",
    };
    fetch(
      `http://127.0.0.1:8000/api/profil/${slugify(
        user.username
      ).toLowerCase()}/duzenle/`,
      requestOptions
    )
      .then((response) => response.text())
      .then(() => {
        setTimeout(
          navigate(`/profil/${slugify(user.username).toLowerCase()}/`),
          1000
        );
      })
      .catch((error) => console.log("error", error));
  };
  useEffect(() => {
    profilFonk();
  }, []);
  return (
    <div>
      <h4 className="text-center pt-5" style={{ fontWeight: "400" }}>
        Profil Duzenle
      </h4>
      <form onSubmit={duzenle}>
        <div className="col-8 col-lg-6 offset-2 offset-lg-3">
          <h5 className="mt-5" style={{ fontWeight: "400" }}>
            Biyografi
          </h5>
          <input
            type="text"
            onChange={(e) => {
              setBiyografi(e.target.value);
            }}
            defaultValue={profil.biyografi}
            className="form-control"
          />
          <h5 className="mt-5" style={{ fontWeight: "400" }}>
            Profil Fotğrafı
          </h5>
          {profil.profil_foto ? (
            <h6 style={{ fontWeight: "400" }}>
              Şu anki: {profil.profil_foto}
              <input
                type="checkbox"
                onChange={(e) => {
                  setProfil_foto_tem(e.target.checked);
                }}
                name="profil_foto_1"
                className="form-check-input mx-1"
              />{" "}
              Temizle <br />
              <br />
              Değiştir:
            </h6>
          ) : null}
          <input
            type="file"
            className="form-control"
            onChange={(e) => {
              setProfil_foto(e.target.files[0]);
              console.log(e.target.files[0]);
            }}
          />
          <h5 className="mt-5" style={{ fontWeight: "400" }}>
            Arkaplan Fotğrafı
          </h5>
          {profil.arkaplan_foto ? (
            <h6 style={{ fontWeight: "400" }}>
              Şu anki: {profil.arkaplan_foto}
              <input
                type="checkbox"
                name="arkaplan_foto_1"
                onChange={(e) => {
                  setArkaplan_foto_tem(e.target.checked);
                }}
                className="form-check-input mx-1"
              />{" "}
              Temizle <br />
              <br />
              Değiştir:
            </h6>
          ) : null}
          <input
            type="file"
            onChange={(e) => {
              setArkaplan_foto(e.target.files[0]);
              console.log(e.target.files[0]);
            }}
            className="form-control"
          />
          <input type="submit" className="btn btn-outline-danger mt-4 center" />
        </div>
      </form>
    </div>
  );
};

export default ProfilDuzenle;
