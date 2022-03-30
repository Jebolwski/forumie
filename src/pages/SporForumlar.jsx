import React, { useContext, useEffect, useState } from "react";
import Forum from "../components/Forum";
import { Link } from "react-router-dom";
import "./MMAForumlar.css";

import { BsChatDots } from "../../node_modules/react-icons/bs/index.esm";
import AuthContext from "../context/AuthContext";

const SporForumlar = () => {
  const [forumlar, setForumlar] = useState([]);
  let forumlarGel = async () => {
    let response = await fetch("http://127.0.0.1:8000/api/forumlar/spor/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    let data = await response.json();
    if (response.status === 200) {
      setForumlar(data);
    }
  };
  useEffect(() => {
    forumlarGel();
  }, []);
  let { user } = useContext(AuthContext);
  return (
    <>
      <h4 className="text-center my-5" style={{ fontWeight: "400" }}>
        Spor Forumları
      </h4>
      <div className="col-4">
        <div>
          <ul
            className="d-flex list-unstyled col-12 col-lg-6"
            style={{ marginLeft: "50vw", transform: "translate(-50%)" }}
          >
            <li className="mx-3">
              <input
                type="text"
                className="form-control"
                placeholder="Aranacak formun başlığı..."
              />
            </li>
            {user ? (
              <li>
                <Link to="/forum-ekle/">
                  <BsChatDots size={30} color="darkred" />
                </Link>
              </li>
            ) : null}
          </ul>
        </div>
      </div>
      {forumlar.length > 0 ? (
        <table className="table table-striped table-hover text-center mt-5">
          <thead>
            <tr>
              <th>Başlık</th>
              <th>Soru</th>
              <th>Kategori</th>
              <th className="d-none d-md-table-cell">Tarih</th>
              <th>Bak</th>
              <th>Düzenle</th>
              <th>Sil</th>
            </tr>
          </thead>
          <tbody>
            {forumlar.map((forum) => (
              <Forum forum={forum} key={forum.id} />
            ))}
          </tbody>
        </table>
      ) : (
        <h5 className="text-center mt-5" style={{ fontWeight: "400" }}>
          Herhangi bir forum oluşturulmamış.
        </h5>
      )}
    </>
  );
};

export default SporForumlar;
