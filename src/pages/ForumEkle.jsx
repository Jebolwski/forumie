import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import slugify from "../../node_modules/slugify/slugify";
const ForumEkle = () => {
  let { authTokens, user } = useContext(AuthContext);
  const [baslik, setBaslik] = useState(null);
  const [soru, setSoru] = useState(null);
  const [category, setCategory] = useState(null);
  let navigate = useNavigate();
  let forumEkle = async (e) => {
    e.preventDefault();
    let response = await fetch("http://127.0.0.1:8000/api/forum-ekle/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + String(authTokens.access),
      },
      body: JSON.stringify({
        soru: soru,
        baslik: baslik,
        baslik_slug: slugify(baslik),
        category: category,
      }),
    });
    if (response.status == 200) {
      console.log(
        JSON.stringify({
          soru: soru,
          baslik: baslik,
          username: user.username,
          user: user.user_id,
        })
      );
      navigate(`/forumlar/${category.toLowerCase()}/`);
    } else {
      console.log(response.status);
    }
  };
  return (
    <div className="col-10 offset-1">
      <h4 className="text-center pt-4">Forum Oluştur</h4>
      <div className="col-10 col-md-8 col-lg-6 offset-1 offset-md-2 offset-lg-3 pt-4">
        <form onSubmit={forumEkle}>
          <p className="pt-4">Başlık</p>
          <input
            type="text"
            name="baslik"
            onChange={(e) => {
              setBaslik(e.target.value);
            }}
            className="form-control"
          />
          <p className="pt-5">Soru</p>
          <input
            type="text"
            name="soru"
            onChange={(e) => {
              setSoru(e.target.value);
            }}
            className="form-control"
          />
          <select
            className="form-control mt-5"
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          >
            <option>Select a Category</option>
            <option value="MMA">MMA</option>
            <option value="Spor">Spor</option>
          </select>
          <input
            type="submit"
            className="btn btn-outline-danger mt-4 offset-5"
          />
        </form>
      </div>
    </div>
  );
};

export default ForumEkle;
