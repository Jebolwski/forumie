import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AuthContext from "../context/AuthContext";
const ForumSil = () => {
  let { authTokens, user } = useContext(AuthContext);
  let { id } = useParams();
  let navigate = useNavigate();
  const [forum, setForum] = useState([]);

  let deleteForum = async (e) => {
    e.preventDefault();
    let response = await fetch(`http://127.0.0.1:8000/api/forum/${id}/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + String(authTokens.access),
      },
    });
    if (response.status === 200) {
      navigate("/forumlar/");
    } else {
      alert("Something went wrong!");
    }
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
    }
  };
  useEffect(() => {
    forumlarGel();
  }, []);

  return (
    <div>
      <form onSubmit={deleteForum}>
        <h5 style={{ fontWeight: "400" }} className="pt-5 text-center">
          '{forum.baslik}' başlıklı forumu silmek istediğinize emin misiniz ?
        </h5>
        <input
          type="submit"
          value="Sil"
          className="btn btn-outline-danger mt-4"
          style={{ marginLeft: "50%", transform: "translate(-50%)" }}
        />
      </form>
    </div>
  );
};

export default ForumSil;
