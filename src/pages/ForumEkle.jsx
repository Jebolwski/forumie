import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import slugify from "../../node_modules/slugify/slugify";
const ForumEkle = () => {
  let { authTokens, user, forumEkle } = useContext(AuthContext);
  const [baslik, setBaslik] = useState(null);
  const [soru, setSoru] = useState(null);
  const [category, setCategory] = useState(null);
  let navigate = useNavigate();

  return (
    <div className="col-10 offset-1">
      <h4 className="text-center pt-4">Forum Oluştur</h4>
      <div className="col-10 col-md-8 col-lg-6 offset-1 offset-md-2 offset-lg-3 pt-4">
        <form onSubmit={forumEkle}>
          <p className="pt-4">Başlık</p>
          <input
            type="text"
            name="baslik"
            maxLength={60}
            className="form-control"
          />
          <p className="pt-5">Soru</p>
          <input
            type="text"
            maxLength={300}
            name="soru"
            className="form-control"
          />
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
