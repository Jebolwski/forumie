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
  var div = 1;

  let cevaplama = (e) => {
    div = e.target.parentNode.parentNode.parentNode.parentNode;
    console.log(div);
    setFlag(flag == true ? false : true);
  };

  let cevap_div = document.querySelector(".cevap-div");
  let cevaplama_ana = () => {
    cevap_div.style.display = "block";
    let cevapla_cevapla = cevap_div.querySelector("cevapla-cevapla");
    let aciklama_cevapla = cevap_div.querySelector("aciklama-cevapla");
    let baslik_cevapla = cevap_div.querySelector("baslik-cevapla");
    // cevapla_cevapla.innerHTML = div
    //   .querySelector("username")
    //   .innerHTML.toLowerCase();
  };

  useEffect(() => {
    cevaplama_ana();
  }, [flag]);
  cevap_div.style.display = "none";
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
      <div
        className="cevap-div col-10 offset-1 col-lg-8 offset-lg-2 p-3 border rounded"
        style={{ display: "none" }}
      >
        <div className="acikp profil-f mb-2">
          <img
            src="https://pbs.twimg.com/profile_images/1490036796125757448/8E-1PovE_400x400.jpg"
            style={{ width: "4vw", minWidth: "40px" }}
            className="rounded-circle"
          />
          <span className="ms-3">Yönetici</span>
        </div>
        <div
          className="col-8 offset-1 text-left p-3"
          style={{ borderLeft: "3px solid darkred" }}
        >
          <p className="acikp baslik-cevapla">Başlık</p>
          <hr />
          <p className="acikp aciklama-cevapla">Açıklama</p>
          <hr />
          <p className="text-break cevapla-cevapla acikp">
            @yönetici adlı kullanıcıya yanıt olarak
          </p>
        </div>
        <div className="acikp profil-f mt-2">
          <img
            src="https://pbs.twimg.com/profile_images/1490036796125757448/8E-1PovE_400x400.jpg"
            style={{ width: "4vw", minWidth: "40px" }}
            className="rounded-circle"
          />
          <span className="ms-3">Jebolwski</span>
        </div>
        <div className="mx-3 mt-4">
          <textarea className="form-control" rows="6"></textarea>
          <input
            type="submit"
            value={"Cevapla"}
            className="btn btn-outline-danger mt-3"
          />
        </div>
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
