import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import { Link } from "react-router-dom";
import {
  ImKey,
  ImProfile,
} from "../../../node_modules/react-icons/im/index.esm";
import { AiOutlineMail } from "../../../node_modules/react-icons/ai/index.esm";
import slugify from "slugify";

const Ayarlar = () => {
  let { user } = useContext(AuthContext);

  return (
    <div className="col-10 col-lg-8 offset-1 offset-lg-2">
      <Link
        to={"/sifre-degistir/"}
        className="my-5 text-decoration-none text-dark"
      >
        <h5 className="text-center">
          <ImKey className="mx-3" />
          Şifre Değiştir
        </h5>
      </Link>
      <Link to={"/email-degistir/"} className="text-decoration-none text-dark">
        <h5 className="mt-5 text-center">
          <AiOutlineMail className="mx-3" /> Email Değiştir
        </h5>
      </Link>
      <Link
        className="text-decoration-none text-dark"
        to={`/profil/${slugify(user.username).toLowerCase()}/duzenle/`}
      >
        <h5 className="text-center mt-5">
          <ImProfile className="mx-3" />
          Profilini Düzenle
        </h5>
      </Link>
    </div>
  );
};

export default Ayarlar;
