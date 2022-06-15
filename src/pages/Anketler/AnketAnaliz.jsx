import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  AiOutlineDoubleRight,
  AiOutlineDoubleLeft,
} from "../../../node_modules/react-icons/ai/index.esm";
const AnketAnaliz = () => {
  let param = useParams();
  const [anket, setAnket] = useState([]);
  const [anketCevap, setAnketCevap] = useState([]);
  const [anketCevapSayisi, setAnketCevapSayisi] = useState();
  const [loading, setLoading] = useState(true);
  const [loading1, setLoading1] = useState(true);
  const [pageCount, setPageCount] = useState(1);
  let anketcevaplari = async () => {
    let response = await fetch(
      `http://127.0.0.1:8000/api/anket/${param.id}/analiz/?page=${pageCount}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );
    if (response.status === 200) {
      let data = await response.json();
      setAnketCevap(data);
      setLoading(false);
    }
  };
  let anketcevapsayisi = async () => {
    let response = await fetch(
      `http://127.0.0.1:8000/api/anket/${param.id}/cevap-sayisi/`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );
    if (response.status === 200) {
      let data = await response.json();
      setAnketCevapSayisi(data);
    }
  };
  let anketgel = async () => {
    let response = await fetch(`http://127.0.0.1:8000/api/anket/${param.id}/`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    if (response.status === 200) {
      let data = await response.json();
      setAnket(data);
      setLoading1(false);
    }
  };
  useEffect(() => {
    anketcevaplari();
    anketcevapsayisi();
    anketgel();
  }, [pageCount]);
  console.log(anketCevap[0]);
  if (loading == false && loading1 == false) {
    return (
      <div>
        <ul className="list-unstyled d-flex justify-content-evenly pt-5">
          <li>
            {pageCount <= 1 ? (
              <AiOutlineDoubleLeft
                size="30"
                className="offset-2"
                color="gray"
                disabled
              />
            ) : (
              <AiOutlineDoubleLeft
                size="30"
                className="offset-2"
                color="black"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setPageCount(pageCount - 1);
                }}
              />
            )}
          </li>
          <li>
            {pageCount} / {anketCevapSayisi}
          </li>
          <li>
            {pageCount >= anketCevapSayisi ? (
              <AiOutlineDoubleRight
                size="30"
                className="offset-10"
                color="gray"
                disabled
              />
            ) : (
              <AiOutlineDoubleRight
                size="30"
                className="offset-10"
                color="black"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setPageCount(pageCount + 1);
                }}
              />
            )}
          </li>
        </ul>
        <h4 className="text-center pt-3">
          {anketCevap[0].cevaplayan_username}
        </h4>
        <hr />
        <h4 className="text-center">{anket.baslik}</h4>
        <h4 className="text-center pt-3">{anket.aciklama}</h4>
        <div className="col-10 offset-1 border bg-light p-3">
          {anket.soru1 ? (
            <>
              <h5 className="ms-4">{anket.soru1}</h5>
              {anketCevap[0].soru1cevap1 ? (
                <>
                  {anketCevap[0].soru1cevap1 == 1 ? (
                    <>
                      <input type="radio" name="1" checked />
                      <input type="radio" name="1" disabled />
                      <input type="radio" name="1" disabled />
                      <input type="radio" name="1" disabled />
                      <input type="radio" name="1" disabled />
                    </>
                  ) : anketCevap[0].soru1cevap1 == 2 ? (
                    <>
                      <div>
                        <input
                          type="radio"
                          name="1"
                          className="me-2"
                          disabled
                        />
                        {anket.soru1cevap1}
                      </div>
                      <div>
                        <input type="radio" name="1" className="me-2" checked />
                        {anket.soru1cevap2}
                      </div>
                      {anket.soru1cevap3 ? (
                        <div>
                          <input
                            type="radio"
                            name="1"
                            className="me-2"
                            disabled
                          />
                          {anket.soru1cevap3}
                        </div>
                      ) : null}

                      {anket.soru1cevap4 ? (
                        <div>
                          <input
                            type="radio"
                            name="1"
                            className="me-2"
                            disabled
                          />
                          {anket.soru1cevap4}
                        </div>
                      ) : null}
                      {anket.soru1cevap5 ? (
                        <div>
                          <input type="radio" name="1" disabled />
                          {anket.soru1cevap5}
                        </div>
                      ) : null}
                    </>
                  ) : anketCevap[0].soru1cevap1 == 3 ? (
                    <>
                      <input type="radio" name="1" disabled />
                      <input type="radio" name="1" disabled />
                      <input type="radio" name="1" disabled />
                      <input type="radio" name="1" checked />
                      <input type="radio" name="1" disabled />
                    </>
                  ) : anketCevap[0].soru1cevap1 == 4 ? (
                    <>
                      <input type="radio" name="1" disabled />

                      <input type="radio" name="1" disabled />
                      <input type="radio" name="1" disabled />
                      <input type="radio" name="1" checked />
                      <input type="radio" name="1" disabled />
                    </>
                  ) : anketCevap[0].soru1cevap1 == 5 ? (
                    <>
                      <input type="radio" name="1" disabled />

                      <input type="radio" name="1" disabled />
                      <input type="radio" name="1" disabled />
                      <input type="radio" name="1" disabled />
                      <input type="radio" name="1" checked />
                    </>
                  ) : null}
                </>
              ) : null}
            </>
          ) : null}
        </div>
      </div>
    );
  } else {
    return (
      <>
        <p>Yükleniyor</p>
      </>
    );
  }
};

export default AnketAnaliz;
