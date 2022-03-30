import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const ForumDetay = () => {
  let { id } = useParams();
  const [forum, setForum] = useState([]);
  let forumlarGel = async () => {
    let response = await fetch(`http://127.0.0.1:8000/api/forum/${id}/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    let data = await response.json();
    console.log(response.status);
    if (response.status === 200) {
      setForum(data);
      console.log(data);
    }
  };
  useEffect(() => {
    forumlarGel();
  }, []);
  //   let tarih = forum.guncelle.slice(0, 10);
  return (
    <>
      <div className="col-10 offset-1">
        <h4 className="pb-3 pt-4">Soru</h4>
        <div className="col-8 col-lg-6 border p-3">
          <h5>{forum.baslik}</h5>
          <hr />
          <p>{forum.soru}</p>
          {/* <p>{tarih}</p> */}
        </div>
      </div>
    </>
  );
};

export default ForumDetay;
