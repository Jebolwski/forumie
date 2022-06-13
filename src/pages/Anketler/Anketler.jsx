import React, { useState, useEffect } from "react";
import { GiHearts, GiBrokenHeart } from "react-icons/gi/index.esm";
import { AiFillEye } from "react-icons/ai/index.esm";
import { TiTick } from "react-icons/ti/index.esm";
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
      <h4 className="text-center">Anketler</h4>
      {anketler.map((anket) => (
        <>
          <Anket anket={anket} key={anket.id} />
        </>
      ))}
    </div>
  );
};

export default Anketler;
