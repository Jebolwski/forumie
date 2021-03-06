import React, { useState, useEffect, useContext } from "react";
import slugify from "slugify";
import AuthContext from "../../context/AuthContext";
import { FaUserEdit } from "react-icons/fa/index.esm";
import "./Profil.css";
import { Link, useParams } from "react-router-dom";
import Forum from "../../components/Forum";
import { ImCross } from "react-icons/im/index.esm";
const Profil = () => {
  const { slug } = useParams();
  const [profil, setProfil] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [change, setChange] = useState(false);
  const [forumlar, setForumlar] = useState([]);
  let [loading, setLoading] = useState(true);
  let { user } = useContext(AuthContext);

  let param = useParams();
  let profilFonk = async () => {
    let response = await fetch(`http://127.0.0.1:8000/api/profil/${slug}/`, {
      method: "GET",
      "Conent-Type": "application/json",
    });
    if (response.status === 200) {
      let data = await response.json();
      setProfil(data);
      setLoading(false);
    }
  };

  let forumlari = async () => {
    if (loading == false) {
      let response = await fetch(`http://127.0.0.1:8000/api/forumlarim/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_slug: param.slug,
        }),
      });
      if (response.status == 200) {
        let data = await response.json();
        setForumlar(data);
      }
    }
  };

  function profil_foto_buyu() {
    let profil_foto_buyuk = document.querySelector(".profil-foto-buyuk");
    profil_foto_buyuk.classList.remove("display-none");
    profil_foto_buyuk.classList.add("display-block");
  }

  function profil_foto_kucul() {
    let profil_foto_buyuk = document.querySelector(".profil-foto-buyuk");
    profil_foto_buyuk.classList.remove("display-block");
    profil_foto_buyuk.classList.add("display-none");
  }

  function arkaplan_foto_buyu() {
    let profil_foto_buyuk = document.querySelector(".arkaplan-foto-buyuk");
    profil_foto_buyuk.classList.remove("display-none");
    profil_foto_buyuk.classList.add("display-block");
  }

  function arkaplan_foto_kucul() {
    let profil_foto_buyuk = document.querySelector(".arkaplan-foto-buyuk");
    profil_foto_buyuk.classList.remove("display-block");
    profil_foto_buyuk.classList.add("display-none");
  }

  useEffect(() => {
    profilFonk();
    forumlari();
  }, []);

  useEffect(() => {
    forumlari();
  }, [loading]);

  useEffect(() => {
    forumlari();
    profilFonk();
  }, [change]);

  if (loading) {
    return (
      <>
        <h5 className="text-center mt-5">Y??kleniyor</h5>
      </>
    );
  } else {
    return (
      <>
        <div
          className="profil-background-image"
          style={{
            height: "20vh",
            minHeight: "100px",
            zIndex: "-1",
          }}
        >
          <p>
            {profil.arkaplan_foto ? (
              <img
                src={`http://127.0.0.1:8000/api${profil.arkaplan_foto}`}
                onClick={arkaplan_foto_buyu}
                className="col-12"
                style={{ marginTop: "-26px", cursor: "pointer" }}
              />
            ) : (
              <img
                src="https://preview.redd.it/228r4jaqsmb31.jpg?auto=webp&s=e0c0156785ec570727ed1059be0c8df1f47b6797"
                onClick={arkaplan_foto_buyu}
                className="col-12"
                style={{ marginTop: "-26px", cursor: "pointer" }}
              />
            )}
          </p>
        </div>

        <div className="profil-rest h-100">
          <div
            className="profil-foto-buyuk display-none"
            onClick={profil_foto_kucul}
          >
            <ImCross size={20} color="white" className="buyuk_div_icon" />
            {profil.profil_foto ? (
              <img src={`http://127.0.0.1:8000/api${profil.profil_foto}`} />
            ) : (
              <img src="https://i.kym-cdn.com/photos/images/facebook/001/150/314/fb4.png" />
            )}
          </div>
          <div
            className="arkaplan-foto-buyuk display-none"
            onClick={arkaplan_foto_kucul}
          >
            <ImCross size={20} color="white" className="buyuk_div_icon" />
            {profil.arkaplan_foto ? (
              <img
                src={`http://127.0.0.1:8000/api${profil.arkaplan_foto}`}
                className="col-12"
              />
            ) : (
              <img src="https://preview.redd.it/228r4jaqsmb31.jpg?auto=webp&s=e0c0156785ec570727ed1059be0c8df1f47b6797" />
            )}
          </div>
          <p className="pb-4">
            {profil.profil_foto ? (
              <img
                className="img"
                onClick={profil_foto_buyu}
                src={`http://127.0.0.1:8000/api${profil.profil_foto}`}
              />
            ) : (
              <img
                className="img"
                onClick={profil_foto_buyu}
                src="https://i.kym-cdn.com/photos/images/facebook/001/150/314/fb4.png"
              />
            )}
            <span className="m-3">{profil.username}</span>
            {user && slug == slugify(user.username).toLowerCase() ? (
              <Link
                to={`/profil/${slugify(user.username).toLowerCase()}/duzenle/`}
              >
                <FaUserEdit size={22} color="darkred" className="user-edit" />
              </Link>
            ) : null}
          </p>
          {profil.biyografi ? (
            <span className="biyografi offset-2 text-break">
              {profil.biyografi}
            </span>
          ) : (
            <span className="biyografi offset-2 text-break">
              Kullan??c?? hakk??nda bilgi verilmemi??.
            </span>
          )}
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />

          <div style={{ borderTop: "2px solid darkred" }}>
            {forumlar.length > 0 ? (
              forumlar.map((forum) => (
                <>
                  <Forum
                    forum={forum}
                    change={change}
                    setChange={setChange}
                    profil={profil}
                    key={forum.id}
                    setRefresh={setRefresh}
                  />
                </>
              ))
            ) : (
              <h5
                className="text-center my-5 py-4"
                style={{ fontWeight: "400" }}
              >
                Herhangi bir forumie olu??turulmam????.
              </h5>
            )}
          </div>
        </div>
      </>
    );
  }
};

export default Profil;
