import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import logo from "../img/logo.png";
import {
  AiOutlineLogout,
  AiOutlineHome,
  AiOutlineLogin,
} from "../../node_modules/react-icons/ai/index.esm";
import { MdOutlineForum } from "../../node_modules/react-icons/md/index.esm";
import { FiSettings } from "../../node_modules/react-icons/fi/index.esm";

const Header = () => {
  let { user, logoutUser } = useContext(AuthContext);

  return (
    <div>
      <ul
        className="d-flex list-unstyled justify-content-evenly text-white p-2"
        style={{ backgroundColor: "darkred" }}
      >
        <li>
          <img src={logo} style={{ width: "30px" }} />
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
            <MdOutlineForum size={24} className="mx-1" />{" "}
            <span className="d-none d-lg-block">Forumlar</span>
          </Link>
        </li>
        {user ? (
          <li>
            <Link
              to={"/ayarlar/"}
              className="text-white text-decoration-none d-flex"
            >
              <FiSettings size={24} className="mx-1" />
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
              to={"/giris"}
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
};

export default Header;
