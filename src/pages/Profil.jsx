import React, { useState, useEffect, useContext } from "react";
import slugify from "../../node_modules/slugify/slugify";
import AuthContext from "../context/AuthContext";
import { FaUserEdit } from "../../node_modules/react-icons/fa/index.esm";
import "./Profil.css";
import { Link, useParams } from "react-router-dom";
import Forum from "../components/Forum";
import ReForum from "../components/ReForum";

const Profil = () => {
  const { slug } = useParams();
  const [profil, setProfil] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [forumlar, setForumlar] = useState([]);
  let [loading, setLoading] = useState(true);
  let { user, authTokens } = useContext(AuthContext);
  let profilFonk = async () => {
    let response = await fetch(`http://127.0.0.1:8000/api/profil/${slug}/`, {
      method: "GET",
      "Conent-Type": "application/json",
    });
    let data = await response.json();
    setProfil(data);
    setLoading(false);
  };
  let forumlari = async () => {
    if (loading == false) {
      let response = await fetch(`http://127.0.0.1:8000/api/forumlarim/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: user.username,
        }),
      });
      if (response.status == 200) {
        let data = await response.json();
        setForumlar(data);
      }
    }
  };

  useEffect(() => {
    profilFonk();
    forumlari();
  }, []);
  useEffect(() => {
    forumlari();
  }, [loading]);

  if (loading) {
    return (
      <>
        <h5 className="text-center mt-5">Yükleniyor</h5>
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
                className="col-12"
                style={{ marginTop: "-26px" }}
              />
            ) : (
              <img
                src="https://preview.redd.it/228r4jaqsmb31.jpg?auto=webp&s=e0c0156785ec570727ed1059be0c8df1f47b6797"
                className="col-12"
                style={{ marginTop: "-26px" }}
              />
            )}
          </p>
        </div>
        <div className="profil-rest h-100">
          <p className="pb-4">
            {profil.profil_foto ? (
              <img
                className="img"
                src={`http://127.0.0.1:8000/api${profil.profil_foto}`}
              />
            ) : (
              <img
                className="img"
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
              Kullanıcı hakkında bilgi verilmemiş.
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
                Herhangi bir forumie oluşturulmamış.
              </h5>
            )}
          </div>
        </div>
      </>
    );
  }
};

export default Profil;
