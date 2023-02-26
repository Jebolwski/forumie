import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import "./AnketDetay.css";
const AnketDetay = () => {
  let param = useParams();
  let navigate = useNavigate();
  const [anket, setAnket] = useState();
  const [loading, setLoading] = useState(true);
  const [soru1cevap, setSoru1cevap] = useState();
  const [soru2cevap, setSoru2cevap] = useState();
  const [soru3cevap, setSoru3cevap] = useState();
  const [soru4cevap, setSoru4cevap] = useState();
  const [soru5cevap, setSoru5cevap] = useState();
  const [soru6cevap, setSoru6cevap] = useState();
  const [soru7cevap, setSoru7cevap] = useState();
  const [soru8cevap, setSoru8cevap] = useState();
  const [soru9cevap, setSoru9cevap] = useState();
  const [soru10cevap, setSoru10cevap] = useState();
  const [soru11cevap, setSoru11cevap] = useState();
  const [soru12cevap, setSoru12cevap] = useState();
  const [soru13cevap, setSoru13cevap] = useState();
  const [soru14cevap, setSoru14cevap] = useState();
  const [soru15cevap, setSoru15cevap] = useState();
  const [soru16cevap, setSoru16cevap] = useState();
  const [soru17cevap, setSoru17cevap] = useState();
  const [soru18cevap, setSoru18cevap] = useState();
  const [soru19cevap, setSoru19cevap] = useState();
  const [soru20cevap, setSoru20cevap] = useState();
  let { user } = useContext(AuthContext);
  let anketGel = async () => {
    let response = await fetch(`http://127.0.0.1:8000/api/anket/${param.id}/`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    if (response.status === 200) {
      let data = await response.json();
      setAnket(data);
      setLoading(false);
    }
  };

  let anketCevapla = async () => {
    let response = await fetch(
      `http://127.0.0.1:8000/api/anket/${param.id}/cevapla/`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user_id: user.user_id,
          soru1cevap1: soru1cevap,
          soru2cevap1: soru2cevap,
          soru3cevap1: soru3cevap,
          soru4cevap1: soru4cevap,
          soru5cevap1: soru5cevap,
          soru6cevap1: soru6cevap,
          soru7cevap1: soru7cevap,
          soru8cevap1: soru8cevap,
          soru9cevap1: soru9cevap,
          soru10cevap1: soru10cevap,
          soru11cevap1: soru11cevap,
          soru12cevap1: soru12cevap,
          soru13cevap1: soru13cevap,
          soru14cevap1: soru14cevap,
          soru15cevap1: soru15cevap,
          soru16cevap1: soru16cevap,
          soru17cevap1: soru17cevap,
          soru18cevap1: soru18cevap,
          soru19cevap1: soru19cevap,
          soru20cevap1: soru20cevap,
        }),
      }
    );
    if (response.status === 200) {
      let data = await response.json();
      setAnket(data);
      setLoading(false);
      navigate("/anketler/");
    }
  };

  useEffect(() => {
    anketGel();
  }, []);
  if (loading) {
    return (
      <>
        <p>Yükleniyor</p>
      </>
    );
  } else {
    return (
      <div className="col-10 col-lg-6 offset-lg-3 offset-1">
        <h4 className="col-10 offset-1 text-center pt-4">{anket.baslik}</h4>
        <h5 className="mt-5">
          <i>{anket.aciklama}</i>
        </h5>
        <div className="big-div">
          {anket.soru1 ? (
            <div className="soru1  border rounded p-3 mt-5">
              <h5 className="text-center mb-4">{anket.soru1}</h5>
              <p>
                <input
                  type="radio"
                  className="me-2 s11"
                  name="1"
                  onChange={() => {
                    setSoru1cevap("1");
                  }}
                />
                {anket.soru1cevap1}
              </p>
              <p>
                <input
                  type="radio"
                  className="me-2 s12"
                  name="1"
                  onChange={() => {
                    setSoru1cevap("2");
                  }}
                />
                {anket.soru1cevap2}
              </p>
              {anket.soru1cevap3 ? (
                <p>
                  <input
                    type="radio"
                    className="me-2 s13"
                    name="1"
                    onChange={() => {
                      setSoru1cevap("3");
                    }}
                  />
                  {anket.soru1cevap3}
                </p>
              ) : null}
              {anket.soru1cevap4 ? (
                <p>
                  <input
                    type="radio"
                    className="me-2 s14"
                    name="1"
                    onChange={() => {
                      setSoru1cevap("4");
                    }}
                  />
                  {anket.soru1cevap4}
                </p>
              ) : null}
              {anket.soru1cevap5 ? (
                <p>
                  <input
                    type="radio"
                    className="me-2 s15"
                    name="1"
                    onChange={() => {
                      setSoru1cevap("5");
                    }}
                  />
                  {anket.soru1cevap5}
                </p>
              ) : null}
            </div>
          ) : null}
          {anket.soru2 ? (
            <div className="soru2  border rounded p-3 mt-4">
              <h5 className="text-center mb-4">{anket.soru2}</h5>
              <p>
                <input
                  type="radio"
                  className="me-2"
                  name="2"
                  onChange={() => {
                    setSoru2cevap("1");
                  }}
                />
                {anket.soru2cevap1}
              </p>
              <p>
                <input
                  type="radio"
                  className="me-2"
                  name="2"
                  onChange={() => {
                    setSoru2cevap("2");
                  }}
                />
                {anket.soru2cevap2}
              </p>
              {anket.soru2cevap3 ? (
                <p>
                  <input
                    type="radio"
                    className="me-2"
                    name="2"
                    onChange={() => {
                      setSoru2cevap("3");
                    }}
                  />
                  {anket.soru2cevap3}
                </p>
              ) : null}
              {anket.soru2cevap4 ? (
                <p>
                  <input
                    type="radio"
                    className="me-2"
                    name="2"
                    onChange={() => {
                      setSoru2cevap("4");
                    }}
                  />
                  {anket.soru2cevap4}
                </p>
              ) : null}
              {anket.soru2cevap5 ? (
                <p>
                  <input
                    type="radio"
                    className="me-2"
                    name="2"
                    onChange={() => {
                      setSoru2cevap("5");
                    }}
                  />
                  {anket.soru2cevap5}
                </p>
              ) : null}
            </div>
          ) : null}
          {anket.soru3 ? (
            <div className="soru3  border rounded p-3 mt-4">
              <h5 className="text-center mb-4">{anket.soru3}</h5>
              <p>
                <input
                  type="radio"
                  className="me-2"
                  name="3"
                  onChange={() => {
                    setSoru3cevap("1");
                  }}
                />
                {anket.soru3cevap1}
              </p>
              <p>
                <input
                  type="radio"
                  className="me-2"
                  name="3"
                  onChange={() => {
                    setSoru3cevap("2");
                  }}
                />
                {anket.soru3cevap2}
              </p>
              {anket.soru3cevap3 ? (
                <p>
                  <input
                    type="radio"
                    className="me-2"
                    name="3"
                    onChange={() => {
                      setSoru3cevap("3");
                    }}
                  />
                  {anket.soru3cevap3}
                </p>
              ) : null}
              {anket.soru3cevap4 ? (
                <p>
                  <input
                    type="radio"
                    className="me-2"
                    name="3"
                    onChange={() => {
                      setSoru3cevap("4");
                    }}
                  />
                  {anket.soru3cevap4}
                </p>
              ) : null}
              {anket.soru3cevap5 ? (
                <p>
                  <input
                    type="radio"
                    className="me-2"
                    name="3"
                    onChange={() => {
                      setSoru3cevap("5");
                    }}
                  />
                  {anket.soru3cevap5}
                </p>
              ) : null}
            </div>
          ) : null}
          {anket.soru4 ? (
            <div className="soru4  border rounded p-3 mt-4">
              <h5 className="text-center mb-4">{anket.soru4}</h5>
              <p>
                <input
                  type="radio"
                  className="me-2"
                  name="4"
                  onChange={() => {
                    setSoru4cevap("1");
                  }}
                />
                {anket.soru4cevap1}
              </p>
              <p>
                <input
                  type="radio"
                  className="me-2"
                  name="4"
                  onChange={() => {
                    setSoru4cevap("2");
                  }}
                />
                {anket.soru4cevap2}
              </p>
              {anket.soru4cevap3 ? (
                <p>
                  <input
                    type="radio"
                    className="me-2"
                    name="2"
                    onChange={() => {
                      setSoru4cevap("3");
                    }}
                  />
                  {anket.soru4cevap3}
                </p>
              ) : null}
              {anket.soru4cevap4 ? (
                <p>
                  <input
                    type="radio"
                    className="me-2"
                    name="4"
                    onChange={() => {
                      setSoru4cevap("4");
                    }}
                  />
                  {anket.soru4cevap4}
                </p>
              ) : null}
              {anket.soru4cevap5 ? (
                <p>
                  <input
                    type="radio"
                    className="me-2"
                    name="4"
                    onChange={() => {
                      setSoru4cevap("5");
                    }}
                  />
                  {anket.soru4cevap5}
                </p>
              ) : null}
            </div>
          ) : null}
          {anket.soru5 ? (
            <div className="soru5  border rounded p-3 mt-4">
              <h5 className="text-center mb-4">{anket.soru5}</h5>
              <p>
                <input
                  type="radio"
                  className="me-2"
                  name="5"
                  onChange={() => {
                    setSoru5cevap("1");
                  }}
                />
                {anket.soru5cevap1}
              </p>
              <p>
                <input
                  type="radio"
                  className="me-2"
                  name="5"
                  onChange={() => {
                    setSoru5cevap("2");
                  }}
                />
                {anket.soru5cevap2}
              </p>
              {anket.soru5cevap3 ? (
                <p>
                  <input
                    type="radio"
                    className="me-2"
                    name="5"
                    onChange={() => {
                      setSoru5cevap("3");
                    }}
                  />
                  {anket.soru5cevap3}
                </p>
              ) : null}
              {anket.soru5cevap4 ? (
                <p>
                  <input
                    type="radio"
                    className="me-2"
                    name="5"
                    onChange={() => {
                      setSoru4cevap("4");
                    }}
                  />
                  {anket.soru5cevap4}
                </p>
              ) : null}
              {anket.soru5cevap5 ? (
                <p>
                  <input
                    type="radio"
                    className="me-2"
                    name="5"
                    onChange={() => {
                      soru4cevap("5");
                    }}
                  />
                  {anket.soru5cevap5}
                </p>
              ) : null}
            </div>
          ) : null}
          {anket.soru6 ? (
            <div className="soru6  border rounded p-3 mt-4">
              <h5 className="text-center mb-4">{anket.soru6}</h5>
              <p>
                <input
                  type="radio"
                  className="me-2"
                  name="6"
                  onChange={() => {
                    setSoru6cevap("1");
                  }}
                />
                {anket.soru6cevap1}
              </p>
              <p>
                <input
                  type="radio"
                  className="me-2"
                  name="6"
                  onChange={() => {
                    setSoru6cevap("2");
                  }}
                />
                {anket.soru6cevap2}
              </p>
              {anket.soru6cevap3 ? (
                <p>
                  <input
                    type="radio"
                    className="me-2"
                    name="6"
                    onChange={() => {
                      setSoru6cevap("3");
                    }}
                  />
                  {anket.soru6cevap3}
                </p>
              ) : null}
              {anket.soru6cevap4 ? (
                <p>
                  <input
                    type="radio"
                    className="me-2"
                    name="6"
                    onChange={() => {
                      setSoru6cevap("4");
                    }}
                  />
                  {anket.soru6cevap4}
                </p>
              ) : null}
              {anket.soru6cevap5 ? (
                <p>
                  <input
                    type="radio"
                    className="me-2"
                    name="6"
                    onChange={() => {
                      soru6cevap("5");
                    }}
                  />
                  {anket.soru6cevap5}
                </p>
              ) : null}
            </div>
          ) : null}
          {anket.soru7 ? (
            <div className="soru7  border rounded p-3 mt-4">
              <h5 className="text-center mb-4">{anket.soru7}</h5>
              <p>
                <input
                  type="radio"
                  className="me-2"
                  name="7"
                  onChange={() => {
                    setSoru7cevap("1");
                  }}
                />
                {anket.soru7cevap1}
              </p>
              <p>
                <input
                  type="radio"
                  className="me-2"
                  name="7"
                  onChange={() => {
                    setSoru7cevap("2");
                  }}
                />
                {anket.soru7cevap2}
              </p>
              {anket.soru7cevap3 ? (
                <p>
                  <input
                    type="radio"
                    className="me-2"
                    name="7"
                    onChange={() => {
                      setSoru7cevap("3");
                    }}
                  />
                  {anket.soru7cevap3}
                </p>
              ) : null}
              {anket.soru7cevap4 ? (
                <p>
                  <input
                    type="radio"
                    className="me-2"
                    name="7"
                    onChange={() => {
                      setSoru7cevap("4");
                    }}
                  />
                  {anket.soru7cevap4}
                </p>
              ) : null}
              {anket.soru7cevap5 ? (
                <p>
                  <input
                    type="radio"
                    className="me-2"
                    name="7"
                    onChange={() => {
                      soru7cevap("5");
                    }}
                  />
                  {anket.soru7cevap5}
                </p>
              ) : null}
            </div>
          ) : null}
          {anket.soru8 ? (
            <div className="soru8  border rounded p-3 mt-4">
              <h5 className="text-center mb-4">{anket.soru8}</h5>
              <p>
                <input
                  type="radio"
                  className="me-2"
                  name="8"
                  onChange={() => {
                    setSoru8cevap("1");
                  }}
                />
                {anket.soru8cevap1}
              </p>
              <p>
                <input
                  type="radio"
                  className="me-2"
                  name="8"
                  onChange={() => {
                    setSoru8cevap("2");
                  }}
                />
                {anket.soru8cevap2}
              </p>
              {anket.soru8cevap3 ? (
                <p>
                  <input
                    type="radio"
                    className="me-2"
                    name="8"
                    onChange={() => {
                      setSoru8cevap("3");
                    }}
                  />
                  {anket.soru8cevap3}
                </p>
              ) : null}
              {anket.soru8cevap4 ? (
                <p>
                  <input
                    type="radio"
                    className="me-2"
                    name="8"
                    onChange={() => {
                      setSoru8cevap("4");
                    }}
                  />
                  {anket.soru8cevap4}
                </p>
              ) : null}
              {anket.soru8cevap5 ? (
                <p>
                  <input
                    type="radio"
                    className="me-2"
                    name="8"
                    onChange={() => {
                      soru8cevap("5");
                    }}
                  />
                  {anket.soru8cevap5}
                </p>
              ) : null}
            </div>
          ) : null}
          {anket.soru9 ? (
            <div className="soru9  border rounded p-3 mt-4">
              <h5 className="text-center mb-4">{anket.soru9}</h5>
              <p>
                <input
                  type="radio"
                  className="me-2"
                  name="9"
                  onChange={() => {
                    setSoru9cevap("1");
                  }}
                />
                {anket.soru9cevap1}
              </p>
              <p>
                <input
                  type="radio"
                  className="me-2"
                  name="9"
                  onChange={() => {
                    setSoru9cevap("2");
                  }}
                />
                {anket.soru9cevap2}
              </p>
              {anket.soru9cevap3 ? (
                <p>
                  <input
                    type="radio"
                    className="me-2"
                    name="9"
                    onChange={() => {
                      setSoru9cevap("3");
                    }}
                  />
                  {anket.soru9cevap3}
                </p>
              ) : null}
              {anket.soru9cevap4 ? (
                <p>
                  <input
                    type="radio"
                    className="me-2"
                    name="9"
                    onChange={() => {
                      setSoru9cevap("4");
                    }}
                  />
                  {anket.soru9cevap4}
                </p>
              ) : null}
              {anket.soru9cevap5 ? (
                <p>
                  <input
                    type="radio"
                    className="me-2"
                    name="9"
                    onChange={() => {
                      soru9cevap("5");
                    }}
                  />
                  {anket.soru9cevap5}
                </p>
              ) : null}
            </div>
          ) : null}
          {anket.soru10 ? (
            <div className="soru10  border rounded p-3 mt-4">
              <h5 className="text-center mb-4">{anket.soru10}</h5>
              <p>
                <input
                  type="radio"
                  className="me-2"
                  name="10"
                  onChange={() => {
                    setSoru10cevap("1");
                  }}
                />
                {anket.soru10cevap1}
              </p>
              <p>
                <input
                  type="radio"
                  className="me-2"
                  name="10"
                  onChange={() => {
                    setSoru10cevap("2");
                  }}
                />
                {anket.soru10cevap2}
              </p>
              {anket.soru10cevap3 ? (
                <p>
                  <input
                    type="radio"
                    className="me-2"
                    name="10"
                    onChange={() => {
                      setSoru10cevap("3");
                    }}
                  />
                  {anket.soru10cevap3}
                </p>
              ) : null}
              {anket.soru10cevap4 ? (
                <p>
                  <input
                    type="radio"
                    className="me-2"
                    name="10"
                    onChange={() => {
                      setSoru10cevap("4");
                    }}
                  />
                  {anket.soru10cevap4}
                </p>
              ) : null}
              {anket.soru10cevap5 ? (
                <p>
                  <input
                    type="radio"
                    className="me-2"
                    name="10"
                    onChange={() => {
                      soru10cevap("5");
                    }}
                  />
                  {anket.soru10cevap5}
                </p>
              ) : null}
            </div>
          ) : null}
          {anket.soru11 ? (
            <div className="soru11  border rounded p-3 mt-4">
              <h5 className="text-center mb-4">{anket.soru11}</h5>
              <p>
                <input
                  type="radio"
                  className="me-2"
                  name="11"
                  onChange={() => {
                    setSoru11cevap("1");
                  }}
                />
                {anket.soru11cevap1}
              </p>
              <p>
                <input
                  type="radio"
                  className="me-2"
                  name="11"
                  onChange={() => {
                    setSoru11cevap("2");
                  }}
                />
                {anket.soru11cevap2}
              </p>
              {anket.soru11cevap3 ? (
                <p>
                  <input
                    type="radio"
                    className="me-2"
                    name="11"
                    onChange={() => {
                      setSoru11cevap("3");
                    }}
                  />
                  {anket.soru11cevap3}
                </p>
              ) : null}
              {anket.soru11cevap4 ? (
                <p>
                  <input
                    type="radio"
                    className="me-2"
                    name="11"
                    onChange={() => {
                      setSoru11cevap("4");
                    }}
                  />
                  {anket.soru11cevap4}
                </p>
              ) : null}
              {anket.soru11cevap5 ? (
                <p>
                  <input
                    type="radio"
                    className="me-2"
                    name="11"
                    onChange={() => {
                      soru11cevap("5");
                    }}
                  />
                  {anket.soru11cevap5}
                </p>
              ) : null}
            </div>
          ) : null}
          {anket.soru12 ? (
            <div className="soru12  border rounded p-3 mt-4">
              <h5 className="text-center mb-4">{anket.soru12}</h5>
              <p>
                <input
                  type="radio"
                  className="me-2"
                  name="12"
                  onChange={() => {
                    setSoru12cevap("1");
                  }}
                />
                {anket.soru12cevap1}
              </p>
              <p>
                <input
                  type="radio"
                  className="me-2"
                  name="12"
                  onChange={() => {
                    setSoru12cevap("2");
                  }}
                />
                {anket.soru12cevap2}
              </p>
              {anket.soru12cevap3 ? (
                <p>
                  <input
                    type="radio"
                    className="me-2"
                    name="12"
                    onChange={() => {
                      setSoru12cevap("3");
                    }}
                  />
                  {anket.soru12cevap3}
                </p>
              ) : null}
              {anket.soru12cevap4 ? (
                <p>
                  <input
                    type="radio"
                    className="me-2"
                    name="12"
                    onChange={() => {
                      setSoru12cevap("4");
                    }}
                  />
                  {anket.soru12cevap4}
                </p>
              ) : null}
              {anket.soru12cevap5 ? (
                <p>
                  <input
                    type="radio"
                    className="me-2"
                    name="12"
                    onChange={() => {
                      soru12cevap("5");
                    }}
                  />
                  {anket.soru12cevap5}
                </p>
              ) : null}
            </div>
          ) : null}
          {anket.soru13 ? (
            <div className="soru13  border rounded p-3 mt-4">
              <h5 className="text-center mb-4">{anket.soru13}</h5>
              <p>
                <input
                  type="radio"
                  className="me-2"
                  name="13"
                  onChange={() => {
                    setSoru13cevap("1");
                  }}
                />
                {anket.soru13cevap1}
              </p>
              <p>
                <input
                  type="radio"
                  className="me-2"
                  name="13"
                  onChange={() => {
                    setSoru13cevap("2");
                  }}
                />
                {anket.soru13cevap2}
              </p>
              {anket.soru13cevap3 ? (
                <p>
                  <input
                    type="radio"
                    className="me-2"
                    name="13"
                    onChange={() => {
                      setSoru13cevap("3");
                    }}
                  />
                  {anket.soru13cevap3}
                </p>
              ) : null}
              {anket.soru13cevap4 ? (
                <p>
                  <input
                    type="radio"
                    className="me-2"
                    name="13"
                    onChange={() => {
                      setSoru13cevap("4");
                    }}
                  />
                  {anket.soru13cevap4}
                </p>
              ) : null}
              {anket.soru13cevap5 ? (
                <p>
                  <input
                    type="radio"
                    className="me-2"
                    name="13"
                    onChange={() => {
                      soru13cevap("5");
                    }}
                  />
                  {anket.soru13cevap5}
                </p>
              ) : null}
            </div>
          ) : null}
          {anket.soru14 ? (
            <div className="soru14  border rounded p-3 mt-4">
              <h5 className="text-center mb-4">{anket.soru14}</h5>
              <p>
                <input
                  type="radio"
                  className="me-2"
                  name="14"
                  onChange={() => {
                    setSoru14cevap("1");
                  }}
                />
                {anket.soru14cevap1}
              </p>
              <p>
                <input
                  type="radio"
                  className="me-2"
                  name="14"
                  onChange={() => {
                    setSoru14cevap("2");
                  }}
                />
                {anket.soru14cevap2}
              </p>
              {anket.soru14cevap3 ? (
                <p>
                  <input
                    type="radio"
                    className="me-2"
                    name="14"
                    onChange={() => {
                      setSoru14cevap("3");
                    }}
                  />
                  {anket.soru14cevap3}
                </p>
              ) : null}
              {anket.soru14cevap4 ? (
                <p>
                  <input
                    type="radio"
                    className="me-2"
                    name="14"
                    onChange={() => {
                      setSoru14cevap("4");
                    }}
                  />
                  {anket.soru14cevap4}
                </p>
              ) : null}
              {anket.soru14cevap5 ? (
                <p>
                  <input
                    type="radio"
                    className="me-2"
                    name="14"
                    onChange={() => {
                      soru14cevap("5");
                    }}
                  />
                  {anket.soru14cevap5}
                </p>
              ) : null}
            </div>
          ) : null}
          {anket.soru15 ? (
            <div className="soru15  border rounded p-3 mt-4">
              <h5 className="text-center mb-4">{anket.soru15}</h5>
              <p>
                <input
                  type="radio"
                  className="me-2"
                  name="15"
                  onChange={() => {
                    setSoru15cevap("1");
                  }}
                />
                {anket.soru15cevap1}
              </p>
              <p>
                <input
                  type="radio"
                  className="me-2"
                  name="15"
                  onChange={() => {
                    setSoru15cevap("2");
                  }}
                />
                {anket.soru15cevap2}
              </p>
              {anket.soru15cevap3 ? (
                <p>
                  <input
                    type="radio"
                    className="me-2"
                    name="15"
                    onChange={() => {
                      setSoru15cevap("3");
                    }}
                  />
                  {anket.soru15cevap3}
                </p>
              ) : null}
              {anket.soru15cevap4 ? (
                <p>
                  <input
                    type="radio"
                    className="me-2"
                    name="15"
                    onChange={() => {
                      setSoru15cevap("4");
                    }}
                  />
                  {anket.soru15cevap4}
                </p>
              ) : null}
              {anket.soru15cevap5 ? (
                <p>
                  <input
                    type="radio"
                    className="me-2"
                    name="15"
                    onChange={() => {
                      soru15cevap("5");
                    }}
                  />
                  {anket.soru15cevap5}
                </p>
              ) : null}
            </div>
          ) : null}
          {anket.soru16 ? (
            <div className="soru16  border rounded p-3 mt-4">
              <h5 className="text-center mb-4">{anket.soru16}</h5>
              <p>
                <input
                  type="radio"
                  className="me-2"
                  name="16"
                  onChange={() => {
                    setSoru16cevap("1");
                  }}
                />
                {anket.soru16cevap1}
              </p>
              <p>
                <input
                  type="radio"
                  className="me-2"
                  name="16"
                  onChange={() => {
                    setSoru16cevap("2");
                  }}
                />
                {anket.soru16cevap2}
              </p>
              {anket.soru16cevap3 ? (
                <p>
                  <input
                    type="radio"
                    className="me-2"
                    name="16"
                    onChange={() => {
                      setSoru16cevap("3");
                    }}
                  />
                  {anket.soru16cevap3}
                </p>
              ) : null}
              {anket.soru16cevap4 ? (
                <p>
                  <input
                    type="radio"
                    className="me-2"
                    name="16"
                    onChange={() => {
                      setSoru16cevap("4");
                    }}
                  />
                  {anket.soru16cevap4}
                </p>
              ) : null}
              {anket.soru16cevap5 ? (
                <p>
                  <input
                    type="radio"
                    className="me-2"
                    name="16"
                    onChange={() => {
                      soru16cevap("5");
                    }}
                  />
                  {anket.soru16cevap5}
                </p>
              ) : null}
            </div>
          ) : null}
          {anket.soru17 ? (
            <div className="soru17  border rounded p-3 mt-4">
              <h5 className="text-center mb-4">{anket.soru17}</h5>
              <p>
                <input
                  type="radio"
                  className="me-2"
                  name="17"
                  onChange={() => {
                    setSoru17cevap("1");
                  }}
                />
                {anket.soru17cevap1}
              </p>
              <p>
                <input
                  type="radio"
                  className="me-2"
                  name="17"
                  onChange={() => {
                    setSoru17cevap("2");
                  }}
                />
                {anket.soru17cevap2}
              </p>
              {anket.soru17cevap3 ? (
                <p>
                  <input
                    type="radio"
                    className="me-2"
                    name="17"
                    onChange={() => {
                      setSoru17cevap("3");
                    }}
                  />
                  {anket.soru17cevap3}
                </p>
              ) : null}
              {anket.soru17cevap4 ? (
                <p>
                  <input
                    type="radio"
                    className="me-2"
                    name="17"
                    onChange={() => {
                      setSoru17cevap("4");
                    }}
                  />
                  {anket.soru17cevap4}
                </p>
              ) : null}
              {anket.soru17cevap5 ? (
                <p>
                  <input
                    type="radio"
                    className="me-2"
                    name="17"
                    onChange={() => {
                      soru17cevap("5");
                    }}
                  />
                  {anket.soru17cevap5}
                </p>
              ) : null}
            </div>
          ) : null}
          {anket.soru18 ? (
            <div className="soru18  border rounded p-3 mt-4">
              <h5 className="text-center mb-4">{anket.soru18}</h5>
              <p>
                <input
                  type="radio"
                  className="me-2"
                  name="18"
                  onChange={() => {
                    setSoru18cevap("1");
                  }}
                />
                {anket.soru18cevap1}
              </p>
              <p>
                <input
                  type="radio"
                  className="me-2"
                  name="18"
                  onChange={() => {
                    setSoru18cevap("2");
                  }}
                />
                {anket.soru18cevap2}
              </p>
              {anket.soru18cevap3 ? (
                <p>
                  <input
                    type="radio"
                    className="me-2"
                    name="18"
                    onChange={() => {
                      setSoru18cevap("3");
                    }}
                  />
                  {anket.soru18cevap3}
                </p>
              ) : null}
              {anket.soru18cevap4 ? (
                <p>
                  <input
                    type="radio"
                    className="me-2"
                    name="18"
                    onChange={() => {
                      setSoru18cevap("4");
                    }}
                  />
                  {anket.soru18cevap4}
                </p>
              ) : null}
              {anket.soru18cevap5 ? (
                <p>
                  <input
                    type="radio"
                    className="me-2"
                    name="18"
                    onChange={() => {
                      soru18cevap("5");
                    }}
                  />
                  {anket.soru18cevap5}
                </p>
              ) : null}
            </div>
          ) : null}
          {anket.soru19 ? (
            <div className="soru19  border rounded p-3 mt-4">
              <h5 className="text-center mb-4">{anket.soru19}</h5>
              <p>
                <input
                  type="radio"
                  className="me-2"
                  name="19"
                  onChange={() => {
                    setSoru19cevap("1");
                  }}
                />
                {anket.soru19cevap1}
              </p>
              <p>
                <input
                  type="radio"
                  className="me-2"
                  name="19"
                  onChange={() => {
                    setSoru19cevap("2");
                  }}
                />
                {anket.soru19cevap2}
              </p>
              {anket.soru19cevap3 ? (
                <p>
                  <input
                    type="radio"
                    className="me-2"
                    name="19"
                    onChange={() => {
                      setSoru19cevap("3");
                    }}
                  />
                  {anket.soru19cevap3}
                </p>
              ) : null}
              {anket.soru19cevap4 ? (
                <p>
                  <input
                    type="radio"
                    className="me-2"
                    name="19"
                    onChange={() => {
                      setSoru19cevap("4");
                    }}
                  />
                  {anket.soru19cevap4}
                </p>
              ) : null}
              {anket.soru19cevap5 ? (
                <p>
                  <input
                    type="radio"
                    className="me-2"
                    name="19"
                    onChange={() => {
                      soru19cevap("5");
                    }}
                  />
                  {anket.soru19cevap5}
                </p>
              ) : null}
            </div>
          ) : null}
          {anket.soru20 ? (
            <div className="soru20  border rounded p-3 mt-4">
              <h5 className="text-center mb-4">{anket.soru20}</h5>
              <p>
                <input
                  type="radio"
                  className="me-2"
                  name="20"
                  onChange={() => {
                    setSoru20cevap("1");
                  }}
                />
                {anket.soru20cevap1}
              </p>
              <p>
                <input
                  type="radio"
                  className="me-2"
                  name="20"
                  onChange={() => {
                    setSoru20cevap("2");
                  }}
                />
                {anket.soru20cevap2}
              </p>
              {anket.soru20cevap3 ? (
                <p>
                  <input
                    type="radio"
                    className="me-2"
                    name="20"
                    onChange={() => {
                      setSoru20cevap("3");
                    }}
                  />
                  {anket.soru20cevap3}
                </p>
              ) : null}
              {anket.soru20cevap4 ? (
                <p>
                  <input
                    type="radio"
                    className="me-2"
                    name="20"
                    onChange={() => {
                      setSoru20cevap("4");
                    }}
                  />
                  {anket.soru20cevap4}
                </p>
              ) : null}
              {anket.soru20cevap5 ? (
                <p>
                  <input
                    type="radio"
                    className="me-2"
                    name="20"
                    onChange={() => {
                      soru20cevap("5");
                    }}
                  />
                  {anket.soru20cevap5}
                </p>
              ) : null}
            </div>
          ) : null}
        </div>
        <input
          type="submit"
          value="Cevapla"
          className="btn btn-outline-danger my-4 center"
          onClick={anketCevapla}
        />
      </div>
    );
  }
};

export default AnketDetay;
