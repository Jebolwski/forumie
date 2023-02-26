import React from "react";
import { Link } from "react-router-dom";

const SifreDegisti = () => {
  return (
    <div>
      <h4 className="mt-3 text-center">
        Şifreniz Değişti <Link to={"/giris/"}>Giriş Yapın</Link>
      </h4>
    </div>
  );
};

export default SifreDegisti;
