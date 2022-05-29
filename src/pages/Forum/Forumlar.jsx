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
  const [flag, setFlag] = useState(false);
  const [profil, setProfil] = useState([]);
  const [username, setUsername] = useState();
  const [soruBaslik, setSoruBaslik] = useState();
  const [soruAciklama, setSoruAciklama] = useState();
  const [soruUrl, setSoruUrl] = useState();
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

    if (response.status === 200) {
      let data = await response.json();
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

  let cevaplama = (e) => {
    let div = e.target.parentNode.parentNode.parentNode.parentNode;
    setUsername(div.querySelector(".username").innerText);
    setSoruBaslik(div.querySelector(".soru_baslik").innerText);
    setSoruAciklama(div.querySelector(".soru_aciklama").innerText);
    setSoruUrl(div.querySelector(".soru_url").src);
    console.log(username);
    console.log(soruBaslik);
    console.log(soruAciklama);
    console.log(soruUrl);
    setFlag(flag == true ? false : true);
  };

  let cevaplama_ana = () => {
    if (user) {
      let cevap_div = document.getElementById("cevap_div_parent");
      cevap_div.classList.remove("d-none");
    }
  };
  let cevaplama_ana_kapa = () => {
    if (user) {
      let cevap_div = document.getElementById("cevap_div_parent");
      cevap_div.classList.add("d-none");
    }
  };

  let cevapekle = () => {};
  useEffect(() => {
    cevaplama_ana();
  }, [flag]);
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
                    <BsChatDots
                      size={30}
                      style={{ cursor: "pointer" }}
                      color="darkred"
                    />
                  </div>
                ) : null}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {user ? (
        <div id="cevap_div_parent" className="d-none">
          <div
            id="cevap_div"
            className="col-10 offset-1 col-lg-8 offset-lg-2 p-3 border rounded mt-5"
          >
            <div className="acikp profil-f mb-2">
              <ImCross
                color="darkred"
                className="cross"
                onClick={cevaplama_ana_kapa}
                style={{ pointer: "cursor" }}
              />
              <br />
              <br />
              <img
                src={soruUrl ? soruUrl : null}
                style={{ width: "4vw", minWidth: "40px", minHeight: "55px" }}
                className="rounded-circle border"
              />
              <span className="ms-3">{username ? username : null}</span>
            </div>
            <div
              className="col-8 offset-1 text-left p-3"
              style={{ borderLeft: "3px solid darkred" }}
            >
              <p className="acikp baslik-cevapla">
                {soruBaslik ? soruBaslik : null}
              </p>
              <hr />
              <p className="acikp aciklama-cevapla">
                {soruAciklama ? soruAciklama : null}
              </p>
              <hr />
              <p className="text-break cevapla-cevapla acikp">
                @{username ? username.toLowerCase() : null} adlı kullanıcıya
                yanıt olarak
              </p>
            </div>
            <div className="acikp profil-f mt-2">
              <img
                src={`http://127.0.0.1:8000/api${profil.profil_foto}`}
                style={{ width: "4vw", minWidth: "40px", minHeight: "55px" }}
                className="rounded-circle"
              />
              <span className="ms-3">{user.username}</span>
            </div>
            <div className="mx-3 mt-4">
              <textarea className="form-control" rows="6"></textarea>
              <input
                type="submit"
                value={"Cevapla"}
                className="btn btn-outline-danger mt-3"
                onClick={cevapekle}
              />
            </div>
          </div>
        </div>
      ) : null}

      <div className="ekleme-div-parent hidden d-none">
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
          .map((forum) => (
            <Forum forum={forum} cevapla={cevaplama} key={forum.id} />
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
