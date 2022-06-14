import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const AnketAnaliz = () => {
  let param = useParams();
  const [anketler, setAnketler] = useState();
  let anketcevaplari = async () => {
    let response = await fetch(
      `http://127.0.0.1:8000/api/anket/${param.id}/analiz/?page=2`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );
    if (response.status === 200) {
      let data = await response.json();
      setAnketler(data);
      console.log(anketler);
    }
  };

  useEffect(() => {
    anketcevaplari();
  }, []);

  return (
    <div>
      <p></p>
    </div>
  );
};

export default AnketAnaliz;
