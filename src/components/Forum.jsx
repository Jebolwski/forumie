import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import slugify from "../../node_modules/slugify/slugify";
import { AiFillHeart } from "react-icons/ai/index.esm";
import "./Forum.css";
import AuthContext from "../context/AuthContext";
import {
  FaRetweet,
  FaRegComments,
} from "../../node_modules/react-icons/fa/index.esm";

const Forum = (props) => {
  let { user, authTokens } = useContext(AuthContext);
  let path = window.location.href.slice(0, 29);
  let navigate = useNavigate();
  return (
    <>
      <div
        className="forumie-toplam col-10 offset-1 col-md-8 offset-md-2 mb-3"
        key={props.forum.id}
      >
        {props.profil && props.forum.reforumie.includes(props.profil.user) ? (
          <span>
            <FaRetweet
              size={16}
              style={{ color: "darkred" }}
              className="my-3 ms-4 me-3 r-icon"
            />
            {props.profil.username} ReForumieledi
          </span>
        ) : null}

        <div className="forumie" key={props.forum.id}>
          <Link
            to={`/forum/${props.forum.id}/`}
            className="ms-2 text-decoration-none text-dark"
          >
            <div>
              <div>
                <Link
                  to={`/profil/${slugify(props.forum.username).toLowerCase()}/`}
                  className="ms-2 text-decoration-none text-dark"
                >
                  {path == "http://localhost:3000/forumla" ? (
                    props.forum.url ? (
                      <img
                        src={`http://127.0.0.1:8000/api${props.forum.url}`}
                        className="soru_url forumie-profil-foto rounded-circle border mt-1"
                      />
                    ) : (
                      <img
                        src="https://i.kym-cdn.com/photos/images/facebook/001/150/314/fb4.png"
                        className="soru_url forumie-profil-foto border rounded-circle mt-1"
                      />
                    )
                  ) : props.forum.url ? (
                    <img
                      src={`http://127.0.0.1:8000/api${props.forum.url}`}
                      className="soru_url forumie-profil-foto rounded-circle border mt-1 ms-4"
                    />
                  ) : (
                    <img
                      src="https://i.kym-cdn.com/photos/images/facebook/001/150/314/fb4.png"
                      className="soru_url forumie-profil-foto border rounded-circle mt-1 ms-4"
                    />
                  )}
                </Link>
                <Link
                  to={`/profil/${slugify(props.forum.username).toLowerCase()}/`}
                  className="ms-2 text-decoration-none text-dark"
                >
                  <span className="ms-2">
                    <span className="username">{props.forum.username}</span>{" "}
                    <span className="d-none d-md-inline">
                      · {props.forum.guncelle}
                    </span>
                  </span>
                </Link>
              </div>

              <hr />
              <h5
                className="soru_baslik ms-3 ms-lg-5 me-4 text-break"
                style={{ fontWeight: "500", textAlign: "left" }}
              >
                {props.forum.baslik}
              </h5>
              <hr />
              <h6
                className="soru_aciklama ms-3 ms-lg-5 me-4 text-break"
                style={{ fontWeight: "400", textAlign: "left" }}
              >
                {props.forum.soru}
              </h6>
              <p></p>
            </div>
          </Link>
          <hr />
          <ul className="list-unstyled justify-content-evenly d-flex">
            <li>
              {user ? (
                <FaRegComments
                  size={18}
                  style={{ cursor: "pointer" }}
                  onClick={props.cevapla}
                />
              ) : (
                <Link to={"/giris/"}>
                  <FaRegComments size={18} color="black" />
                </Link>
              )}
              <span id={`${props.forum.id}`} className="ms-2 my-1 py-1">
                {props.forum.yanit_sayisi}
              </span>
            </li>
            <li>
              <span
                className="reforumie"
                style={{ cursor: "pointer" }}
                onClick={async () => {
                  if (user) {
                    let response = await fetch(
                      `http://127.0.0.1:8000/api/forum/${props.forum.id}/reforumie/`,
                      {
                        method: "POST",
                        headers: {
                          "Content-Type": "application/json",
                          Authorization: "Bearer " + String(authTokens.access),
                        },
                        body: JSON.stringify({
                          username: user.username,
                        }),
                      }
                    );
                    if (response.status === 200) {
                      if (path === "http://localhost:3000/profil/") {
                        props.setRefresh(true);
                        props.setRefresh(false);
                      }
                      let data = await response.json();
                      let like_sayi = document.getElementById(
                        `${props.forum.id}`
                      );
                      like_sayi.innerHTML = data;
                    }
                    let response1 = await fetch(
                      `http://127.0.0.1:8000/api/forum/${props.forum.id}/reforumie/renk/`,
                      {
                        method: "POST",
                        headers: {
                          "Content-Type": "application/json",
                          Authorization: "Bearer " + String(authTokens.access),
                        },
                        body: JSON.stringify({
                          username: user.username,
                        }),
                      }
                    );
                    if (response1.status === 200) {
                      if (path === "http://localhost:3000/profil/") {
                        props.setRefresh(true);
                        props.setRefresh(false);
                      }
                      let data = await response1.json();
                      let re_forumielendi = document.getElementById(
                        `-${props.forum.id}`
                      );
                      if (data == 1) {
                        re_forumielendi.style.color = "green";
                      } else {
                        re_forumielendi.style.color = "black";
                      }
                    }
                  } else {
                    navigate("/giris/");
                  }
                }}
              >
                {user && props.forum.reforumie.includes(user.user_id) ? (
                  <FaRetweet
                    size={19}
                    id={`-${props.forum.id}`}
                    style={{ color: "green" }}
                    className="my-2 r-icon"
                  />
                ) : (
                  <FaRetweet
                    size={19}
                    id={`-${props.forum.id}`}
                    className="my-2 r-icon"
                  />
                )}
              </span>
              <span id={`${props.forum.id}`} className="ms-2 my-1 py-1">
                {props.forum.reforumie.length}
              </span>
            </li>
            <li>
              <span
                onClick={async () => {
                  if (user) {
                    let response = await fetch(
                      `http://127.0.0.1:8000/api/forum/${props.forum.id}/begen/`,
                      {
                        method: "POST",
                        headers: {
                          "Content-Type": "application/json",
                          Authorization: "Bearer " + String(authTokens.access),
                        },
                        body: JSON.stringify({
                          username: user.username,
                        }),
                      }
                    );
                    if (response.status === 200) {
                      let data = await response.json();
                      let like_sayi = document.getElementById(
                        `--${props.forum.id}`
                      );
                      like_sayi.innerHTML = data;
                    }

                    let response1 = await fetch(
                      `http://127.0.0.1:8000/api/forum/${props.forum.id}/begen/renk/`,
                      {
                        method: "POST",
                        headers: {
                          "Content-Type": "application/json",
                          Authorization: "Bearer " + String(authTokens.access),
                        },
                        body: JSON.stringify({
                          username: user.username,
                        }),
                      }
                    );
                    if (response1.status === 200) {
                      let data = await response1.json();
                      let likelendi = document.getElementById(
                        `!${props.forum.id}`
                      );
                      if (data == 1) {
                        likelendi.style.color = "red";
                      } else {
                        likelendi.style.color = "rgba(197, 119, 119, 0.589)";
                      }
                    }
                  } else {
                    navigate("/giris/");
                  }
                }}
              >
                {user && props.forum.likes.includes(user.user_id) ? (
                  <div className="like">
                    <span className="p-1">
                      <AiFillHeart
                        className="l-icon"
                        id={`!${props.forum.id}`}
                        size={19}
                        style={{ color: "red", cursor: "pointer" }}
                      />
                    </span>
                    <span id={`--${props.forum.id}`} className="ms-2 my-1 py-1">
                      {props.forum.likes.length}
                    </span>
                  </div>
                ) : (
                  <div className="like">
                    <span>
                      <AiFillHeart
                        id={`!${props.forum.id}`}
                        className="l-icon"
                        size={19}
                        style={{
                          color: "rgba(197, 119, 119, 0.589)",
                          cursor: "pointer",
                        }}
                      />
                    </span>
                    <span id={`--${props.forum.id}`} className="ms-2 my-1 py-1">
                      {props.forum.likes.length}
                    </span>
                  </div>
                )}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Forum;
