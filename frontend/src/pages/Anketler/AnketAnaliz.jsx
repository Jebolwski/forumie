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
      console.log(data);
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
        {anket.soru1 ? (
          <div className="col-10 offset-1 border bg-light p-3 mt-4">
            <>
              <h5 className="ms-4">{anket.soru1}</h5>
              {anketCevap[0].soru1cevap1 ? (
                <>
                  {anketCevap[0].soru1cevap1 == 1 ? (
                    <>
                      <div>
                        <input type="radio" className="me-2" checked />
                        {anket.soru1cevap1}
                      </div>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru1cevap2}
                      </div>
                      {anket.soru1cevap3 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru1cevap3}
                        </div>
                      ) : null}

                      {anket.soru1cevap4 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru1cevap4}
                        </div>
                      ) : null}
                      {anket.soru1cevap5 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru1cevap5}
                        </div>
                      ) : null}
                    </>
                  ) : anketCevap[0].soru1cevap1 == 2 ? (
                    <>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru1cevap1}
                      </div>
                      <div>
                        <input type="radio" className="me-2" checked />
                        {anket.soru1cevap2}
                      </div>
                      {anket.soru1cevap3 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru1cevap3}
                        </div>
                      ) : null}
                      {anket.soru1cevap4 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru1cevap4}
                        </div>
                      ) : null}
                      {anket.soru1cevap5 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru1cevap5}
                        </div>
                      ) : null}
                    </>
                  ) : anketCevap[0].soru1cevap1 == 3 ? (
                    <>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru1cevap1}
                      </div>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru1cevap2}
                      </div>
                      {anket.soru1cevap3 ? (
                        <div>
                          <input type="radio" className="me-2" checked />
                          {anket.soru1cevap3}
                        </div>
                      ) : null}
                      {anket.soru1cevap4 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru1cevap4}
                        </div>
                      ) : null}
                      {anket.soru1cevap5 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru1cevap5}
                        </div>
                      ) : null}
                    </>
                  ) : anketCevap[0].soru1cevap1 == 4 ? (
                    <>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru1cevap1}
                      </div>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru1cevap2}
                      </div>
                      {anket.soru1cevap3 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru1cevap3}
                        </div>
                      ) : null}
                      {anket.soru1cevap4 ? (
                        <div>
                          <input type="radio" className="me-2" checked />
                          {anket.soru1cevap4}
                        </div>
                      ) : null}
                      {anket.soru1cevap5 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru1cevap5}
                        </div>
                      ) : null}
                    </>
                  ) : anketCevap[0].soru1cevap1 == 5 ? (
                    <>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru1cevap1}
                      </div>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru1cevap2}
                      </div>
                      {anket.soru1cevap3 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru1cevap3}
                        </div>
                      ) : null}
                      {anket.soru1cevap4 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru1cevap4}
                        </div>
                      ) : null}
                      {anket.soru1cevap5 ? (
                        <div>
                          <input type="radio" className="me-2" checked />
                          {anket.soru1cevap5}
                        </div>
                      ) : null}
                    </>
                  ) : null}
                </>
              ) : null}
            </>
          </div>
        ) : null}
        {anket.soru2 ? (
          <div className="col-10 offset-1 border bg-light p-3 mt-4">
            <>
              <h5 className="ms-4">{anket.soru2}</h5>
              {anketCevap[0].soru2cevap1 ? (
                <>
                  {anketCevap[0].soru2cevap1 == 1 ? (
                    <>
                      <div>
                        <input type="radio" className="me-2" checked />
                        {anket.soru2cevap1}
                      </div>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru2cevap2}
                      </div>
                      {anket.soru2cevap3 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru2cevap3}
                        </div>
                      ) : null}

                      {anket.soru2cevap4 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru2cevap4}
                        </div>
                      ) : null}
                      {anket.soru2cevap5 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru2cevap5}
                        </div>
                      ) : null}
                    </>
                  ) : anketCevap[0].soru2cevap1 == 2 ? (
                    <>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru2cevap1}
                      </div>
                      <div>
                        <input type="radio" className="me-2" checked />
                        {anket.soru2cevap2}
                      </div>
                      {anket.soru2cevap3 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru2cevap3}
                        </div>
                      ) : null}
                      {anket.soru2cevap4 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru2cevap4}
                        </div>
                      ) : null}
                      {anket.soru2cevap5 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru2cevap5}
                        </div>
                      ) : null}
                    </>
                  ) : anketCevap[0].soru2cevap1 == 3 ? (
                    <>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru2cevap1}
                      </div>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru2cevap2}
                      </div>
                      {anket.soru2cevap3 ? (
                        <div>
                          <input type="radio" className="me-2" checked />
                          {anket.soru2cevap3}
                        </div>
                      ) : null}
                      {anket.soru2cevap4 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru2cevap4}
                        </div>
                      ) : null}
                      {anket.soru2cevap5 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru2cevap5}
                        </div>
                      ) : null}
                    </>
                  ) : anketCevap[0].soru2cevap1 == 4 ? (
                    <>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru2cevap1}
                      </div>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru2cevap2}
                      </div>
                      {anket.soru2cevap3 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru2cevap3}
                        </div>
                      ) : null}
                      {anket.soru2cevap4 ? (
                        <div>
                          <input type="radio" className="me-2" checked />
                          {anket.soru2cevap4}
                        </div>
                      ) : null}
                      {anket.soru2cevap5 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru2cevap5}
                        </div>
                      ) : null}
                    </>
                  ) : anketCevap[0].soru2cevap1 == 5 ? (
                    <>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru2cevap1}
                      </div>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru2cevap2}
                      </div>
                      {anket.soru2cevap3 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru2cevap3}
                        </div>
                      ) : null}
                      {anket.soru2cevap4 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru2cevap4}
                        </div>
                      ) : null}
                      {anket.soru2cevap5 ? (
                        <div>
                          <input type="radio" className="me-2" checked />
                          {anket.soru2cevap5}
                        </div>
                      ) : null}
                    </>
                  ) : null}
                </>
              ) : null}
            </>
          </div>
        ) : null}
        {anket.soru3 ? (
          <div className="col-10 offset-1 border bg-light p-3 mt-4">
            <>
              <h5 className="ms-4">{anket.soru3}</h5>
              {anketCevap[0].soru3cevap1 ? (
                <>
                  {anketCevap[0].soru3cevap1 == 1 ? (
                    <>
                      <div>
                        <input type="radio" className="me-2" checked />
                        {anket.soru3cevap1}
                      </div>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru3cevap2}
                      </div>
                      {anket.soru3cevap3 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru3cevap3}
                        </div>
                      ) : null}

                      {anket.soru3cevap4 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru3cevap4}
                        </div>
                      ) : null}
                      {anket.soru3cevap5 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru3cevap5}
                        </div>
                      ) : null}
                    </>
                  ) : anketCevap[0].soru3cevap1 == 2 ? (
                    <>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru3cevap1}
                      </div>
                      <div>
                        <input type="radio" className="me-2" checked />
                        {anket.soru3cevap2}
                      </div>
                      {anket.soru3cevap3 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru3cevap3}
                        </div>
                      ) : null}
                      {anket.soru3cevap4 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru3cevap4}
                        </div>
                      ) : null}
                      {anket.soru3cevap5 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru3cevap5}
                        </div>
                      ) : null}
                    </>
                  ) : anketCevap[0].soru3cevap1 == 3 ? (
                    <>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru3cevap1}
                      </div>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru3cevap2}
                      </div>
                      {anket.soru3cevap3 ? (
                        <div>
                          <input type="radio" className="me-2" checked />
                          {anket.soru3cevap3}
                        </div>
                      ) : null}
                      {anket.soru3cevap4 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru3cevap4}
                        </div>
                      ) : null}
                      {anket.soru3cevap5 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru3cevap5}
                        </div>
                      ) : null}
                    </>
                  ) : anketCevap[0].soru3cevap1 == 4 ? (
                    <>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru3cevap1}
                      </div>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru3cevap2}
                      </div>
                      {anket.soru3cevap3 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru3cevap3}
                        </div>
                      ) : null}
                      {anket.soru3cevap4 ? (
                        <div>
                          <input type="radio" className="me-2" checked />
                          {anket.soru3cevap4}
                        </div>
                      ) : null}
                      {anket.soru3cevap5 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru3cevap5}
                        </div>
                      ) : null}
                    </>
                  ) : anketCevap[0].soru3cevap1 == 5 ? (
                    <>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru3cevap1}
                      </div>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru3cevap2}
                      </div>
                      {anket.soru3cevap3 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru3cevap3}
                        </div>
                      ) : null}
                      {anket.soru3cevap4 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru3cevap4}
                        </div>
                      ) : null}
                      {anket.soru3cevap5 ? (
                        <div>
                          <input type="radio" className="me-2" checked />
                          {anket.soru3cevap5}
                        </div>
                      ) : null}
                    </>
                  ) : null}
                </>
              ) : null}
            </>
          </div>
        ) : null}
        {anket.soru4 ? (
          <div className="col-10 offset-1 border bg-light p-3 mt-4">
            <>
              <h5 className="ms-4">{anket.soru4}</h5>
              {anketCevap[0].soru4cevap1 ? (
                <>
                  {anketCevap[0].soru4cevap1 == 1 ? (
                    <>
                      <div>
                        <input type="radio" className="me-2" checked />
                        {anket.soru4cevap1}
                      </div>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru4cevap2}
                      </div>
                      {anket.soru4cevap3 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru4cevap3}
                        </div>
                      ) : null}

                      {anket.soru4cevap4 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru4cevap4}
                        </div>
                      ) : null}
                      {anket.soru4cevap5 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru4cevap5}
                        </div>
                      ) : null}
                    </>
                  ) : anketCevap[0].soru4cevap1 == 2 ? (
                    <>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru4cevap1}
                      </div>
                      <div>
                        <input type="radio" className="me-2" checked />
                        {anket.soru4cevap2}
                      </div>
                      {anket.soru4cevap3 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru4cevap3}
                        </div>
                      ) : null}
                      {anket.soru4cevap4 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru4cevap4}
                        </div>
                      ) : null}
                      {anket.soru4cevap5 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru4cevap5}
                        </div>
                      ) : null}
                    </>
                  ) : anketCevap[0].soru4cevap1 == 3 ? (
                    <>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru4cevap1}
                      </div>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru4cevap2}
                      </div>
                      {anket.soru4cevap3 ? (
                        <div>
                          <input type="radio" className="me-2" checked />
                          {anket.soru4cevap3}
                        </div>
                      ) : null}
                      {anket.soru4cevap4 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru4cevap4}
                        </div>
                      ) : null}
                      {anket.soru4cevap5 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru4cevap5}
                        </div>
                      ) : null}
                    </>
                  ) : anketCevap[0].soru4cevap1 == 4 ? (
                    <>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru4cevap1}
                      </div>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru4cevap2}
                      </div>
                      {anket.soru4cevap3 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru4cevap3}
                        </div>
                      ) : null}
                      {anket.soru4cevap4 ? (
                        <div>
                          <input type="radio" className="me-2" checked />
                          {anket.soru4cevap4}
                        </div>
                      ) : null}
                      {anket.soru4cevap5 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru4cevap5}
                        </div>
                      ) : null}
                    </>
                  ) : anketCevap[0].soru4cevap1 == 5 ? (
                    <>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru4cevap1}
                      </div>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru4cevap2}
                      </div>
                      {anket.soru4cevap3 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru4cevap3}
                        </div>
                      ) : null}
                      {anket.soru4cevap4 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru4cevap4}
                        </div>
                      ) : null}
                      {anket.soru4cevap5 ? (
                        <div>
                          <input type="radio" className="me-2" checked />
                          {anket.soru4cevap5}
                        </div>
                      ) : null}
                    </>
                  ) : null}
                </>
              ) : null}
            </>
          </div>
        ) : null}
        {anket.soru5 ? (
          <div className="col-10 offset-1 border bg-light p-3 mt-4">
            <>
              <h5 className="ms-4">{anket.soru5}</h5>
              {anketCevap[0].soru5cevap1 ? (
                <>
                  {anketCevap[0].soru5cevap1 == 1 ? (
                    <>
                      <div>
                        <input type="radio" className="me-2" checked />
                        {anket.soru5cevap1}
                      </div>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru5cevap2}
                      </div>
                      {anket.soru5cevap3 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru5cevap3}
                        </div>
                      ) : null}

                      {anket.soru5cevap4 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru5cevap4}
                        </div>
                      ) : null}
                      {anket.soru5cevap5 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru5cevap5}
                        </div>
                      ) : null}
                    </>
                  ) : anketCevap[0].soru5cevap1 == 2 ? (
                    <>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru5cevap1}
                      </div>
                      <div>
                        <input type="radio" className="me-2" checked />
                        {anket.soru5cevap2}
                      </div>
                      {anket.soru5cevap3 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru5cevap3}
                        </div>
                      ) : null}
                      {anket.soru5cevap4 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru5cevap4}
                        </div>
                      ) : null}
                      {anket.soru5cevap5 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru5cevap5}
                        </div>
                      ) : null}
                    </>
                  ) : anketCevap[0].soru5cevap1 == 3 ? (
                    <>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru5cevap1}
                      </div>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru5cevap2}
                      </div>
                      {anket.soru5cevap3 ? (
                        <div>
                          <input type="radio" className="me-2" checked />
                          {anket.soru5cevap3}
                        </div>
                      ) : null}
                      {anket.soru5cevap4 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru5cevap4}
                        </div>
                      ) : null}
                      {anket.soru5cevap5 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru5cevap5}
                        </div>
                      ) : null}
                    </>
                  ) : anketCevap[0].soru5cevap1 == 4 ? (
                    <>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru5cevap1}
                      </div>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru5cevap2}
                      </div>
                      {anket.soru5cevap3 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru5cevap3}
                        </div>
                      ) : null}
                      {anket.soru5cevap4 ? (
                        <div>
                          <input type="radio" className="me-2" checked />
                          {anket.soru5cevap4}
                        </div>
                      ) : null}
                      {anket.soru5cevap5 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru5cevap5}
                        </div>
                      ) : null}
                    </>
                  ) : anketCevap[0].soru5cevap1 == 5 ? (
                    <>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru5cevap1}
                      </div>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru5cevap2}
                      </div>
                      {anket.soru5cevap3 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru5cevap3}
                        </div>
                      ) : null}
                      {anket.soru5cevap4 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru5cevap4}
                        </div>
                      ) : null}
                      {anket.soru5cevap5 ? (
                        <div>
                          <input type="radio" className="me-2" checked />
                          {anket.soru5cevap5}
                        </div>
                      ) : null}
                    </>
                  ) : null}
                </>
              ) : null}
            </>
          </div>
        ) : null}
        {anket.soru6 ? (
          <div className="col-10 offset-1 border bg-light p-3 mt-4">
            <>
              <h5 className="ms-4">{anket.soru6}</h5>
              {anketCevap[0].soru6cevap1 ? (
                <>
                  {anketCevap[0].soru6cevap1 == 1 ? (
                    <>
                      <div>
                        <input type="radio" className="me-2" checked />
                        {anket.soru6cevap1}
                      </div>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru6cevap2}
                      </div>
                      {anket.soru6cevap3 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru6cevap3}
                        </div>
                      ) : null}

                      {anket.soru6cevap4 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru6cevap4}
                        </div>
                      ) : null}
                      {anket.soru6cevap5 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru6cevap5}
                        </div>
                      ) : null}
                    </>
                  ) : anketCevap[0].soru6cevap1 == 2 ? (
                    <>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru6cevap1}
                      </div>
                      <div>
                        <input type="radio" className="me-2" checked />
                        {anket.soru6cevap2}
                      </div>
                      {anket.soru6cevap3 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru6cevap3}
                        </div>
                      ) : null}
                      {anket.soru6cevap4 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru6cevap4}
                        </div>
                      ) : null}
                      {anket.soru6cevap5 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru6cevap5}
                        </div>
                      ) : null}
                    </>
                  ) : anketCevap[0].soru6cevap1 == 3 ? (
                    <>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru6cevap1}
                      </div>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru6cevap2}
                      </div>
                      {anket.soru6cevap3 ? (
                        <div>
                          <input type="radio" className="me-2" checked />
                          {anket.soru6cevap3}
                        </div>
                      ) : null}
                      {anket.soru6cevap4 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru6cevap4}
                        </div>
                      ) : null}
                      {anket.soru6cevap5 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru6cevap5}
                        </div>
                      ) : null}
                    </>
                  ) : anketCevap[0].soru6cevap1 == 4 ? (
                    <>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru6cevap1}
                      </div>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru6cevap2}
                      </div>
                      {anket.soru6cevap3 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru6cevap3}
                        </div>
                      ) : null}
                      {anket.soru6cevap4 ? (
                        <div>
                          <input type="radio" className="me-2" checked />
                          {anket.soru6cevap4}
                        </div>
                      ) : null}
                      {anket.soru6cevap5 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru6cevap5}
                        </div>
                      ) : null}
                    </>
                  ) : anketCevap[0].soru6cevap1 == 5 ? (
                    <>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru6cevap1}
                      </div>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru6cevap2}
                      </div>
                      {anket.soru6cevap3 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru6cevap3}
                        </div>
                      ) : null}
                      {anket.soru6cevap4 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru6cevap4}
                        </div>
                      ) : null}
                      {anket.soru6cevap5 ? (
                        <div>
                          <input type="radio" className="me-2" checked />
                          {anket.soru6cevap5}
                        </div>
                      ) : null}
                    </>
                  ) : null}
                </>
              ) : null}
            </>
          </div>
        ) : null}
        {anket.soru7 ? (
          <div className="col-10 offset-1 border bg-light p-3 mt-4">
            <>
              <h5 className="ms-4">{anket.soru7}</h5>
              {anketCevap[0].soru7cevap1 ? (
                <>
                  {anketCevap[0].soru7cevap1 == 1 ? (
                    <>
                      <div>
                        <input type="radio" className="me-2" checked />
                        {anket.soru7cevap1}
                      </div>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru7cevap2}
                      </div>
                      {anket.soru7cevap3 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru7cevap3}
                        </div>
                      ) : null}

                      {anket.soru7cevap4 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru7cevap4}
                        </div>
                      ) : null}
                      {anket.soru7cevap5 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru7cevap5}
                        </div>
                      ) : null}
                    </>
                  ) : anketCevap[0].soru7cevap1 == 2 ? (
                    <>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru7cevap1}
                      </div>
                      <div>
                        <input type="radio" className="me-2" checked />
                        {anket.soru7cevap2}
                      </div>
                      {anket.soru7cevap3 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru7cevap3}
                        </div>
                      ) : null}
                      {anket.soru7cevap4 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru7cevap4}
                        </div>
                      ) : null}
                      {anket.soru7cevap5 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru7cevap5}
                        </div>
                      ) : null}
                    </>
                  ) : anketCevap[0].soru7cevap1 == 3 ? (
                    <>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru7cevap1}
                      </div>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru7cevap2}
                      </div>
                      {anket.soru7cevap3 ? (
                        <div>
                          <input type="radio" className="me-2" checked />
                          {anket.soru7cevap3}
                        </div>
                      ) : null}
                      {anket.soru7cevap4 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru7cevap4}
                        </div>
                      ) : null}
                      {anket.soru7cevap5 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru7cevap5}
                        </div>
                      ) : null}
                    </>
                  ) : anketCevap[0].soru7cevap1 == 4 ? (
                    <>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru7cevap1}
                      </div>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru7cevap2}
                      </div>
                      {anket.soru7cevap3 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru7cevap3}
                        </div>
                      ) : null}
                      {anket.soru7cevap4 ? (
                        <div>
                          <input type="radio" className="me-2" checked />
                          {anket.soru7cevap4}
                        </div>
                      ) : null}
                      {anket.soru7cevap5 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru7cevap5}
                        </div>
                      ) : null}
                    </>
                  ) : anketCevap[0].soru7cevap1 == 5 ? (
                    <>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru7cevap1}
                      </div>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru7cevap2}
                      </div>
                      {anket.soru7cevap3 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru7cevap3}
                        </div>
                      ) : null}
                      {anket.soru7cevap4 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru7cevap4}
                        </div>
                      ) : null}
                      {anket.soru7cevap5 ? (
                        <div>
                          <input type="radio" className="me-2" checked />
                          {anket.soru7cevap5}
                        </div>
                      ) : null}
                    </>
                  ) : null}
                </>
              ) : null}
            </>
          </div>
        ) : null}
        {anket.soru8 ? (
          <div className="col-10 offset-1 border bg-light p-3 mt-4">
            <>
              <h5 className="ms-4">{anket.soru8}</h5>
              {anketCevap[0].soru8cevap1 ? (
                <>
                  {anketCevap[0].soru8cevap1 == 1 ? (
                    <>
                      <div>
                        <input type="radio" className="me-2" checked />
                        {anket.soru8cevap1}
                      </div>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru8cevap2}
                      </div>
                      {anket.soru8cevap3 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru8cevap3}
                        </div>
                      ) : null}

                      {anket.soru8cevap4 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru8cevap4}
                        </div>
                      ) : null}
                      {anket.soru8cevap5 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru8cevap5}
                        </div>
                      ) : null}
                    </>
                  ) : anketCevap[0].soru8cevap1 == 2 ? (
                    <>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru8cevap1}
                      </div>
                      <div>
                        <input type="radio" className="me-2" checked />
                        {anket.soru8cevap2}
                      </div>
                      {anket.soru8cevap3 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru8cevap3}
                        </div>
                      ) : null}
                      {anket.soru8cevap4 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru8cevap4}
                        </div>
                      ) : null}
                      {anket.soru8cevap5 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru8cevap5}
                        </div>
                      ) : null}
                    </>
                  ) : anketCevap[0].soru8cevap1 == 3 ? (
                    <>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru8cevap1}
                      </div>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru8cevap2}
                      </div>
                      {anket.soru8cevap3 ? (
                        <div>
                          <input type="radio" className="me-2" checked />
                          {anket.soru8cevap3}
                        </div>
                      ) : null}
                      {anket.soru8cevap4 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru8cevap4}
                        </div>
                      ) : null}
                      {anket.soru8cevap5 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru8cevap5}
                        </div>
                      ) : null}
                    </>
                  ) : anketCevap[0].soru8cevap1 == 4 ? (
                    <>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru8cevap1}
                      </div>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru8cevap2}
                      </div>
                      {anket.soru8cevap3 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru8cevap3}
                        </div>
                      ) : null}
                      {anket.soru8cevap4 ? (
                        <div>
                          <input type="radio" className="me-2" checked />
                          {anket.soru8cevap4}
                        </div>
                      ) : null}
                      {anket.soru8cevap5 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru8cevap5}
                        </div>
                      ) : null}
                    </>
                  ) : anketCevap[0].soru8cevap1 == 5 ? (
                    <>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru8cevap1}
                      </div>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru8cevap2}
                      </div>
                      {anket.soru8cevap3 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru8cevap3}
                        </div>
                      ) : null}
                      {anket.soru8cevap4 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru8cevap4}
                        </div>
                      ) : null}
                      {anket.soru8cevap5 ? (
                        <div>
                          <input type="radio" className="me-2" checked />
                          {anket.soru8cevap5}
                        </div>
                      ) : null}
                    </>
                  ) : null}
                </>
              ) : null}
            </>
          </div>
        ) : null}
        {anket.soru9 ? (
          <div className="col-10 offset-1 border bg-light p-3 mt-4">
            <>
              <h5 className="ms-4">{anket.soru9}</h5>
              {anketCevap[0].soru9cevap1 ? (
                <>
                  {anketCevap[0].soru9cevap1 == 1 ? (
                    <>
                      <div>
                        <input type="radio" className="me-2" checked />
                        {anket.soru9cevap1}
                      </div>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru9cevap2}
                      </div>
                      {anket.soru9cevap3 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru9cevap3}
                        </div>
                      ) : null}

                      {anket.soru9cevap4 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru9cevap4}
                        </div>
                      ) : null}
                      {anket.soru9cevap5 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru9cevap5}
                        </div>
                      ) : null}
                    </>
                  ) : anketCevap[0].soru9cevap1 == 2 ? (
                    <>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru9cevap1}
                      </div>
                      <div>
                        <input type="radio" className="me-2" checked />
                        {anket.soru9cevap2}
                      </div>
                      {anket.soru9cevap3 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru9cevap3}
                        </div>
                      ) : null}
                      {anket.soru9cevap4 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru9cevap4}
                        </div>
                      ) : null}
                      {anket.soru9cevap5 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru9cevap5}
                        </div>
                      ) : null}
                    </>
                  ) : anketCevap[0].soru9cevap1 == 3 ? (
                    <>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru9cevap1}
                      </div>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru9cevap2}
                      </div>
                      {anket.soru9cevap3 ? (
                        <div>
                          <input type="radio" className="me-2" checked />
                          {anket.soru9cevap3}
                        </div>
                      ) : null}
                      {anket.soru9cevap4 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru9cevap4}
                        </div>
                      ) : null}
                      {anket.soru9cevap5 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru9cevap5}
                        </div>
                      ) : null}
                    </>
                  ) : anketCevap[0].soru9cevap1 == 4 ? (
                    <>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru9cevap1}
                      </div>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru9cevap2}
                      </div>
                      {anket.soru9cevap3 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru9cevap3}
                        </div>
                      ) : null}
                      {anket.soru9cevap4 ? (
                        <div>
                          <input type="radio" className="me-2" checked />
                          {anket.soru9cevap4}
                        </div>
                      ) : null}
                      {anket.soru9cevap5 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru9cevap5}
                        </div>
                      ) : null}
                    </>
                  ) : anketCevap[0].soru9cevap1 == 5 ? (
                    <>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru9cevap1}
                      </div>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru9cevap2}
                      </div>
                      {anket.soru9cevap3 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru9cevap3}
                        </div>
                      ) : null}
                      {anket.soru9cevap4 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru9cevap4}
                        </div>
                      ) : null}
                      {anket.soru9cevap5 ? (
                        <div>
                          <input type="radio" className="me-2" checked />
                          {anket.soru9cevap5}
                        </div>
                      ) : null}
                    </>
                  ) : null}
                </>
              ) : null}
            </>
          </div>
        ) : null}
        {anket.soru10 ? (
          <div className="col-10 offset-1 border bg-light p-3 mt-4">
            <>
              <h5 className="ms-4">{anket.soru10}</h5>
              {anketCevap[0].soru10cevap1 ? (
                <>
                  {anketCevap[0].soru10cevap1 == 1 ? (
                    <>
                      <div>
                        <input type="radio" className="me-2" checked />
                        {anket.soru10cevap1}
                      </div>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru10cevap2}
                      </div>
                      {anket.soru10cevap3 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru10cevap3}
                        </div>
                      ) : null}

                      {anket.soru10cevap4 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru10cevap4}
                        </div>
                      ) : null}
                      {anket.soru10cevap5 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru10cevap5}
                        </div>
                      ) : null}
                    </>
                  ) : anketCevap[0].soru10cevap1 == 2 ? (
                    <>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru10cevap1}
                      </div>
                      <div>
                        <input type="radio" className="me-2" checked />
                        {anket.soru10cevap2}
                      </div>
                      {anket.soru10cevap3 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru10cevap3}
                        </div>
                      ) : null}
                      {anket.soru10cevap4 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru10cevap4}
                        </div>
                      ) : null}
                      {anket.soru10cevap5 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru10cevap5}
                        </div>
                      ) : null}
                    </>
                  ) : anketCevap[0].soru10cevap1 == 3 ? (
                    <>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru10cevap1}
                      </div>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru10cevap2}
                      </div>
                      {anket.soru10cevap3 ? (
                        <div>
                          <input type="radio" className="me-2" checked />
                          {anket.soru10cevap3}
                        </div>
                      ) : null}
                      {anket.soru10cevap4 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru10cevap4}
                        </div>
                      ) : null}
                      {anket.soru10cevap5 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru10cevap5}
                        </div>
                      ) : null}
                    </>
                  ) : anketCevap[0].soru10cevap1 == 4 ? (
                    <>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru10cevap1}
                      </div>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru10cevap2}
                      </div>
                      {anket.soru10cevap3 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru10cevap3}
                        </div>
                      ) : null}
                      {anket.soru10cevap4 ? (
                        <div>
                          <input type="radio" className="me-2" checked />
                          {anket.soru10cevap4}
                        </div>
                      ) : null}
                      {anket.soru10cevap5 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru10cevap5}
                        </div>
                      ) : null}
                    </>
                  ) : anketCevap[0].soru10cevap1 == 5 ? (
                    <>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru10cevap1}
                      </div>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru10cevap2}
                      </div>
                      {anket.soru10cevap3 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru10cevap3}
                        </div>
                      ) : null}
                      {anket.soru10cevap4 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru10cevap4}
                        </div>
                      ) : null}
                      {anket.soru10cevap5 ? (
                        <div>
                          <input type="radio" className="me-2" checked />
                          {anket.soru10cevap5}
                        </div>
                      ) : null}
                    </>
                  ) : null}
                </>
              ) : null}
            </>
          </div>
        ) : null}
        {anket.soru11 ? (
          <div className="col-10 offset-1 border bg-light p-3 mt-4">
            <>
              <h5 className="ms-4">{anket.soru11}</h5>
              {anketCevap[0].soru11cevap1 ? (
                <>
                  {anketCevap[0].soru11cevap1 == 1 ? (
                    <>
                      <div>
                        <input type="radio" className="me-2" checked />
                        {anket.soru11cevap1}
                      </div>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru11cevap2}
                      </div>
                      {anket.soru11cevap3 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru11cevap3}
                        </div>
                      ) : null}

                      {anket.soru11cevap4 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru11cevap4}
                        </div>
                      ) : null}
                      {anket.soru11cevap5 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru11cevap5}
                        </div>
                      ) : null}
                    </>
                  ) : anketCevap[0].soru11cevap1 == 2 ? (
                    <>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru11cevap1}
                      </div>
                      <div>
                        <input type="radio" className="me-2" checked />
                        {anket.soru11cevap2}
                      </div>
                      {anket.soru11cevap3 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru11cevap3}
                        </div>
                      ) : null}
                      {anket.soru11cevap4 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru11cevap4}
                        </div>
                      ) : null}
                      {anket.soru11cevap5 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru11cevap5}
                        </div>
                      ) : null}
                    </>
                  ) : anketCevap[0].soru11cevap1 == 3 ? (
                    <>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru11cevap1}
                      </div>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru11cevap2}
                      </div>
                      {anket.soru11cevap3 ? (
                        <div>
                          <input type="radio" className="me-2" checked />
                          {anket.soru11cevap3}
                        </div>
                      ) : null}
                      {anket.soru11cevap4 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru11cevap4}
                        </div>
                      ) : null}
                      {anket.soru11cevap5 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru11cevap5}
                        </div>
                      ) : null}
                    </>
                  ) : anketCevap[0].soru11cevap1 == 4 ? (
                    <>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru11cevap1}
                      </div>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru11cevap2}
                      </div>
                      {anket.soru11cevap3 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru11cevap3}
                        </div>
                      ) : null}
                      {anket.soru11cevap4 ? (
                        <div>
                          <input type="radio" className="me-2" checked />
                          {anket.soru11cevap4}
                        </div>
                      ) : null}
                      {anket.soru11cevap5 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru11cevap5}
                        </div>
                      ) : null}
                    </>
                  ) : anketCevap[0].soru11cevap1 == 5 ? (
                    <>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru11cevap1}
                      </div>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru11cevap2}
                      </div>
                      {anket.soru11cevap3 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru11cevap3}
                        </div>
                      ) : null}
                      {anket.soru11cevap4 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru11cevap4}
                        </div>
                      ) : null}
                      {anket.soru11cevap5 ? (
                        <div>
                          <input type="radio" className="me-2" checked />
                          {anket.soru11cevap5}
                        </div>
                      ) : null}
                    </>
                  ) : null}
                </>
              ) : null}
            </>
          </div>
        ) : null}
        {anket.soru12 ? (
          <div className="col-10 offset-1 border bg-light p-3 mt-4">
            <>
              <h5 className="ms-4">{anket.soru12}</h5>
              {anketCevap[0].soru12cevap1 ? (
                <>
                  {anketCevap[0].soru12cevap1 == 1 ? (
                    <>
                      <div>
                        <input type="radio" className="me-2" checked />
                        {anket.soru12cevap1}
                      </div>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru12cevap2}
                      </div>
                      {anket.soru12cevap3 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru12cevap3}
                        </div>
                      ) : null}

                      {anket.soru12cevap4 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru12cevap4}
                        </div>
                      ) : null}
                      {anket.soru12cevap5 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru12cevap5}
                        </div>
                      ) : null}
                    </>
                  ) : anketCevap[0].soru12cevap1 == 2 ? (
                    <>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru12cevap1}
                      </div>
                      <div>
                        <input type="radio" className="me-2" checked />
                        {anket.soru12cevap2}
                      </div>
                      {anket.soru12cevap3 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru12cevap3}
                        </div>
                      ) : null}
                      {anket.soru12cevap4 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru12cevap4}
                        </div>
                      ) : null}
                      {anket.soru12cevap5 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru12cevap5}
                        </div>
                      ) : null}
                    </>
                  ) : anketCevap[0].soru12cevap1 == 3 ? (
                    <>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru12cevap1}
                      </div>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru12cevap2}
                      </div>
                      {anket.soru12cevap3 ? (
                        <div>
                          <input type="radio" className="me-2" checked />
                          {anket.soru12cevap3}
                        </div>
                      ) : null}
                      {anket.soru12cevap4 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru12cevap4}
                        </div>
                      ) : null}
                      {anket.soru12cevap5 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru12cevap5}
                        </div>
                      ) : null}
                    </>
                  ) : anketCevap[0].soru12cevap1 == 4 ? (
                    <>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru12cevap1}
                      </div>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru12cevap2}
                      </div>
                      {anket.soru12cevap3 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru12cevap3}
                        </div>
                      ) : null}
                      {anket.soru12cevap4 ? (
                        <div>
                          <input type="radio" className="me-2" checked />
                          {anket.soru12cevap4}
                        </div>
                      ) : null}
                      {anket.soru12cevap5 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru12cevap5}
                        </div>
                      ) : null}
                    </>
                  ) : anketCevap[0].soru12cevap1 == 5 ? (
                    <>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru12cevap1}
                      </div>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru12cevap2}
                      </div>
                      {anket.soru12cevap3 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru12cevap3}
                        </div>
                      ) : null}
                      {anket.soru12cevap4 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru12cevap4}
                        </div>
                      ) : null}
                      {anket.soru12cevap5 ? (
                        <div>
                          <input type="radio" className="me-2" checked />
                          {anket.soru12cevap5}
                        </div>
                      ) : null}
                    </>
                  ) : null}
                </>
              ) : null}
            </>
          </div>
        ) : null}
        {anket.soru13 ? (
          <div className="col-10 offset-1 border bg-light p-3 mt-4">
            <>
              <h5 className="ms-4">{anket.soru13}</h5>
              {anketCevap[0].soru13cevap1 ? (
                <>
                  {anketCevap[0].soru13cevap1 == 1 ? (
                    <>
                      <div>
                        <input type="radio" className="me-2" checked />
                        {anket.soru13cevap1}
                      </div>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru13cevap2}
                      </div>
                      {anket.soru13cevap3 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru13cevap3}
                        </div>
                      ) : null}

                      {anket.soru13cevap4 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru13cevap4}
                        </div>
                      ) : null}
                      {anket.soru13cevap5 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru13cevap5}
                        </div>
                      ) : null}
                    </>
                  ) : anketCevap[0].soru13cevap1 == 2 ? (
                    <>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru13cevap1}
                      </div>
                      <div>
                        <input type="radio" className="me-2" checked />
                        {anket.soru13cevap2}
                      </div>
                      {anket.soru13cevap3 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru13cevap3}
                        </div>
                      ) : null}
                      {anket.soru13cevap4 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru13cevap4}
                        </div>
                      ) : null}
                      {anket.soru13cevap5 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru13cevap5}
                        </div>
                      ) : null}
                    </>
                  ) : anketCevap[0].soru13cevap1 == 3 ? (
                    <>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru13cevap1}
                      </div>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru13cevap2}
                      </div>
                      {anket.soru13cevap3 ? (
                        <div>
                          <input type="radio" className="me-2" checked />
                          {anket.soru13cevap3}
                        </div>
                      ) : null}
                      {anket.soru13cevap4 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru13cevap4}
                        </div>
                      ) : null}
                      {anket.soru13cevap5 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru13cevap5}
                        </div>
                      ) : null}
                    </>
                  ) : anketCevap[0].soru13cevap1 == 4 ? (
                    <>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru13cevap1}
                      </div>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru13cevap2}
                      </div>
                      {anket.soru13cevap3 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru13cevap3}
                        </div>
                      ) : null}
                      {anket.soru13cevap4 ? (
                        <div>
                          <input type="radio" className="me-2" checked />
                          {anket.soru13cevap4}
                        </div>
                      ) : null}
                      {anket.soru13cevap5 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru13cevap5}
                        </div>
                      ) : null}
                    </>
                  ) : anketCevap[0].soru13cevap1 == 5 ? (
                    <>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru13cevap1}
                      </div>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru13cevap2}
                      </div>
                      {anket.soru13cevap3 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru13cevap3}
                        </div>
                      ) : null}
                      {anket.soru13cevap4 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru13cevap4}
                        </div>
                      ) : null}
                      {anket.soru13cevap5 ? (
                        <div>
                          <input type="radio" className="me-2" checked />
                          {anket.soru13cevap5}
                        </div>
                      ) : null}
                    </>
                  ) : null}
                </>
              ) : null}
            </>
          </div>
        ) : null}
        {anket.soru14 ? (
          <div className="col-10 offset-1 border bg-light p-3 mt-4">
            <>
              <h5 className="ms-4">{anket.soru14}</h5>
              {anketCevap[0].soru14cevap1 ? (
                <>
                  {anketCevap[0].soru14cevap1 == 1 ? (
                    <>
                      <div>
                        <input type="radio" className="me-2" checked />
                        {anket.soru14cevap1}
                      </div>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru14cevap2}
                      </div>
                      {anket.soru14cevap3 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru14cevap3}
                        </div>
                      ) : null}

                      {anket.soru14cevap4 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru14cevap4}
                        </div>
                      ) : null}
                      {anket.soru14cevap5 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru14cevap5}
                        </div>
                      ) : null}
                    </>
                  ) : anketCevap[0].soru14cevap1 == 2 ? (
                    <>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru14cevap1}
                      </div>
                      <div>
                        <input type="radio" className="me-2" checked />
                        {anket.soru14cevap2}
                      </div>
                      {anket.soru14cevap3 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru14cevap3}
                        </div>
                      ) : null}
                      {anket.soru14cevap4 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru14cevap4}
                        </div>
                      ) : null}
                      {anket.soru14cevap5 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru14cevap5}
                        </div>
                      ) : null}
                    </>
                  ) : anketCevap[0].soru14cevap1 == 3 ? (
                    <>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru14cevap1}
                      </div>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru14cevap2}
                      </div>
                      {anket.soru14cevap3 ? (
                        <div>
                          <input type="radio" className="me-2" checked />
                          {anket.soru14cevap3}
                        </div>
                      ) : null}
                      {anket.soru14cevap4 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru14cevap4}
                        </div>
                      ) : null}
                      {anket.soru14cevap5 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru14cevap5}
                        </div>
                      ) : null}
                    </>
                  ) : anketCevap[0].soru14cevap1 == 4 ? (
                    <>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru14cevap1}
                      </div>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru14cevap2}
                      </div>
                      {anket.soru14cevap3 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru14cevap3}
                        </div>
                      ) : null}
                      {anket.soru14cevap4 ? (
                        <div>
                          <input type="radio" className="me-2" checked />
                          {anket.soru14cevap4}
                        </div>
                      ) : null}
                      {anket.soru14cevap5 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru14cevap5}
                        </div>
                      ) : null}
                    </>
                  ) : anketCevap[0].soru14cevap1 == 5 ? (
                    <>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru14cevap1}
                      </div>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru14cevap2}
                      </div>
                      {anket.soru14cevap3 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru14cevap3}
                        </div>
                      ) : null}
                      {anket.soru14cevap4 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru14cevap4}
                        </div>
                      ) : null}
                      {anket.soru14cevap5 ? (
                        <div>
                          <input type="radio" className="me-2" checked />
                          {anket.soru14cevap5}
                        </div>
                      ) : null}
                    </>
                  ) : null}
                </>
              ) : null}
            </>
          </div>
        ) : null}
        {anket.soru15 ? (
          <div className="col-10 offset-1 border bg-light p-3 mt-4">
            <>
              <h5 className="ms-4">{anket.soru15}</h5>
              {anketCevap[0].soru15cevap1 ? (
                <>
                  {anketCevap[0].soru15cevap1 == 1 ? (
                    <>
                      <div>
                        <input type="radio" className="me-2" checked />
                        {anket.soru15cevap1}
                      </div>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru15cevap2}
                      </div>
                      {anket.soru15cevap3 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru15cevap3}
                        </div>
                      ) : null}

                      {anket.soru15cevap4 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru15cevap4}
                        </div>
                      ) : null}
                      {anket.soru15cevap5 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru15cevap5}
                        </div>
                      ) : null}
                    </>
                  ) : anketCevap[0].soru15cevap1 == 2 ? (
                    <>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru15cevap1}
                      </div>
                      <div>
                        <input type="radio" className="me-2" checked />
                        {anket.soru15cevap2}
                      </div>
                      {anket.soru15cevap3 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru15cevap3}
                        </div>
                      ) : null}
                      {anket.soru15cevap4 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru15cevap4}
                        </div>
                      ) : null}
                      {anket.soru15cevap5 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru15cevap5}
                        </div>
                      ) : null}
                    </>
                  ) : anketCevap[0].soru15cevap1 == 3 ? (
                    <>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru15cevap1}
                      </div>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru15cevap2}
                      </div>
                      {anket.soru15cevap3 ? (
                        <div>
                          <input type="radio" className="me-2" checked />
                          {anket.soru15cevap3}
                        </div>
                      ) : null}
                      {anket.soru15cevap4 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru15cevap4}
                        </div>
                      ) : null}
                      {anket.soru15cevap5 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru15cevap5}
                        </div>
                      ) : null}
                    </>
                  ) : anketCevap[0].soru15cevap1 == 4 ? (
                    <>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru15cevap1}
                      </div>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru15cevap2}
                      </div>
                      {anket.soru15cevap3 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru15cevap3}
                        </div>
                      ) : null}
                      {anket.soru15cevap4 ? (
                        <div>
                          <input type="radio" className="me-2" checked />
                          {anket.soru15cevap4}
                        </div>
                      ) : null}
                      {anket.soru15cevap5 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru15cevap5}
                        </div>
                      ) : null}
                    </>
                  ) : anketCevap[0].soru15cevap1 == 5 ? (
                    <>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru15cevap1}
                      </div>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru15cevap2}
                      </div>
                      {anket.soru15cevap3 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru15cevap3}
                        </div>
                      ) : null}
                      {anket.soru15cevap4 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru15cevap4}
                        </div>
                      ) : null}
                      {anket.soru15cevap5 ? (
                        <div>
                          <input type="radio" className="me-2" checked />
                          {anket.soru15cevap5}
                        </div>
                      ) : null}
                    </>
                  ) : null}
                </>
              ) : null}
            </>
          </div>
        ) : null}
        {anket.soru16 ? (
          <div className="col-10 offset-1 border bg-light p-3 mt-4">
            <>
              <h5 className="ms-4">{anket.soru16}</h5>
              {anketCevap[0].soru16cevap1 ? (
                <>
                  {anketCevap[0].soru16cevap1 == 1 ? (
                    <>
                      <div>
                        <input type="radio" className="me-2" checked />
                        {anket.soru16cevap1}
                      </div>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru16cevap2}
                      </div>
                      {anket.soru16cevap3 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru16cevap3}
                        </div>
                      ) : null}

                      {anket.soru16cevap4 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru16cevap4}
                        </div>
                      ) : null}
                      {anket.soru16cevap5 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru16cevap5}
                        </div>
                      ) : null}
                    </>
                  ) : anketCevap[0].soru16cevap1 == 2 ? (
                    <>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru16cevap1}
                      </div>
                      <div>
                        <input type="radio" className="me-2" checked />
                        {anket.soru16cevap2}
                      </div>
                      {anket.soru16cevap3 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru16cevap3}
                        </div>
                      ) : null}
                      {anket.soru16cevap4 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru16cevap4}
                        </div>
                      ) : null}
                      {anket.soru16cevap5 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru16cevap5}
                        </div>
                      ) : null}
                    </>
                  ) : anketCevap[0].soru16cevap1 == 3 ? (
                    <>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru16cevap1}
                      </div>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru16cevap2}
                      </div>
                      {anket.soru16cevap3 ? (
                        <div>
                          <input type="radio" className="me-2" checked />
                          {anket.soru16cevap3}
                        </div>
                      ) : null}
                      {anket.soru16cevap4 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru16cevap4}
                        </div>
                      ) : null}
                      {anket.soru16cevap5 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru16cevap5}
                        </div>
                      ) : null}
                    </>
                  ) : anketCevap[0].soru16cevap1 == 4 ? (
                    <>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru16cevap1}
                      </div>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru16cevap2}
                      </div>
                      {anket.soru16cevap3 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru16cevap3}
                        </div>
                      ) : null}
                      {anket.soru16cevap4 ? (
                        <div>
                          <input type="radio" className="me-2" checked />
                          {anket.soru16cevap4}
                        </div>
                      ) : null}
                      {anket.soru16cevap5 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru16cevap5}
                        </div>
                      ) : null}
                    </>
                  ) : anketCevap[0].soru16cevap1 == 5 ? (
                    <>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru16cevap1}
                      </div>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru16cevap2}
                      </div>
                      {anket.soru16cevap3 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru16cevap3}
                        </div>
                      ) : null}
                      {anket.soru16cevap4 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru16cevap4}
                        </div>
                      ) : null}
                      {anket.soru16cevap5 ? (
                        <div>
                          <input type="radio" className="me-2" checked />
                          {anket.soru16cevap5}
                        </div>
                      ) : null}
                    </>
                  ) : null}
                </>
              ) : null}
            </>
          </div>
        ) : null}
        {anket.soru17 ? (
          <div className="col-10 offset-1 border bg-light p-3 mt-4">
            <>
              <h5 className="ms-4">{anket.soru17}</h5>
              {anketCevap[0].soru17cevap1 ? (
                <>
                  {anketCevap[0].soru17cevap1 == 1 ? (
                    <>
                      <div>
                        <input type="radio" className="me-2" checked />
                        {anket.soru17cevap1}
                      </div>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru17cevap2}
                      </div>
                      {anket.soru17cevap3 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru17cevap3}
                        </div>
                      ) : null}

                      {anket.soru17cevap4 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru17cevap4}
                        </div>
                      ) : null}
                      {anket.soru17cevap5 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru17cevap5}
                        </div>
                      ) : null}
                    </>
                  ) : anketCevap[0].soru17cevap1 == 2 ? (
                    <>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru17cevap1}
                      </div>
                      <div>
                        <input type="radio" className="me-2" checked />
                        {anket.soru17cevap2}
                      </div>
                      {anket.soru17cevap3 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru17cevap3}
                        </div>
                      ) : null}
                      {anket.soru17cevap4 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru17cevap4}
                        </div>
                      ) : null}
                      {anket.soru17cevap5 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru17cevap5}
                        </div>
                      ) : null}
                    </>
                  ) : anketCevap[0].soru17cevap1 == 3 ? (
                    <>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru17cevap1}
                      </div>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru17cevap2}
                      </div>
                      {anket.soru17cevap3 ? (
                        <div>
                          <input type="radio" className="me-2" checked />
                          {anket.soru17cevap3}
                        </div>
                      ) : null}
                      {anket.soru17cevap4 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru17cevap4}
                        </div>
                      ) : null}
                      {anket.soru17cevap5 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru17cevap5}
                        </div>
                      ) : null}
                    </>
                  ) : anketCevap[0].soru17cevap1 == 4 ? (
                    <>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru17cevap1}
                      </div>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru17cevap2}
                      </div>
                      {anket.soru17cevap3 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru17cevap3}
                        </div>
                      ) : null}
                      {anket.soru17cevap4 ? (
                        <div>
                          <input type="radio" className="me-2" checked />
                          {anket.soru17cevap4}
                        </div>
                      ) : null}
                      {anket.soru17cevap5 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru17cevap5}
                        </div>
                      ) : null}
                    </>
                  ) : anketCevap[0].soru17cevap1 == 5 ? (
                    <>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru17cevap1}
                      </div>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru17cevap2}
                      </div>
                      {anket.soru17cevap3 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru17cevap3}
                        </div>
                      ) : null}
                      {anket.soru17cevap4 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru17cevap4}
                        </div>
                      ) : null}
                      {anket.soru17cevap5 ? (
                        <div>
                          <input type="radio" className="me-2" checked />
                          {anket.soru17cevap5}
                        </div>
                      ) : null}
                    </>
                  ) : null}
                </>
              ) : null}
            </>
          </div>
        ) : null}
        {anket.soru18 ? (
          <div className="col-10 offset-1 border bg-light p-3 mt-4">
            <>
              <h5 className="ms-4">{anket.soru18}</h5>
              {anketCevap[0].soru18cevap1 ? (
                <>
                  {anketCevap[0].soru18cevap1 == 1 ? (
                    <>
                      <div>
                        <input type="radio" className="me-2" checked />
                        {anket.soru18cevap1}
                      </div>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru18cevap2}
                      </div>
                      {anket.soru18cevap3 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru18cevap3}
                        </div>
                      ) : null}

                      {anket.soru18cevap4 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru18cevap4}
                        </div>
                      ) : null}
                      {anket.soru18cevap5 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru18cevap5}
                        </div>
                      ) : null}
                    </>
                  ) : anketCevap[0].soru18cevap1 == 2 ? (
                    <>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru18cevap1}
                      </div>
                      <div>
                        <input type="radio" className="me-2" checked />
                        {anket.soru18cevap2}
                      </div>
                      {anket.soru18cevap3 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru18cevap3}
                        </div>
                      ) : null}
                      {anket.soru18cevap4 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru18cevap4}
                        </div>
                      ) : null}
                      {anket.soru18cevap5 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru18cevap5}
                        </div>
                      ) : null}
                    </>
                  ) : anketCevap[0].soru18cevap1 == 3 ? (
                    <>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru18cevap1}
                      </div>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru18cevap2}
                      </div>
                      {anket.soru18cevap3 ? (
                        <div>
                          <input type="radio" className="me-2" checked />
                          {anket.soru18cevap3}
                        </div>
                      ) : null}
                      {anket.soru18cevap4 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru18cevap4}
                        </div>
                      ) : null}
                      {anket.soru18cevap5 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru18cevap5}
                        </div>
                      ) : null}
                    </>
                  ) : anketCevap[0].soru18cevap1 == 4 ? (
                    <>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru18cevap1}
                      </div>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru18cevap2}
                      </div>
                      {anket.soru18cevap3 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru18cevap3}
                        </div>
                      ) : null}
                      {anket.soru18cevap4 ? (
                        <div>
                          <input type="radio" className="me-2" checked />
                          {anket.soru18cevap4}
                        </div>
                      ) : null}
                      {anket.soru18cevap5 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru18cevap5}
                        </div>
                      ) : null}
                    </>
                  ) : anketCevap[0].soru18cevap1 == 5 ? (
                    <>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru18cevap1}
                      </div>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru18cevap2}
                      </div>
                      {anket.soru18cevap3 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru18cevap3}
                        </div>
                      ) : null}
                      {anket.soru18cevap4 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru18cevap4}
                        </div>
                      ) : null}
                      {anket.soru18cevap5 ? (
                        <div>
                          <input type="radio" className="me-2" checked />
                          {anket.soru18cevap5}
                        </div>
                      ) : null}
                    </>
                  ) : null}
                </>
              ) : null}
            </>
          </div>
        ) : null}
        {anket.soru19 ? (
          <div className="col-10 offset-1 border bg-light p-3 mt-4">
            <>
              <h5 className="ms-4">{anket.soru19}</h5>
              {anketCevap[0].soru19cevap1 ? (
                <>
                  {anketCevap[0].soru19cevap1 == 1 ? (
                    <>
                      <div>
                        <input type="radio" className="me-2" checked />
                        {anket.soru19cevap1}
                      </div>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru19cevap2}
                      </div>
                      {anket.soru19cevap3 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru19cevap3}
                        </div>
                      ) : null}

                      {anket.soru19cevap4 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru19cevap4}
                        </div>
                      ) : null}
                      {anket.soru19cevap5 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru19cevap5}
                        </div>
                      ) : null}
                    </>
                  ) : anketCevap[0].soru19cevap1 == 2 ? (
                    <>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru19cevap1}
                      </div>
                      <div>
                        <input type="radio" className="me-2" checked />
                        {anket.soru19cevap2}
                      </div>
                      {anket.soru19cevap3 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru19cevap3}
                        </div>
                      ) : null}
                      {anket.soru19cevap4 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru19cevap4}
                        </div>
                      ) : null}
                      {anket.soru19cevap5 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru19cevap5}
                        </div>
                      ) : null}
                    </>
                  ) : anketCevap[0].soru19cevap1 == 3 ? (
                    <>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru19cevap1}
                      </div>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru19cevap2}
                      </div>
                      {anket.soru19cevap3 ? (
                        <div>
                          <input type="radio" className="me-2" checked />
                          {anket.soru19cevap3}
                        </div>
                      ) : null}
                      {anket.soru19cevap4 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru19cevap4}
                        </div>
                      ) : null}
                      {anket.soru19cevap5 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru19cevap5}
                        </div>
                      ) : null}
                    </>
                  ) : anketCevap[0].soru19cevap1 == 4 ? (
                    <>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru19cevap1}
                      </div>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru19cevap2}
                      </div>
                      {anket.soru19cevap3 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru19cevap3}
                        </div>
                      ) : null}
                      {anket.soru19cevap4 ? (
                        <div>
                          <input type="radio" className="me-2" checked />
                          {anket.soru19cevap4}
                        </div>
                      ) : null}
                      {anket.soru19cevap5 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru19cevap5}
                        </div>
                      ) : null}
                    </>
                  ) : anketCevap[0].soru19cevap1 == 5 ? (
                    <>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru19cevap1}
                      </div>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru19cevap2}
                      </div>
                      {anket.soru19cevap3 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru19cevap3}
                        </div>
                      ) : null}
                      {anket.soru19cevap4 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru19cevap4}
                        </div>
                      ) : null}
                      {anket.soru19cevap5 ? (
                        <div>
                          <input type="radio" className="me-2" checked />
                          {anket.soru19cevap5}
                        </div>
                      ) : null}
                    </>
                  ) : null}
                </>
              ) : null}
            </>
          </div>
        ) : null}
        {anket.soru20 ? (
          <div className="col-10 offset-1 border bg-light p-3 mt-4">
            <>
              <h5 className="ms-4">{anket.soru20}</h5>
              {anketCevap[0].soru20cevap1 ? (
                <>
                  {anketCevap[0].soru20cevap1 == 1 ? (
                    <>
                      <div>
                        <input type="radio" className="me-2" checked />
                        {anket.soru20cevap1}
                      </div>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru20cevap2}
                      </div>
                      {anket.soru20cevap3 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru20cevap3}
                        </div>
                      ) : null}

                      {anket.soru20cevap4 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru20cevap4}
                        </div>
                      ) : null}
                      {anket.soru20cevap5 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru20cevap5}
                        </div>
                      ) : null}
                    </>
                  ) : anketCevap[0].soru20cevap1 == 2 ? (
                    <>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru20cevap1}
                      </div>
                      <div>
                        <input type="radio" className="me-2" checked />
                        {anket.soru20cevap2}
                      </div>
                      {anket.soru20cevap3 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru20cevap3}
                        </div>
                      ) : null}
                      {anket.soru20cevap4 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru20cevap4}
                        </div>
                      ) : null}
                      {anket.soru20cevap5 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru20cevap5}
                        </div>
                      ) : null}
                    </>
                  ) : anketCevap[0].soru20cevap1 == 3 ? (
                    <>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru20cevap1}
                      </div>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru20cevap2}
                      </div>
                      {anket.soru20cevap3 ? (
                        <div>
                          <input type="radio" className="me-2" checked />
                          {anket.soru20cevap3}
                        </div>
                      ) : null}
                      {anket.soru20cevap4 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru20cevap4}
                        </div>
                      ) : null}
                      {anket.soru20cevap5 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru20cevap5}
                        </div>
                      ) : null}
                    </>
                  ) : anketCevap[0].soru20cevap1 == 4 ? (
                    <>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru20cevap1}
                      </div>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru20cevap2}
                      </div>
                      {anket.soru20cevap3 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru20cevap3}
                        </div>
                      ) : null}
                      {anket.soru20cevap4 ? (
                        <div>
                          <input type="radio" className="me-2" checked />
                          {anket.soru20cevap4}
                        </div>
                      ) : null}
                      {anket.soru20cevap5 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru20cevap5}
                        </div>
                      ) : null}
                    </>
                  ) : anketCevap[0].soru20cevap1 == 5 ? (
                    <>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru20cevap1}
                      </div>
                      <div>
                        <input type="radio" className="me-2" disabled />
                        {anket.soru20cevap2}
                      </div>
                      {anket.soru20cevap3 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru20cevap3}
                        </div>
                      ) : null}
                      {anket.soru20cevap4 ? (
                        <div>
                          <input type="radio" className="me-2" disabled />
                          {anket.soru20cevap4}
                        </div>
                      ) : null}
                      {anket.soru20cevap5 ? (
                        <div>
                          <input type="radio" className="me-2" checked />
                          {anket.soru20cevap5}
                        </div>
                      ) : null}
                    </>
                  ) : null}
                </>
              ) : null}
            </>
          </div>
        ) : null}
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
