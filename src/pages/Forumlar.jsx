import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { BsChatDots } from "../../node_modules/react-icons/bs/index.esm";
import { BiSearchAlt } from "../../node_modules/react-icons/bi/index.esm";
import AuthContext from "../context/AuthContext";
import {
  AiFillHeart,
  AiOutlineLoading3Quarters,
} from "react-icons/ai/index.esm";
import { FaRetweet } from "../../node_modules/react-icons/fa/index.esm";
import Forum from "../components/Forum";
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
          .map((forum) => <Forum forum={forum} />)
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
