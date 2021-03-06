import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import logo from "../img/logo.png";
import {
  AiOutlineLogout,
  AiOutlineHome,
  AiOutlineLogin,
} from "../../node_modules/react-icons/ai/index.esm";
import { CgProfile, CgPoll } from "../../node_modules/react-icons/cg/index.esm";
import {
  MdOutlineChatBubbleOutline,
  MdOutlineMarkChatUnread,
} from "../../node_modules/react-icons/md/index.esm";
import { FiSettings } from "../../node_modules/react-icons/fi/index.esm";
import slugify from "../../node_modules/slugify/slugify";
import "./Header.css";

const Header = () => {
  const [profil, setProfil] = useState([]);

  let { user, logoutUser, loading, varMi } = useContext(AuthContext);

  let profilFonk = async () => {
    let response = await fetch(
      `http://127.0.0.1:8000/api/profil/${slugify(
        user.username
      ).toLowerCase()}/`,
      {}
    );
    let data = await response.json();
    setProfil(data);
  };

  useEffect(() => {
    if (user) {
      profilFonk();
    }
  }, []);
  useEffect(() => {}, [loading]);
  if (loading) {
    return <h1>Yükleniyor</h1>;
  } else {
    return (
      <div className="header-div p-0">
        <ul
          className="d-flex list-unstyled justify-content-evenly text-white p-2"
          style={{ backgroundColor: "darkred", margin: "0" }}
        >
          <li>
            {user ? (
              <div className="d-none d-md-inline-block">
                <img src={logo} style={{ width: "30px" }} className="mx-3" />
                {user.username}
              </div>
            ) : (
              <>
                <img src={logo} style={{ width: "30px" }} />
              </>
            )}
          </li>

          <li>
            <Link to={"/"} className="text-white text-decoration-none d-flex">
              <AiOutlineHome size={24} className="mx-1" />
              <span className="d-none d-lg-block">Anasayfa</span>
            </Link>
          </li>
          <li>
            <Link
              to={"/forumlar/"}
              className="text-white text-decoration-none d-flex"
            >
              {" "}
              <MdOutlineChatBubbleOutline size={24} className="mx-1" />
              <span className="d-none d-lg-block">Forumieler</span>
            </Link>
          </li>
          {user ? (
            <li>
              <Link
                to={`/profil/${slugify(user.username).toLowerCase()}/`}
                className="text-white text-decoration-none d-flex"
              >
                <CgProfile size={24} className="mx-1" />{" "}
                <span className="d-none d-lg-inline-block">Profil</span>
              </Link>
            </li>
          ) : null}
          <li>
            <Link to={`/anketler/`} className="text-white">
              <CgPoll color="white" size={24} className="mx-1" />
              <span className="d-none d-lg-inline-block">Anketler</span>
            </Link>
          </li>
          {user ? (
            <li>
              <Link
                to={"/ayarlar/"}
                className="text-white text-decoration-none d-flex"
              >
                <FiSettings size={24} className="mx-1" />{" "}
                <span className="d-none d-lg-block">Ayarlar</span>
              </Link>
            </li>
          ) : null}

          <li>
            {user ? (
              <a
                onClick={logoutUser}
                className="d-flex text-white text-decoration-none cursor-pointer"
                style={{ cursor: "pointer" }}
              >
                <AiOutlineLogout size={24} className="mx-1 cursor-pointer" />{" "}
                <span className="d-none d-lg-block text-decoration-none cursor-pointer">
                  Çıkış Yap
                </span>
              </a>
            ) : (
              <Link
                to={"/giris/"}
                className="text-white text-decoration-none d-flex"
              >
                <AiOutlineLogin size={24} className="mx-1" />{" "}
                <span className="d-none d-lg-block text-decoration-none">
                  Giriş Yap
                </span>
              </Link>
            )}
          </li>
        </ul>
      </div>
    );
  }
};

export default Header;
