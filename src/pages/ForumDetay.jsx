import React, { useContext, useEffect, useState } from "react";
import { useParams, Link, Navigate, useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { BsTrashFill } from "../../node_modules/react-icons/bs/index.esm";
import { HiReply } from "../../node_modules/react-icons/hi/index.esm";
import { AiOutlineEdit, AiFillDelete } from "react-icons/ai/index.esm";
import slugify from "../../node_modules/slugify/slugify";
import "./ForumDetay.css";
import { GoArrowDown, GoArrowUp } from "../../node_modules/react-icons/go";
import {
  BiSearchAlt,
  BiUpvote,
  BiDownvote,
} from "../../node_modules/react-icons/bi/index.esm";
const ForumDetay = () => {
  let { user, authTokens } = useContext(AuthContext);
  let { id } = useParams();
  const [cevap, setCevap] = useState(null);
  const [cevaplar, setCevaplar] = useState(null);
  const [username, setUsername] = useState(() => (user ? user.username : null));
  const [cevabaCevap, setCevabaCevap] = useState(null);
  const [forum, setForum] = useState([]);
  const [cevaba_cevap_profil_username, setCevaba_cevap_profil_username] =
    useState(null);
  let [loading, setLoading] = useState(true);

  let text_ac = (e) => {
    var text = document.getElementById(
      String(`-${e.target.className.baseVal}`)
    );
    text.classList.toggle("visible");
  };

  let forumlarGel = async () => {
    let response = await fetch(`http://127.0.0.1:8000/api/forum/${id}/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    let data = await response.json();
    if (response.status === 200) {
      setForum(data);
      setLoading(false);
    }
  };

  let cevaplarGel = async () => {
    let response = await fetch(
      `http://127.0.0.1:8000/api/forum/${id}/cevaplari/`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.status === 200) {
      let data = await response.json();
      setCevaplar(data);
    }
  };

  let cevap_area = document.querySelector(".cevap_area");
  useEffect(() => {
    forumlarGel();
  }, []);

  useEffect(() => {
    cevaplarGel();
  }, [loading]);

  let cevapla = async (e) => {
    e.preventDefault();
    let response = await fetch(`http://127.0.0.1:8000/api/forum/cevap/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: user.username,
        cevap: cevap,
        forum: forum.id,
        cevaba_cevap: cevabaCevap,
        cevaba_cevap_profil_username: cevaba_cevap_profil_username,
        username: username,
      }),
    });
    if (response.status == 200) {
      cevaplarGel();
      cevap_area.value = "";
    }
  };
  if (loading) {
    return <h4 className="text-center mt-5">Yükleniyor</h4>;
  } else {
    return (
      <>
        {user && forum.username == user.username ? (
          <ul className="list-unstyled d-flex justify-content-evenly pt-4">
            <li>
              <Link to={`/forum/${forum.id}/duzenle/`}>
                <AiOutlineEdit size="24" color="black" />
              </Link>
            </li>
            <li>
              <Link to={`/forum/${forum.id}/sil/`}>
                <BsTrashFill size="24" color="darkred" />
              </Link>
            </li>
          </ul>
        ) : null}

        <div className="col-10 offset-1">
          <h4 className="pb-3 pt-4">Soru</h4>
          <ul className="list-unstyled d-grid">
            <li>
              {user ? (
                <div className="py-2 mb-4">
                  <span
                    onClick={async () => {
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
                        forumlarGel();
                      }
                    }}
                  >
                    {user && forum.likes.includes(user.user_id) ? (
                      <GoArrowUp
                        size={28}
                        style={{ cursor: "pointer", marginBottom: "8px" }}
                      />
                    ) : (
                      <BiUpvote
                        size={22}
                        style={{ cursor: "pointer", marginBottom: "8px" }}
                      />
                    )}
                  </span>
                  <span className="ms-2 my-1 py-1 h4">
                    {forum.likes.length}
                  </span>
                  <span></span>
                  <span
                    className="ms-2"
                    onClick={async () => {
                      let response = await fetch(
                        `http://127.0.0.1:8000/api/forum/${forum.id}/begenme/`,
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
                        forumlarGel();
                      }
                    }}
                  >
                    {user && forum.dislikes.includes(user.user_id) ? (
                      <GoArrowDown
                        size={28}
                        style={{ cursor: "pointer", marginBottom: "8px" }}
                      />
                    ) : (
                      <BiDownvote
                        size={22}
                        style={{ cursor: "pointer", marginBottom: "8px" }}
                      />
                    )}
                  </span>
                  <span className="ms-2 my-1 py-1 h4">
                    {forum.dislikes.length}
                  </span>
                </div>
              ) : null}
            </li>
            <li>
              <div className="col-8 col-lg-6 border p-3">
                <Link
                  to={`/profil/${slugify(forum.username).toLowerCase()}/`}
                  className="text-decoration-none text-black"
                >
                  <h5>
                    {" "}
                    {forum.url ? (
                      <>
                        <img
                          src={`http://127.0.0.1:8000/api${forum.url}`}
                          style={{
                            height: "4.5vw",
                            width: "4.5vw",
                            minHeight: "30px",
                            minWidth: "30px",
                            borderRadius: "100%",
                          }}
                          className="text-decoration-none"
                        />
                      </>
                    ) : (
                      <img
                        src="https://i.kym-cdn.com/photos/images/facebook/001/150/314/fb4.png"
                        style={{
                          height: "4.5vw",
                          width: "4.5vw",
                          minHeight: "30px",
                          minWidth: "30px",
                          borderRadius: "100%",
                        }}
                        className="text-decoration-none"
                      />
                    )}
                    <span className="mx-2">{forum.username}</span>
                  </h5>
                </Link>
                <hr />
                <h5>{forum.baslik}</h5>
                <hr />
                <p>{forum.soru}</p>
                {/* <p>{tarih}</p> */}
              </div>
            </li>
          </ul>
        </div>
        <div>
          {cevaplar
            ? cevaplar.map((cevap, index) => (
                <div
                  key={index}
                  className="col-7 offset-3 border rounded p-4 mt-4"
                >
                  {cevap.cevaba_cevap ? (
                    <>
                      <h6>Cevaplandı : {cevap.cevaba_cevap_profil_username}</h6>
                      <hr />
                    </>
                  ) : null}
                  <h6 style={{ fontWeight: "400" }}>
                    {" "}
                    <Link
                      to={`/profil/${slugify(cevap.username).toLowerCase()}/`}
                      className="text-decoration-none text-black"
                    >
                      {forum.url ? (
                        <img
                          src={`http://127.0.0.1:8000/api${forum.url}`}
                          style={{
                            height: "4.5vw",
                            width: "4.5vw",
                            minHeight: "30px",
                            minWidth: "30px",
                            borderRadius: "100%",
                          }}
                          className="text-decoration-none"
                        />
                      ) : (
                        <img
                          src="https://i.kym-cdn.com/photos/images/facebook/001/150/314/fb4.png"
                          style={{
                            height: "4.5vw",
                            width: "4.5vw",
                            minHeight: "30px",
                            minWidth: "30px",
                            borderRadius: "100%",
                          }}
                          className="text-decoration-none"
                        />
                      )}{" "}
                      <span className="mx-2">{cevap.username}</span>
                    </Link>
                  </h6>
                  <hr />
                  <h6 style={{ fontWeight: "400" }}>
                    {cevap.cevap}{" "}
                    {user && user.username == cevap.username ? (
                      <span>
                        <AiFillDelete
                          style={{ cursor: "pointer" }}
                          size={21}
                          className="mx-2"
                          onClick={async () => {
                            let response = await fetch(
                              `http://127.0.0.1:8000/api/forum/cevap/${cevap.id}/sil/`,
                              {
                                method: "DELETE",
                                headers: {
                                  "Content-Type": "application/json",
                                },
                              }
                            );
                            if (response.status === 200) {
                              cevaplarGel();
                            }
                          }}
                        />
                      </span>
                    ) : null}
                    <span>
                      <HiReply
                        size={21}
                        className={cevap.id}
                        style={{ cursor: "pointer", marginLeft: "8px" }}
                        onClick={text_ac}
                      />
                    </span>
                  </h6>
                  <hr />
                  <h6 style={{ fontWeight: "300" }}>{cevap.olusturma}</h6>
                  <form onSubmit={cevapla}>
                    <div className={`${`-${cevap.id}`}`}>
                      {user ? (
                        <div id={`${`-${cevap.id}`}`} className="hidden">
                          {" "}
                          <textarea
                            rows="5"
                            className="form-control"
                            onChange={(e) => {
                              setCevap(e.target.value);
                              setCevabaCevap(cevap.id);
                              setCevaba_cevap_profil_username(cevap.username);
                            }}
                            name={cevap.id}
                            placeholder={`${cevap.cevap} mesajına cevap veriliyor...`}
                          ></textarea>
                          <input
                            type="submit"
                            id={`${`!${cevap.id}`}`}
                            onClick={() => {
                              let height = window.innerHeight;
                              window.scrollTo({
                                top: height,
                                left: 0,
                                behavior: "smooth",
                              });
                              let area = document.getElementsByName(
                                `${cevap.id}`
                              );
                              area.value = "";
                              area.innerHTML = "";
                              area.innerText = "";
                            }}
                            className="btn btn-outline-danger center mt-2"
                          />
                        </div>
                      ) : (
                        <>
                          <textarea
                            id={`${`-${cevap.id}`}`}
                            rows="5"
                            className="hidden"
                            disabled
                            placeholder={"Cevaplamak için giriş yapın."}
                          ></textarea>
                          <input
                            type="submit"
                            disabled
                            className="btn btn-outline-danger center mt-2"
                          />
                        </>
                      )}
                    </div>
                  </form>
                </div>
              ))
            : null}
        </div>
        <form onSubmit={cevapla}>
          <div className="col-8 offset-2 mt-5">
            {user ? (
              <>
                <textarea
                  className="cevap_area form-control"
                  rows="5"
                  maxLength={400}
                  placeholder="Cevabınız..."
                  onChange={(e) => {
                    setCevap(e.target.value);
                  }}
                ></textarea>
                <input
                  type="submit"
                  value="Cevapla"
                  maxLength={400}
                  className="btn btn-outline-danger center my-5"
                />
              </>
            ) : (
              <>
                <textarea
                  className="cevap_area form-control"
                  rows="5"
                  maxLength={400}
                  disabled
                  placeholder="Cevaplamak için giriş yapın."
                ></textarea>
                <input
                  type="submit"
                  value="Cevapla"
                  maxLength={400}
                  disabled
                  className="btn btn-outline-danger center my-5"
                />
              </>
            )}
          </div>
        </form>
      </>
    );
  }
};

export default ForumDetay;
