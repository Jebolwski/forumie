import React, { useState, useEffect } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";

const AnketDuzenle = () => {
  let param = useParams();
  const [loading, setLoading] = useState();
  const [anket, setAnket] = useState([]);
  const [baslik, setBaslik] = useState(anket.baslik);
  const [soru1, setSoru1] = useState(anket.soru1);
  const [soru2, setSoru2] = useState(anket.soru2);
  const [soru3, setSoru3] = useState(anket.soru3);
  const [soru4, setSoru4] = useState(anket.soru4);
  const [soru5, setSoru5] = useState(anket.soru5);
  const [soru6, setSoru6] = useState(anket.soru6);
  const [soru7, setSoru7] = useState(anket.soru7);
  const [soru8, setSoru8] = useState(anket.soru8);
  const [soru9, setSoru9] = useState(anket.soru9);
  const [soru10, setSoru10] = useState(anket.soru10);
  const [soru11, setSoru11] = useState(anket.soru11);
  const [soru12, setSoru12] = useState(anket.soru12);
  const [soru13, setSoru13] = useState(anket.soru13);
  const [soru14, setSoru14] = useState(anket.soru14);
  const [soru15, setSoru15] = useState(anket.soru15);
  const [soru16, setSoru16] = useState(anket.soru16);
  const [soru17, setSoru17] = useState(anket.soru17);
  const [soru18, setSoru18] = useState(anket.soru18);
  const [soru19, setSoru19] = useState(anket.soru19);
  const [soru20, setSoru20] = useState(anket.soru20);

  const [soru1cevap1, setSoru1cevap1] = useState(anket.soru1cevap1);
  const [soru1cevap2, setSoru1cevap2] = useState(anket.soru1cevap2);
  const [soru1cevap3, setSoru1cevap3] = useState(anket.soru1cevap3);
  const [soru1cevap4, setSoru1cevap4] = useState(anket.soru1cevap4);
  const [soru1cevap5, setSoru1cevap5] = useState(anket.soru1cevap5);

  const [soru2cevap1, setSoru2cevap1] = useState(anket.soru2cevap1);
  const [soru2cevap2, setSoru2cevap2] = useState(anket.soru2cevap2);
  const [soru2cevap3, setSoru2cevap3] = useState(anket.soru2cevap3);
  const [soru2cevap4, setSoru2cevap4] = useState(anket.soru2cevap4);
  const [soru2cevap5, setSoru2cevap5] = useState(anket.soru2cevap5);

  const [soru3cevap1, setSoru3cevap1] = useState(anket.soru3cevap1);
  const [soru3cevap2, setSoru3cevap2] = useState(anket.soru3cevap2);
  const [soru3cevap3, setSoru3cevap3] = useState(anket.soru3cevap3);
  const [soru3cevap4, setSoru3cevap4] = useState(anket.soru3cevap4);
  const [soru3cevap5, setSoru3cevap5] = useState(anket.soru3cevap5);

  const [soru4cevap1, setSoru4cevap1] = useState(anket.soru4cevap1);
  const [soru4cevap2, setSoru4cevap2] = useState(anket.soru4cevap2);
  const [soru4cevap3, setSoru4cevap3] = useState(anket.soru4cevap3);
  const [soru4cevap4, setSoru4cevap4] = useState(anket.soru4cevap4);
  const [soru4cevap5, setSoru4cevap5] = useState(anket.soru4cevap5);

  const [soru5cevap1, setSoru5cevap1] = useState(anket.soru5cevap1);
  const [soru5cevap2, setSoru5cevap2] = useState(anket.soru5cevap2);
  const [soru5cevap3, setSoru5cevap3] = useState(anket.soru5cevap3);
  const [soru5cevap4, setSoru5cevap4] = useState(anket.soru5cevap4);
  const [soru5cevap5, setSoru5cevap5] = useState(anket.soru5cevap5);

  const [soru6cevap1, setSoru6cevap1] = useState(anket.soru6cevap1);
  const [soru6cevap2, setSoru6cevap2] = useState(anket.soru6cevap2);
  const [soru6cevap3, setSoru6cevap3] = useState(anket.soru6cevap3);
  const [soru6cevap4, setSoru6cevap4] = useState(anket.soru6cevap4);
  const [soru6cevap5, setSoru6cevap5] = useState(anket.soru6cevap5);

  const [soru7cevap1, setSoru7cevap1] = useState(anket.soru7cevap1);
  const [soru7cevap2, setSoru7cevap2] = useState(anket.soru7cevap2);
  const [soru7cevap3, setSoru7cevap3] = useState(anket.soru7cevap3);
  const [soru7cevap4, setSoru7cevap4] = useState(anket.soru7cevap4);
  const [soru7cevap5, setSoru7cevap5] = useState(anket.soru7cevap5);

  const [soru8cevap1, setSoru8cevap1] = useState(anket.soru8cevap1);
  const [soru8cevap2, setSoru8cevap2] = useState(anket.soru8cevap2);
  const [soru8cevap3, setSoru8cevap3] = useState(anket.soru8cevap3);
  const [soru8cevap4, setSoru8cevap4] = useState(anket.soru8cevap4);
  const [soru8cevap5, setSoru8cevap5] = useState(anket.soru8cevap5);

  const [soru9cevap1, setSoru9cevap1] = useState(anket.soru9cevap1);
  const [soru9cevap2, setSoru9cevap2] = useState(anket.soru9cevap2);
  const [soru9cevap3, setSoru9cevap3] = useState(anket.soru9cevap3);
  const [soru9cevap4, setSoru9cevap4] = useState(anket.soru9cevap4);
  const [soru9cevap5, setSoru9cevap5] = useState(anket.soru9cevap5);

  const [soru10cevap1, setSoru10cevap1] = useState(anket.soru10cevap1);
  const [soru10cevap2, setSoru10cevap2] = useState(anket.soru10cevap2);
  const [soru10cevap3, setSoru10cevap3] = useState(anket.soru10cevap3);
  const [soru10cevap4, setSoru10cevap4] = useState(anket.soru10cevap4);
  const [soru10cevap5, setSoru10cevap5] = useState(anket.soru10cevap5);

  const [soru11cevap1, setSoru11cevap1] = useState(anket.soru11cevap1);
  const [soru11cevap2, setSoru11cevap2] = useState(anket.soru11cevap2);
  const [soru11cevap3, setSoru11cevap3] = useState(anket.soru11cevap3);
  const [soru11cevap4, setSoru11cevap4] = useState(anket.soru11cevap4);
  const [soru11cevap5, setSoru11cevap5] = useState(anket.soru11cevap5);

  const [soru12cevap1, setSoru12cevap1] = useState(anket.soru12cevap1);
  const [soru12cevap2, setSoru12cevap2] = useState(anket.soru12cevap2);
  const [soru12cevap3, setSoru12cevap3] = useState(anket.soru12cevap3);
  const [soru12cevap4, setSoru12cevap4] = useState(anket.soru12cevap4);
  const [soru12cevap5, setSoru12cevap5] = useState(anket.soru12cevap5);

  const [soru13cevap1, setSoru13cevap1] = useState(anket.soru13cevap1);
  const [soru13cevap2, setSoru13cevap2] = useState(anket.soru13cevap2);
  const [soru13cevap3, setSoru13cevap3] = useState(anket.soru13cevap3);
  const [soru13cevap4, setSoru13cevap4] = useState(anket.soru13cevap4);
  const [soru13cevap5, setSoru13cevap5] = useState(anket.soru13cevap4);

  const [soru14cevap1, setSoru14cevap1] = useState(anket.soru14cevap1);
  const [soru14cevap2, setSoru14cevap2] = useState(anket.soru14cevap2);
  const [soru14cevap3, setSoru14cevap3] = useState(anket.soru14cevap3);
  const [soru14cevap4, setSoru14cevap4] = useState(anket.soru14cevap4);
  const [soru14cevap5, setSoru14cevap5] = useState(anket.soru14cevap5);

  const [soru15cevap1, setSoru15cevap1] = useState(anket.soru15cevap1);
  const [soru15cevap2, setSoru15cevap2] = useState(anket.soru15cevap2);
  const [soru15cevap3, setSoru15cevap3] = useState(anket.soru15cevap3);
  const [soru15cevap4, setSoru15cevap4] = useState(anket.soru15cevap4);
  const [soru15cevap5, setSoru15cevap5] = useState(anket.soru15cevap5);

  const [soru16cevap1, setSoru16cevap1] = useState(anket.soru16cevap1);
  const [soru16cevap2, setSoru16cevap2] = useState(anket.soru16cevap2);
  const [soru16cevap3, setSoru16cevap3] = useState(anket.soru16cevap3);
  const [soru16cevap4, setSoru16cevap4] = useState(anket.soru16cevap4);
  const [soru16cevap5, setSoru16cevap5] = useState(anket.soru16cevap5);

  const [soru17cevap1, setSoru17cevap1] = useState(anket.soru17cevap1);
  const [soru17cevap2, setSoru17cevap2] = useState(anket.soru17cevap2);
  const [soru17cevap3, setSoru17cevap3] = useState(anket.soru17cevap3);
  const [soru17cevap4, setSoru17cevap4] = useState(anket.soru17cevap4);
  const [soru17cevap5, setSoru17cevap5] = useState(anket.soru17cevap5);

  const [soru18cevap1, setSoru18cevap1] = useState(anket.soru18cevap1);
  const [soru18cevap2, setSoru18cevap2] = useState(anket.soru18cevap2);
  const [soru18cevap3, setSoru18cevap3] = useState(anket.soru18cevap3);
  const [soru18cevap4, setSoru18cevap4] = useState(anket.soru18cevap4);
  const [soru18cevap5, setSoru18cevap5] = useState(anket.soru18cevap5);

  const [soru19cevap1, setSoru19cevap1] = useState(anket.soru19cevap1);
  const [soru19cevap2, setSoru19cevap2] = useState(anket.soru19cevap2);
  const [soru19cevap3, setSoru19cevap3] = useState(anket.soru19cevap3);
  const [soru19cevap4, setSoru19cevap4] = useState(anket.soru19cevap4);
  const [soru19cevap5, setSoru19cevap5] = useState(anket.soru19cevap5);

  const [soru20cevap1, setSoru20cevap1] = useState(anket.soru20cevap1);
  const [soru20cevap2, setSoru20cevap2] = useState(anket.soru20cevap2);
  const [soru20cevap3, setSoru20cevap3] = useState(anket.soru20cevap3);
  const [soru20cevap4, setSoru20cevap4] = useState(anket.soru20cevap4);
  const [soru20cevap5, setSoru20cevap5] = useState(anket.soru20cevap5);

  let navigate = useNavigate();

  let anketGel = async () => {
    let response = await fetch(`http://127.0.0.1:8000/api/anket/${param.id}/`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    if (response.status === 200) {
      let data = await response.json();
      setAnket(data);
      setLoading(false);
      console.log(data);
    }
  };
  console.log(soru2);
  let anketDuzenle = async () => {
    let response = await fetch(
      `http://127.0.0.1:8000/api/anket/${param.id}/duzenle/`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          soru1cevap1: soru1cevap1,
          soru1cevap2: soru1cevap2,
          soru1cevap3: soru1cevap3,
          soru1cevap4: soru1cevap4,
          soru1cevap5: soru1cevap5,

          soru2cevap1: soru2cevap1,
          soru2cevap2: soru2cevap2,
          soru2cevap3: soru2cevap3,
          soru2cevap4: soru2cevap4,
          soru2cevap5: soru2cevap5,

          soru3cevap1: soru3cevap1,
          soru3cevap2: soru3cevap2,
          soru3cevap3: soru3cevap3,
          soru3cevap4: soru3cevap4,
          soru3cevap5: soru3cevap5,

          soru4cevap1: soru4cevap1,
          soru4cevap2: soru4cevap2,
          soru4cevap3: soru4cevap3,
          soru4cevap4: soru4cevap4,
          soru4cevap5: soru4cevap5,

          soru5cevap1: soru5cevap1,
          soru5cevap2: soru5cevap2,
          soru5cevap3: soru5cevap3,
          soru5cevap4: soru5cevap4,
          soru5cevap5: soru5cevap5,

          soru6cevap1: soru6cevap1,
          soru6cevap2: soru6cevap2,
          soru6cevap3: soru6cevap3,
          soru6cevap4: soru6cevap4,
          soru6cevap5: soru6cevap5,

          soru7cevap1: soru7cevap1,
          soru7cevap2: soru7cevap2,
          soru7cevap3: soru7cevap3,
          soru7cevap4: soru7cevap4,
          soru7cevap5: soru7cevap5,

          soru8cevap1: soru8cevap1,
          soru8cevap2: soru8cevap2,
          soru8cevap3: soru8cevap3,
          soru8cevap4: soru8cevap4,
          soru8cevap5: soru8cevap5,

          soru9cevap1: soru9cevap1,
          soru9cevap2: soru9cevap2,
          soru9cevap3: soru9cevap3,
          soru9cevap4: soru9cevap4,
          soru9cevap5: soru9cevap5,

          soru10cevap1: soru10cevap1,
          soru10cevap2: soru10cevap2,
          soru10cevap3: soru10cevap3,
          soru10cevap4: soru10cevap4,
          soru10cevap5: soru10cevap5,

          soru11cevap1: soru11cevap1,
          soru11cevap2: soru11cevap2,
          soru11cevap3: soru11cevap3,
          soru11cevap4: soru11cevap4,
          soru11cevap5: soru11cevap5,

          soru12cevap1: soru12cevap1,
          soru12cevap2: soru12cevap2,
          soru12cevap3: soru12cevap3,
          soru12cevap4: soru12cevap4,
          soru12cevap5: soru12cevap5,

          soru13cevap1: soru13cevap1,
          soru13cevap2: soru13cevap2,
          soru13cevap3: soru13cevap3,
          soru13cevap4: soru13cevap4,
          soru13cevap5: soru13cevap5,

          soru14cevap1: soru14cevap1,
          soru14cevap2: soru14cevap2,
          soru14cevap3: soru14cevap3,
          soru14cevap4: soru14cevap4,
          soru14cevap5: soru14cevap5,

          soru15cevap1: soru15cevap1,
          soru15cevap2: soru15cevap2,
          soru15cevap3: soru15cevap3,
          soru15cevap4: soru15cevap4,
          soru15cevap5: soru15cevap5,

          soru16cevap1: soru16cevap1,
          soru16cevap2: soru16cevap2,
          soru16cevap3: soru16cevap3,
          soru16cevap4: soru16cevap4,
          soru16cevap5: soru16cevap5,

          soru17cevap1: soru17cevap1,
          soru17cevap2: soru17cevap2,
          soru17cevap3: soru17cevap3,
          soru17cevap4: soru17cevap4,
          soru17cevap5: soru17cevap5,

          soru18cevap1: soru18cevap1,
          soru18cevap2: soru18cevap2,
          soru18cevap3: soru18cevap3,
          soru18cevap4: soru18cevap4,
          soru18cevap5: soru18cevap5,

          soru19cevap1: soru19cevap1,
          soru19cevap2: soru19cevap2,
          soru19cevap3: soru19cevap3,
          soru19cevap4: soru19cevap4,
          soru19cevap5: soru19cevap5,

          soru20cevap1: soru20cevap1,
          soru20cevap2: soru20cevap2,
          soru20cevap3: soru20cevap3,
          soru20cevap4: soru20cevap4,
          soru20cevap5: soru20cevap5,
        }),
      }
    );
    if (response.status === 200) {
      navigate("/anketler/");
    }
  };

  useEffect(() => {
    anketGel();
  }, []);

  return (
    <div>
      <h4 className="text-center pt-4">Anketi Düzenle</h4>
      <div>
        {anket.soru1 ? (
          <div className="bg-light border col-8 offset-2 mt-5 p-3">
            <h5>{anket.soru1}</h5>
            <input
              type="text"
              defaultValue={anket.soru1cevap1}
              className="form-control mt-4"
              onChange={(e) => {
                setSoru1cevap1(e.target.value);
              }}
            />
            <input
              type="text"
              defaultValue={anket.soru1cevap2}
              className="form-control mt-4"
              onChange={(e) => {
                setSoru1cevap2(e.target.value);
              }}
            />
            {anket.soru1cevap3 ? (
              <input
                type="text"
                defaultValue={anket.soru1cevap3}
                className="form-control mt-4"
                onChange={(e) => {
                  setSoru1cevap3(e.target.value);
                }}
              />
            ) : null}
            {anket.soru1cevap4 ? (
              <input
                type="text"
                defaultValue={anket.soru1cevap4}
                className="form-control mt-4"
                onChange={(e) => {
                  setSoru1cevap4(e.target.value);
                }}
              />
            ) : null}
            {anket.soru1cevap5 ? (
              <input
                type="text"
                defaultValue={anket.soru1cevap5}
                className="form-control mt-4"
                onChange={(e) => {
                  setSoru1cevap5(e.target.value);
                }}
              />
            ) : null}
          </div>
        ) : null}
        {anket.soru2 ? (
          <div className="bg-light border col-8 offset-2 mt-5 p-3">
            <h5>{anket.soru2}</h5>
            <input
              type="text"
              defaultValue={anket.soru2cevap1}
              className="form-control mt-4"
              onChange={(e) => {
                setSoru2cevap1(e.target.value);
              }}
            />
            <input
              type="text"
              defaultValue={anket.soru2cevap2}
              className="form-control mt-4"
              onChange={(e) => {
                setSoru2cevap2(e.target.value);
              }}
            />
            {anket.soru2cevap3 ? (
              <input
                type="text"
                defaultValue={anket.soru2cevap3}
                className="form-control mt-4"
                onChange={(e) => {
                  setSoru2cevap3(e.target.value);
                }}
              />
            ) : null}
            {anket.soru2cevap4 ? (
              <input
                type="text"
                defaultValue={anket.soru2cevap4}
                className="form-control mt-4"
                onChange={(e) => {
                  setSoru2cevap4(e.target.value);
                }}
              />
            ) : null}
            {anket.soru1cevap5 ? (
              <input
                type="text"
                defaultValue={anket.soru2cevap5}
                className="form-control mt-4"
                onChange={(e) => {
                  setSoru2cevap5(e.target.value);
                }}
              />
            ) : null}
          </div>
        ) : null}
        {anket.soru3 ? (
          <div className="bg-light border col-8 offset-2 mt-5 p-3">
            <h5>{anket.soru3}</h5>
            <input
              type="text"
              defaultValue={anket.soru3cevap1}
              className="form-control mt-4"
              onChange={(e) => {
                setSoru3cevap1(e.target.value);
              }}
            />
            <input
              type="text"
              defaultValue={anket.soru3cevap2}
              className="form-control mt-4"
              onChange={(e) => {
                setSoru3cevap2(e.target.value);
              }}
            />
            {anket.soru3cevap3 ? (
              <input
                type="text"
                defaultValue={anket.soru3cevap3}
                className="form-control mt-4"
                onChange={(e) => {
                  setSoru3cevap3(e.target.value);
                }}
              />
            ) : null}
            {anket.soru3cevap4 ? (
              <input
                type="text"
                defaultValue={anket.soru3cevap4}
                className="form-control mt-4"
                onChange={(e) => {
                  setSoru3cevap4(e.target.value);
                }}
              />
            ) : null}
            {anket.soru3cevap5 ? (
              <input
                type="text"
                defaultValue={anket.soru3cevap5}
                className="form-control mt-4"
                onChange={(e) => {
                  setSoru3cevap5(e.target.value);
                }}
              />
            ) : null}
          </div>
        ) : null}
        {anket.soru4 ? (
          <div className="bg-light border col-8 offset-2 mt-5 p-3">
            <h5>{anket.soru4}</h5>
            <input
              type="text"
              defaultValue={anket.soru4cevap1}
              className="form-control mt-4"
              onChange={(e) => {
                setSoru4cevap1(e.target.value);
              }}
            />
            <input
              type="text"
              defaultValue={anket.soru4cevap2}
              className="form-control mt-4"
              onChange={(e) => {
                setSoru4cevap2(e.target.value);
              }}
            />
            {anket.soru4cevap3 ? (
              <input
                type="text"
                defaultValue={anket.soru4cevap3}
                className="form-control mt-4"
                onChange={(e) => {
                  setSoru4cevap3(e.target.value);
                }}
              />
            ) : null}
            {anket.soru4cevap4 ? (
              <input
                type="text"
                defaultValue={anket.soru4cevap4}
                className="form-control mt-4"
                onChange={(e) => {
                  setSoru4cevap4(e.target.value);
                }}
              />
            ) : null}
            {anket.soru4cevap5 ? (
              <input
                type="text"
                defaultValue={anket.soru4cevap5}
                className="form-control mt-4"
                onChange={(e) => {
                  setSoru4cevap5(e.target.value);
                }}
              />
            ) : null}
          </div>
        ) : null}
        {anket.soru5 ? (
          <div className="bg-light border col-8 offset-2 mt-5 p-3">
            <h5>{anket.soru5}</h5>
            <input
              type="text"
              defaultValue={anket.soru5cevap1}
              className="form-control mt-4"
              onChange={(e) => {
                setSoru5cevap1(e.target.value);
              }}
            />
            <input
              type="text"
              defaultValue={anket.soru5cevap2}
              className="form-control mt-4"
              onChange={(e) => {
                setSoru5cevap2(e.target.value);
              }}
            />
            {anket.soru5cevap3 ? (
              <input
                type="text"
                defaultValue={anket.soru5cevap3}
                className="form-control mt-4"
                onChange={(e) => {
                  setSoru5cevap3(e.target.value);
                }}
              />
            ) : null}
            {anket.soru5cevap4 ? (
              <input
                type="text"
                defaultValue={anket.soru5cevap4}
                className="form-control mt-4"
                onChange={(e) => {
                  setSoru5cevap4(e.target.value);
                }}
              />
            ) : null}
            {anket.soru5cevap5 ? (
              <input
                type="text"
                defaultValue={anket.soru5cevap5}
                className="form-control mt-4"
                onChange={(e) => {
                  setSoru5cevap5(e.target.value);
                }}
              />
            ) : null}
          </div>
        ) : null}
        {anket.soru6 ? (
          <div className="bg-light border col-8 offset-2 mt-5 p-3">
            <h5>{anket.soru6}</h5>
            <input
              type="text"
              defaultValue={anket.soru6cevap1}
              className="form-control mt-4"
              onChange={(e) => {
                setSoru6cevap1(e.target.value);
              }}
            />
            <input
              type="text"
              defaultValue={anket.soru6cevap2}
              className="form-control mt-4"
              onChange={(e) => {
                setSoru6cevap2(e.target.value);
              }}
            />
            {anket.soru6cevap3 ? (
              <input
                type="text"
                defaultValue={anket.soru6cevap3}
                className="form-control mt-4"
                onChange={(e) => {
                  setSoru6cevap3(e.target.value);
                }}
              />
            ) : null}
            {anket.soru6cevap4 ? (
              <input
                type="text"
                defaultValue={anket.soru6cevap4}
                className="form-control mt-4"
                onChange={(e) => {
                  setSoru6cevap4(e.target.value);
                }}
              />
            ) : null}
            {anket.soru1cevap5 ? (
              <input
                type="text"
                defaultValue={anket.soru6cevap5}
                className="form-control mt-4"
                onChange={(e) => {
                  setSoru6cevap5(e.target.value);
                }}
              />
            ) : null}
          </div>
        ) : null}
        {anket.soru7 ? (
          <div className="bg-light border col-8 offset-2 mt-5 p-3">
            <h5>{anket.soru7}</h5>
            <input
              type="text"
              defaultValue={anket.soru7cevap1}
              className="form-control mt-4"
              onChange={(e) => {
                setSoru7cevap1(e.target.value);
              }}
            />
            <input
              type="text"
              defaultValue={anket.soru7cevap2}
              className="form-control mt-4"
              onChange={(e) => {
                setSoru7cevap2(e.target.value);
              }}
            />
            {anket.soru7cevap3 ? (
              <input
                type="text"
                defaultValue={anket.soru7cevap3}
                className="form-control mt-4"
                onChange={(e) => {
                  setSoru7cevap3(e.target.value);
                }}
              />
            ) : null}
            {anket.soru7cevap4 ? (
              <input
                type="text"
                defaultValue={anket.soru7cevap4}
                className="form-control mt-4"
                onChange={(e) => {
                  setSoru7cevap4(e.target.value);
                }}
              />
            ) : null}
            {anket.soru7cevap5 ? (
              <input
                type="text"
                defaultValue={anket.soru7cevap5}
                className="form-control mt-4"
                onChange={(e) => {
                  setSoru7cevap5(e.target.value);
                }}
              />
            ) : null}
          </div>
        ) : null}
        {anket.soru8 ? (
          <div className="bg-light border col-8 offset-2 mt-5 p-3">
            <h5>{anket.soru8}</h5>
            <input
              type="text"
              defaultValue={anket.soru8cevap1}
              className="form-control mt-4"
              onChange={(e) => {
                setSoru8cevap1(e.target.value);
              }}
            />
            <input
              type="text"
              defaultValue={anket.soru8cevap2}
              className="form-control mt-4"
              onChange={(e) => {
                setSoru8cevap2(e.target.value);
              }}
            />
            {anket.soru8cevap3 ? (
              <input
                type="text"
                defaultValue={anket.soru8cevap3}
                className="form-control mt-4"
                onChange={(e) => {
                  setSoru8cevap3(e.target.value);
                }}
              />
            ) : null}
            {anket.soru8cevap4 ? (
              <input
                type="text"
                defaultValue={anket.soru8cevap4}
                className="form-control mt-4"
                onChange={(e) => {
                  setSoru8cevap4(e.target.value);
                }}
              />
            ) : null}
            {anket.soru8cevap5 ? (
              <input
                type="text"
                defaultValue={anket.soru8cevap5}
                className="form-control mt-4"
                onChange={(e) => {
                  setSoru8cevap5(e.target.value);
                }}
              />
            ) : null}
          </div>
        ) : null}
        {anket.soru9 ? (
          <div className="bg-light border col-8 offset-2 mt-5 p-3">
            <h5>{anket.soru9}</h5>
            <input
              type="text"
              defaultValue={anket.soru9cevap1}
              className="form-control mt-4"
              onChange={(e) => {
                setSoru9cevap1(e.target.value);
              }}
            />
            <input
              type="text"
              defaultValue={anket.soru9cevap2}
              className="form-control mt-4"
              onChange={(e) => {
                setSoru9cevap2(e.target.value);
              }}
            />
            {anket.soru9cevap3 ? (
              <input
                type="text"
                defaultValue={anket.soru9cevap3}
                className="form-control mt-4"
                onChange={(e) => {
                  setSoru9cevap3(e.target.value);
                }}
              />
            ) : null}
            {anket.soru9cevap4 ? (
              <input
                type="text"
                defaultValue={anket.soru9cevap4}
                className="form-control mt-4"
                onChange={(e) => {
                  setSoru9cevap4(e.target.value);
                }}
              />
            ) : null}
            {anket.soru9cevap5 ? (
              <input
                type="text"
                defaultValue={anket.soru9cevap5}
                className="form-control mt-4"
                onChange={(e) => {
                  setSoru9cevap5(e.target.value);
                }}
              />
            ) : null}
          </div>
        ) : null}
        {anket.soru10 ? (
          <div className="bg-light border col-8 offset-2 mt-5 p-3">
            <h5>{anket.soru10}</h5>
            <input
              type="text"
              defaultValue={anket.soru10cevap1}
              className="form-control mt-4"
              onChange={(e) => {
                setSoru10cevap1(e.target.value);
              }}
            />
            <input
              type="text"
              defaultValue={anket.soru10cevap2}
              className="form-control mt-4"
              onChange={(e) => {
                setSoru10cevap2(e.target.value);
              }}
            />
            {anket.soru10cevap3 ? (
              <input
                type="text"
                defaultValue={anket.soru10cevap3}
                className="form-control mt-4"
                onChange={(e) => {
                  setSoru10cevap3(e.target.value);
                }}
              />
            ) : null}
            {anket.soru10cevap4 ? (
              <input
                type="text"
                defaultValue={anket.soru10cevap4}
                className="form-control mt-4"
                onChange={(e) => {
                  setSoru10cevap4(e.target.value);
                }}
              />
            ) : null}
            {anket.soru10cevap5 ? (
              <input
                type="text"
                defaultValue={anket.soru10cevap5}
                className="form-control mt-4"
                onChange={(e) => {
                  setSoru10cevap5(e.target.value);
                }}
              />
            ) : null}
          </div>
        ) : null}
        {anket.soru11 ? (
          <div className="bg-light border col-8 offset-2 mt-5 p-3">
            <h5>{anket.soru11}</h5>
            <input
              type="text"
              defaultValue={anket.soru11cevap1}
              className="form-control mt-4"
              onChange={(e) => {
                setSoru11cevap1(e.target.value);
              }}
            />
            <input
              type="text"
              defaultValue={anket.soru11cevap2}
              className="form-control mt-4"
              onChange={(e) => {
                setSoru11cevap2(e.target.value);
              }}
            />
            {anket.soru11cevap3 ? (
              <input
                type="text"
                defaultValue={anket.soru11cevap3}
                className="form-control mt-4"
                onChange={(e) => {
                  setSoru11cevap3(e.target.value);
                }}
              />
            ) : null}
            {anket.soru11cevap4 ? (
              <input
                type="text"
                defaultValue={anket.soru11cevap4}
                className="form-control mt-4"
                onChange={(e) => {
                  setSoru11cevap4(e.target.value);
                }}
              />
            ) : null}
            {anket.soru11cevap5 ? (
              <input
                type="text"
                defaultValue={anket.soru11cevap5}
                className="form-control mt-4"
                onChange={(e) => {
                  setSoru11cevap5(e.target.value);
                }}
              />
            ) : null}
            {anket.soru10 ? (
              <div className="bg-light border col-8 offset-2 mt-5 p-3">
                <h5>{anket.soru10}</h5>
                <input
                  type="text"
                  defaultValue={anket.soru10cevap1}
                  className="form-control mt-4"
                  onChange={(e) => {
                    setSoru10cevap1(e.target.value);
                  }}
                />
                <input
                  type="text"
                  defaultValue={anket.soru10cevap2}
                  className="form-control mt-4"
                  onChange={(e) => {
                    setSoru10cevap2(e.target.value);
                  }}
                />
                {anket.soru10cevap3 ? (
                  <input
                    type="text"
                    defaultValue={anket.soru10cevap3}
                    className="form-control mt-4"
                    onChange={(e) => {
                      setSoru10cevap3(e.target.value);
                    }}
                  />
                ) : null}
                {anket.soru10cevap4 ? (
                  <input
                    type="text"
                    defaultValue={anket.soru10cevap4}
                    className="form-control mt-4"
                    onChange={(e) => {
                      setSoru10cevap4(e.target.value);
                    }}
                  />
                ) : null}
                {anket.soru10cevap5 ? (
                  <input
                    type="text"
                    defaultValue={anket.soru10cevap5}
                    className="form-control mt-4"
                    onChange={(e) => {
                      setSoru10cevap5(e.target.value);
                    }}
                  />
                ) : null}
              </div>
            ) : null}
          </div>
        ) : null}
        {anket.soru12 ? (
          <div className="bg-light border col-8 offset-2 mt-5 p-3">
            <h5>{anket.soru12}</h5>
            <input
              type="text"
              defaultValue={anket.soru12cevap1}
              className="form-control mt-4"
              onChange={(e) => {
                setSoru12cevap1(e.target.value);
              }}
            />
            <input
              type="text"
              defaultValue={anket.soru12cevap2}
              className="form-control mt-4"
              onChange={(e) => {
                setSoru12cevap2(e.target.value);
              }}
            />
            {anket.soru12cevap3 ? (
              <input
                type="text"
                defaultValue={anket.soru12cevap3}
                className="form-control mt-4"
                onChange={(e) => {
                  setSoru12cevap3(e.target.value);
                }}
              />
            ) : null}
            {anket.soru12cevap4 ? (
              <input
                type="text"
                defaultValue={anket.soru12cevap4}
                className="form-control mt-4"
                onChange={(e) => {
                  setSoru12cevap4(e.target.value);
                }}
              />
            ) : null}
            {anket.soru12cevap5 ? (
              <input
                type="text"
                defaultValue={anket.soru12cevap5}
                className="form-control mt-4"
                onChange={(e) => {
                  setSoru12cevap5(e.target.value);
                }}
              />
            ) : null}
          </div>
        ) : null}
        {anket.soru13 ? (
          <div className="bg-light border col-8 offset-2 mt-5 p-3">
            <h5>{anket.soru13}</h5>
            <input
              type="text"
              defaultValue={anket.soru13cevap1}
              className="form-control mt-4"
              onChange={(e) => {
                setSoru13cevap1(e.target.value);
              }}
            />
            <input
              type="text"
              defaultValue={anket.soru13cevap2}
              className="form-control mt-4"
              onChange={(e) => {
                setSoru13cevap2(e.target.value);
              }}
            />
            {anket.soru13cevap3 ? (
              <input
                type="text"
                defaultValue={anket.soru13cevap3}
                className="form-control mt-4"
                onChange={(e) => {
                  setSoru13cevap3(e.target.value);
                }}
              />
            ) : null}
            {anket.soru13cevap4 ? (
              <input
                type="text"
                defaultValue={anket.soru13cevap4}
                className="form-control mt-4"
                onChange={(e) => {
                  setSoru13cevap4(e.target.value);
                }}
              />
            ) : null}
            {anket.soru13cevap5 ? (
              <input
                type="text"
                defaultValue={anket.soru13cevap5}
                className="form-control mt-4"
                onChange={(e) => {
                  setSoru13cevap5(e.target.value);
                }}
              />
            ) : null}
          </div>
        ) : null}
        {anket.soru14 ? (
          <div className="bg-light border col-8 offset-2 mt-5 p-3">
            <h5>{anket.soru14}</h5>
            <input
              type="text"
              defaultValue={anket.soru14cevap1}
              className="form-control mt-4"
              onChange={(e) => {
                setSoru14cevap1(e.target.value);
              }}
            />
            <input
              type="text"
              defaultValue={anket.soru14cevap2}
              className="form-control mt-4"
              onChange={(e) => {
                setSoru14cevap2(e.target.value);
              }}
            />
            {anket.soru14cevap3 ? (
              <input
                type="text"
                defaultValue={anket.soru14cevap3}
                className="form-control mt-4"
                onChange={(e) => {
                  setSoru14cevap3(e.target.value);
                }}
              />
            ) : null}
            {anket.soru14cevap4 ? (
              <input
                type="text"
                defaultValue={anket.soru14cevap4}
                className="form-control mt-4"
                onChange={(e) => {
                  setSoru14cevap4(e.target.value);
                }}
              />
            ) : null}
            {anket.soru14cevap5 ? (
              <input
                type="text"
                defaultValue={anket.soru14cevap5}
                className="form-control mt-4"
                onChange={(e) => {
                  setSoru14cevap5(e.target.value);
                }}
              />
            ) : null}
          </div>
        ) : null}
        {anket.soru15 ? (
          <div className="bg-light border col-8 offset-2 mt-5 p-3">
            <h5>{anket.soru15}</h5>
            <input
              type="text"
              defaultValue={anket.soru15cevap1}
              className="form-control mt-4"
              onChange={(e) => {
                setSoru15cevap1(e.target.value);
              }}
            />
            <input
              type="text"
              defaultValue={anket.soru15cevap2}
              className="form-control mt-4"
              onChange={(e) => {
                setSoru15cevap2(e.target.value);
              }}
            />
            {anket.soru15cevap3 ? (
              <input
                type="text"
                defaultValue={anket.soru15cevap3}
                className="form-control mt-4"
                onChange={(e) => {
                  setSoru15cevap3(e.target.value);
                }}
              />
            ) : null}
            {anket.soru15cevap4 ? (
              <input
                type="text"
                defaultValue={anket.soru15cevap4}
                className="form-control mt-4"
                onChange={(e) => {
                  setSoru15cevap4(e.target.value);
                }}
              />
            ) : null}
            {anket.soru15cevap5 ? (
              <input
                type="text"
                defaultValue={anket.soru15cevap5}
                className="form-control mt-4"
                onChange={(e) => {
                  setSoru15cevap5(e.target.value);
                }}
              />
            ) : null}
          </div>
        ) : null}
        {anket.soru16 ? (
          <div className="bg-light border col-8 offset-2 mt-5 p-3">
            <h5>{anket.soru16}</h5>
            <input
              type="text"
              defaultValue={anket.soru16cevap1}
              className="form-control mt-4"
              onChange={(e) => {
                setSoru16cevap1(e.target.value);
              }}
            />
            <input
              type="text"
              defaultValue={anket.soru16cevap2}
              className="form-control mt-4"
              onChange={(e) => {
                setSoru16cevap2(e.target.value);
              }}
            />
            {anket.soru16cevap3 ? (
              <input
                type="text"
                defaultValue={anket.soru16cevap3}
                className="form-control mt-4"
                onChange={(e) => {
                  setSoru16cevap3(e.target.value);
                }}
              />
            ) : null}
            {anket.soru16cevap4 ? (
              <input
                type="text"
                defaultValue={anket.soru16cevap4}
                className="form-control mt-4"
                onChange={(e) => {
                  setSoru16cevap4(e.target.value);
                }}
              />
            ) : null}
            {anket.soru16cevap5 ? (
              <input
                type="text"
                defaultValue={anket.soru16cevap5}
                className="form-control mt-4"
                onChange={(e) => {
                  setSoru16cevap5(e.target.value);
                }}
              />
            ) : null}
          </div>
        ) : null}
        {anket.soru17 ? (
          <div className="bg-light border col-8 offset-2 mt-5 p-3">
            <h5>{anket.soru17}</h5>
            <input
              type="text"
              defaultValue={anket.soru17cevap1}
              className="form-control mt-4"
              onChange={(e) => {
                setSoru17cevap1(e.target.value);
              }}
            />
            <input
              type="text"
              defaultValue={anket.soru17cevap2}
              className="form-control mt-4"
              onChange={(e) => {
                setSoru17cevap2(e.target.value);
              }}
            />
            {anket.soru17cevap3 ? (
              <input
                type="text"
                defaultValue={anket.soru17cevap3}
                className="form-control mt-4"
                onChange={(e) => {
                  setSoru17cevap3(e.target.value);
                }}
              />
            ) : null}
            {anket.soru17cevap4 ? (
              <input
                type="text"
                defaultValue={anket.soru17cevap4}
                className="form-control mt-4"
                onChange={(e) => {
                  setSoru17cevap4(e.target.value);
                }}
              />
            ) : null}
            {anket.soru17cevap5 ? (
              <input
                type="text"
                defaultValue={anket.soru17cevap5}
                className="form-control mt-4"
                onChange={(e) => {
                  setSoru17cevap5(e.target.value);
                }}
              />
            ) : null}
          </div>
        ) : null}
        {anket.soru18 ? (
          <div className="bg-light border col-8 offset-2 mt-5 p-3">
            <h5>{anket.soru18}</h5>
            <input
              type="text"
              defaultValue={anket.soru18cevap1}
              className="form-control mt-4"
              onChange={(e) => {
                setSoru18cevap1(e.target.value);
              }}
            />
            <input
              type="text"
              defaultValue={anket.soru18cevap2}
              className="form-control mt-4"
              onChange={(e) => {
                setSoru18cevap2(e.target.value);
              }}
            />
            {anket.soru18cevap3 ? (
              <input
                type="text"
                defaultValue={anket.soru18cevap3}
                className="form-control mt-4"
                onChange={(e) => {
                  setSoru18cevap3(e.target.value);
                }}
              />
            ) : null}
            {anket.soru18cevap4 ? (
              <input
                type="text"
                defaultValue={anket.soru18cevap4}
                className="form-control mt-4"
                onChange={(e) => {
                  setSoru18cevap4(e.target.value);
                }}
              />
            ) : null}
            {anket.soru18cevap5 ? (
              <input
                type="text"
                defaultValue={anket.soru18cevap5}
                className="form-control mt-4"
                onChange={(e) => {
                  setSoru18cevap5(e.target.value);
                }}
              />
            ) : null}
          </div>
        ) : null}
        {anket.soru19 ? (
          <div className="bg-light border col-8 offset-2 mt-5 p-3">
            <h5>{anket.soru19}</h5>
            <input
              type="text"
              defaultValue={anket.soru19cevap1}
              className="form-control mt-4"
              onChange={(e) => {
                setSoru19cevap1(e.target.value);
              }}
            />
            <input
              type="text"
              defaultValue={anket.soru19cevap2}
              className="form-control mt-4"
              onChange={(e) => {
                setSoru19cevap2(e.target.value);
              }}
            />
            {anket.soru19cevap3 ? (
              <input
                type="text"
                defaultValue={anket.soru19cevap3}
                className="form-control mt-4"
                onChange={(e) => {
                  setSoru19cevap3(e.target.value);
                }}
              />
            ) : null}
            {anket.soru19cevap4 ? (
              <input
                type="text"
                defaultValue={anket.soru19cevap4}
                className="form-control mt-4"
                onChange={(e) => {
                  setSoru19cevap4(e.target.value);
                }}
              />
            ) : null}
            {anket.soru19cevap5 ? (
              <input
                type="text"
                defaultValue={anket.soru19cevap5}
                className="form-control mt-4"
                onChange={(e) => {
                  setSoru19cevap5(e.target.value);
                }}
              />
            ) : null}
          </div>
        ) : null}
        {anket.soru20 ? (
          <div className="bg-light border col-8 offset-2 mt-5 p-3">
            <h5>{anket.soru20}</h5>
            <input
              type="text"
              defaultValue={anket.soru20cevap1}
              className="form-control mt-4"
              onChange={(e) => {
                setSoru20cevap1(e.target.value);
              }}
            />
            <input
              type="text"
              defaultValue={anket.soru20cevap2}
              className="form-control mt-4"
              onChange={(e) => {
                setSoru20cevap2(e.target.value);
              }}
            />
            {anket.soru20cevap3 ? (
              <input
                type="text"
                defaultValue={anket.soru20cevap3}
                className="form-control mt-4"
                onChange={(e) => {
                  setSoru20cevap3(e.target.value);
                }}
              />
            ) : null}
            {anket.soru20cevap4 ? (
              <input
                type="text"
                defaultValue={anket.soru20cevap4}
                className="form-control mt-4"
                onChange={(e) => {
                  setSoru20cevap4(e.target.value);
                }}
              />
            ) : null}
            {anket.soru20cevap5 ? (
              <input
                type="text"
                defaultValue={anket.soru20cevap5}
                className="form-control mt-4"
                onChange={(e) => {
                  setSoru20cevap5(e.target.value);
                }}
              />
            ) : null}
          </div>
        ) : null}
      </div>
      <button
        onClick={anketDuzenle}
        className="btn btn-outline-danger mt-5 mb-3 center"
      >
        Düzenle
      </button>
    </div>
  );
};

export default AnketDuzenle;
