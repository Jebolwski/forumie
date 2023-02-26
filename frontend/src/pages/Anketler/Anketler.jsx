import React, { useState, useEffect } from "react";
import { BsFileEarmarkPlusFill } from "react-icons/bs/index.esm";
import { Link } from "react-router-dom";
import "./Anketler.css";
import Anket from "./Anket";
const Anketler = () => {
  const [anketler, setAnketler] = useState([]);
  const Anketler_Gel = async () => {
    let response = await fetch("http://127.0.0.1:8000/api/anketler/", {
      method: "GET",
      headers: { "Content-Type": "content/application" },
    });
    if (response.status === 200) {
      let data = await response.json();
      setAnketler(data);
    }
  };

  useEffect(() => {
    Anketler_Gel();
  }, []);

  return (
    <div>
      <h4 className="text-center mb-4">
        Anketler{" "}
        {anketler.length > 0 ? null : (
          <Link to={"/anketler/ekle/"}>
            <BsFileEarmarkPlusFill className="icon ms-4" size="30" />
          </Link>
        )}
      </h4>
      {anketler.length > 0 ? (
        <Link to={"/anketler/ekle/"}>
          <BsFileEarmarkPlusFill
            className="icon offset-2 mb-3 mt-5 mb-2"
            size="30"
          />
        </Link>
      ) : (
        <h5 className="text-center mt-5 pt-5 ">Anket eklenmemiş...</h5>
      )}

      {anketler.map((anket) => (
        <>
          <Anket anket={anket} key={anket.id} />
        </>
      ))}
    </div>
  );
};

export default Anketler;
