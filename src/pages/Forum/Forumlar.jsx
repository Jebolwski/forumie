import React, { useState, useEffect, useContext } from "react";
import { BsChatDots } from "react-icons/bs/index.esm";
import { BiSearchAlt } from "react-icons/bi/index.esm";
import AuthContext from "../../context/AuthContext";
import { AiOutlineLoading3Quarters } from "react-icons/ai/index.esm";
import { ImCross } from "react-icons/im/index.esm";
import Forum from "../../components/Forum";
import "../Forum/Forumlar.css";
import slugify from "slugify";
const Forumlar = () => {
  const [forumlar, setForumlar] = useState([]);
  const [profil, setProfil] = useState([]);
  const [forumSayisi, setForumSayisi] = useState(0);
  const [arama, setArama] = useState("");
  const [paginationNumber, setPaginationNumber] = useState(2);
  const [scrollFetchState, setScrollFetchState] = useState(0);
  let { user, authTokens } = useContext(AuthContext);

  let profilGel = async () => {
    if (user) {
      let response = await fetch(
        `http://127.0.0.1:8000/api/profil/${slugify(
          user.username
        ).toLowerCase()}/`,
        {
          method: "GET",
          "Conent-Type": "application/json",
        }
      );
      if (response.status === 200) {
        let data = await response.json();
        setProfil(data);
      }
    }
  };

  let forumEkle = async (e) => {
    e.preventDefault();
    let response = await fetch("http://127.0.0.1:8000/api/forum-ekle/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + String(authTokens.access),
      },
      body: JSON.stringify({
        soru: e.target.soru.value,
        baslik: e.target.baslik.value,
        baslik_slug: slugify(e.target.baslik.value),
        username: user.username,
      }),
    });
    if (response.status == 200) {
      forumlarGel();
      divKapa();
      e.target.soru.value = "";
      e.target.baslik.value = "";
    }
  };

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
      profilGel();
    }
    let a = await fetch("http://127.0.0.1:8000/api/forumlar/hepsi/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    let data1 = await a.json();
    setForumSayisi(data1);
    profilGel();
  };
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

  const ekleme = () => {
    let div = document.querySelector(".ekleme-div-parent");
    div.classList.toggle("visible");
  };

  const divKapa = () => {
    let div = document.querySelector(".ekleme-div-parent");
    div.classList.toggle("visible");
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
                {user ? (
                  <div onClick={ekleme}>
                    <BsChatDots size={30} color="darkred" />
                  </div>
                ) : null}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="ekleme-div-parent hidden">
        <div className="ekleme-div p-5">
          <ImCross color="darkred" className="cross" onClick={divKapa} />
          <form onSubmit={forumEkle}>
            {profil.profil_foto ? (
              <img
                src={"http://127.0.0.1:8000/api" + profil.profil_foto}
                className="ekleme-div-foto"
              />
            ) : (
              <img
                src={
                  "https://i.kym-cdn.com/photos/images/facebook/001/150/314/fb4.png"
                }
                className="ekleme-div-foto"
              />
            )}

            <input
              type="text"
              name="baslik"
              maxLength={60}
              className="form-control1 col-10"
              placeholder="Başlık"
            />
            <br />
            <input
              type="text"
              maxLength={300}
              name="soru"
              className="form-control1 col-9"
              placeholder="Soru"
            />
            <input
              type="submit"
              value={"Ekle"}
              className="btn btn-danger mt-4"
            />
          </form>
        </div>
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
          .map((forum) => <Forum forum={forum} key={forum.id} />)
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
