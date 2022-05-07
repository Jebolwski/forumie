import React, { useState, useEffect, useContext } from "react";
import slugify from "../../node_modules/slugify/slugify";
import AuthContext from "../context/AuthContext";
import { FaUserEdit } from "../../node_modules/react-icons/fa/index.esm";
import "./Profil.css";
import { Link, useParams } from "react-router-dom";
import Forum from "../components/Forum";
import { BiUpvote, BiDownvote } from "react-icons/bi/index.esm";
import { AiFillEye } from "react-icons/ai/index.esm";
import { GoArrowDown, GoArrowUp } from "../../node_modules/react-icons/go";
import { FaRetweet } from "../../node_modules/react-icons/fa/index.esm";
import {
  FcLike,
  FcLikePlaceholder,
} from "../../node_modules/react-icons/fc/index.esm";

const Profil = () => {
  const { slug } = useParams();
  const [profil, setProfil] = useState([]);
  const [forumlar, setForumlar] = useState([]);
  let [loading, setLoading] = useState(true);
  let { user, authTokens } = useContext(AuthContext);
  console.log(forumlar);
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
      let response = await fetch(
        `http://127.0.0.1:8000/api/forumlarim/${slug}/`,
        {
          method: "GET",
          "Conent-Type": "application/json",
        }
      );
      let data = await response.json();
      setForumlar(data);
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
          {forumlar.length > 0 ? (
            forumlar.map((forum) => (
              <div
                className="forumie-toplam col-10 offset-1 col-md-8 offset-md-2 mt-5"
                key={forum.id}
              >
                <div className="forumie" key={forum.id}>
                  <Link
                    to={`/forum/${forum.id}/`}
                    className="ms-2 text-decoration-none text-black"
                  >
                    <div>
                      <Link
                        to={`/profil/${slugify(forum.username).toLowerCase()}/`}
                        className="text-black text-decoration-none"
                      >
                        <div>
                          <img
                            src={`http://127.0.0.1:8000/api${forum.url}`}
                            className="forumie-profil-foto  rounded-circle mt-1"
                          />
                          <span className="ms-2">
                            {forum.username}{" "}
                            <span className="d-none d-md-inline">
                              · {forum.guncelle}
                            </span>
                          </span>
                        </div>
                      </Link>

                      <hr />
                      <h5
                        className="ms-3 ms-lg-5 me-4 text-break"
                        style={{ fontWeight: "500", textAlign: "left" }}
                      >
                        {forum.baslik}
                      </h5>
                      <hr />
                      <h6
                        className="ms-3 ms-lg-5 me-4 text-break"
                        style={{ fontWeight: "400", textAlign: "left" }}
                      >
                        {forum.soru}
                      </h6>
                      <p></p>
                    </div>
                  </Link>
                  <hr />
                  <ul className="list-unstyled justify-content-evenly d-flex">
                    <li>
                      <div className="reforumie">
                        <FaRetweet className="my-2 r-icon" />
                        <span className="ms-2 my-1 py-1">0</span>
                      </div>
                    </li>
                    <li>
                      <span
                        onClick={async () => {
                          if (user) {
                            let response = await fetch(
                              `http://127.0.0.1:8000/api/forum/${forum.id}/begen/`,
                              {
                                method: "POST",
                                headers: {
                                  "Content-Type": "application/json",
                                  Authorization:
                                    "Bearer " + String(authTokens.access),
                                },
                                body: JSON.stringify({
                                  username: user.username,
                                }),
                              }
                            );
                            if (response.status === 200) {
                              forumlari();
                            }
                          }
                        }}
                      >
                        <div className="like">
                          {user && forum.likes.includes(user.user_id) ? (
                            <>
                              <span className="p-1">
                                <FcLike
                                  className="l-icon"
                                  size={19}
                                  style={{ cursor: "pointer" }}
                                />
                              </span>
                              <span className="p-1">{forum.likes.length}</span>
                            </>
                          ) : (
                            <>
                              <span>
                                <FcLikePlaceholder
                                  className="l-icon"
                                  size={19}
                                  style={{ cursor: "pointer" }}
                                />
                              </span>
                              <span className="ms-2 my-1 py-1">
                                {forum.likes.length}
                              </span>
                            </>
                          )}
                        </div>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            ))
          ) : (
            <h5 className="text-center my-5 py-4" style={{ fontWeight: "400" }}>
              Herhangi bir forumie oluşturulmamış.
            </h5>
          )}
        </div>
      </>
    );
  }
};

export default Profil;
