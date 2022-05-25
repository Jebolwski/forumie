import React, { useContext, useState, useEffect } from "react";
import slugify from "../../../node_modules/slugify/slugify";
import { useNavigate, useParams } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

const ForumDuzenle = () => {
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
    }
  };
  let { authTokens, user } = useContext(AuthContext);
  let { id } = useParams();
  const [forum, setForum] = useState([]);
  const [baslik, setBaslik] = useState(forum.baslik);
  const [soru, setSoru] = useState(forum.soru);
  const [category, setCategory] = useState("MMA");
  let navigate = useNavigate();
  let categ = document.querySelector(".category");
  let categ_err = document.querySelector(".categ_err");

  let forumDuzenle = async (e) => {
    e.preventDefault();
    let response = await fetch(`http://127.0.0.1:8000/api/forum/${id}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + String(authTokens.access),
      },
      body: JSON.stringify({
        username: user.username,
        soru: soru,
        baslik: baslik,
        baslik_slug: slugify(baslik).toLocaleLowerCase(),
      }),
    });
    if (response.status == 200) {
      navigate(`/forumlar/`);
    } else {
    }
  };
  useEffect(() => {
    forumlarGel();
  }, []);

  return (
    <div className="col-10 offset-1">
      <h4 className="text-center pt-4">Forum Oluştur</h4>
      <div className="col-10 col-md-8 col-lg-6 offset-1 offset-md-2 offset-lg-3 pt-4">
        <form onSubmit={forumDuzenle}>
          <p className="pt-4">Başlık</p>
          <input
            type="text"
            name="baslik"
            onChange={(e) => {
              setBaslik(e.target.value);
            }}
            className="form-control"
            defaultValue={forum.baslik}
          />
          <p className="pt-5">Soru</p>
          <input
            type="text"
            name="soru"
            onChange={(e) => {
              setSoru(e.target.value);
            }}
            className="form-control"
            defaultValue={forum.soru}
          />
          <p className="categ_err"></p>
          <input type="submit" className="btn btn-outline-dark mt-4 offset-5" />
        </form>
      </div>
    </div>
  );
};

export default ForumDuzenle;
