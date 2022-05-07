import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { BsChatDots } from "../../node_modules/react-icons/bs/index.esm";
import {
  BiSearchAlt,
  BiUpvote,
  BiDownvote,
} from "../../node_modules/react-icons/bi/index.esm";
import AuthContext from "../context/AuthContext";
import { GoArrowDown, GoArrowUp } from "../../node_modules/react-icons/go";
import { AiFillEye, AiOutlineLoading3Quarters } from "react-icons/ai/index.esm";
import {
  FcLike,
  FcLikePlaceholder,
} from "../../node_modules/react-icons/fc/index.esm";
import { FaRetweet } from "../../node_modules/react-icons/fa/index.esm";

import "./Forumlar.css";
import slugify from "slugify";

const Forumlar = () => {
  const [forumlar, setForumlar] = useState([]);
  const [forumSayisi, setForumSayisi] = useState(0);
  const [arama, setArama] = useState("");
  const [paginationNumber, setPaginationNumber] = useState(2);
  const [scrollFetchState, setScrollFetchState] = useState(0);
  let forumlarGel = async () => {
    setPaginationNumber(2);
    let response = await fetch("http://127.0.0.1:8000/api/forumlar/?page=1", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    let data = await response.json();
    if (response.status === 200) {
      setForumlar(data);
    }
    let a = await fetch("http://127.0.0.1:8000/api/forumlar/hepsi/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    let data1 = await a.json();
    setForumSayisi(data1);
  };
  let { user, authTokens } = useContext(AuthContext);
  useEffect(() => {
    forumlarGel();
  }, []);

  const fetchforumlar = async () => {
    setScrollFetchState(1);
    let response = await fetch(
      `http://127.0.0.1:8000/api/forumlar/?page=${paginationNumber}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.status === 200) {
      let data = await response.json();
      setForumlar(forumlar.concat(data));
      setScrollFetchState(0);
    }
    setPaginationNumber(paginationNumber + 1);
  };

  window.onscroll = () => {
    if (
      window.innerHeight + window.scrollY + 100 >= document.body.scrollHeight &&
      (forumlar.length != forumSayisi || forumlar.length > forumSayisi)
    ) {
      fetchforumlar();
    }
  };

  return (
    <div className="text-center">
      <div className="mb-4">
        <table className="col-10 col-md-6 offset-1 offset-md-3">
          <tbody>
            <tr>
              <td>
                <BiSearchAlt size={25} />
              </td>
              <td>
                <input
                  type="text"
                  placeholder="Aranacak başlık..."
                  className="form-control"
                  onChange={(e) => {
                    setArama(e.target.value);
                  }}
                />
              </td>
              <td>
                <Link to="/forum-ekle/">
                  <BsChatDots size={30} color="darkred" />
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr />
      {forumlar.length > 0 ? (
        forumlar
          .filter((forum) => {
            if (arama === "") {
              return forum;
            } else if (
              forum.baslik.toLowerCase().includes(arama.toLowerCase())
            ) {
              return forum;
            }
          })
          .map((forum) => (
            <div
              className="forumie-toplam col-10 offset-1 col-md-8 offset-md-2"
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
                            forumlarGel();
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
        <h5 className="text-center mt-5" style={{ fontWeight: "400" }}>
          Herhangi bir forumie oluşturulmamış.
        </h5>
      )}
      {scrollFetchState == 1 ? (
        <AiOutlineLoading3Quarters className="loading" />
      ) : null}
      <br />
      {forumSayisi <= forumlar.length ? (
        <a
          onClick={() => {
            forumlarGel();
            setPaginationNumber(2);
            window.scrollTo(0, 0);
          }}
          className="btn btn-danger"
        >
          Gizle
        </a>
      ) : null}
      <br />
      <br />
    </div>
  );
};

export default Forumlar;
