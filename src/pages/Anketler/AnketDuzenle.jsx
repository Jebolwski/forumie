import React, { useState, useEffect } from "react";

const AnketDuzenle = () => {
  let param = useParams();
  const [baslik, setBaslik] = useState();
  const [soru1, setSoru1] = useState();
  const [soru2, setSoru2] = useState();
  const [soru3, setSoru3] = useState();
  const [soru4, setSoru4] = useState();
  const [soru5, setSoru5] = useState();
  const [soru6, setSoru6] = useState();
  const [soru7, setSoru7] = useState();
  const [soru8, setSoru8] = useState();
  const [soru9, setSoru9] = useState();
  const [soru10, setSoru10] = useState();
  const [soru11, setSoru11] = useState();
  const [soru12, setSoru12] = useState();
  const [soru13, setSoru13] = useState();
  const [soru14, setSoru14] = useState();
  const [soru15, setSoru15] = useState();
  const [soru16, setSoru16] = useState();
  const [soru17, setSoru17] = useState();
  const [soru18, setSoru18] = useState();
  const [soru19, setSoru19] = useState();
  const [soru20, setSoru20] = useState();
  const [soru1cevap1, setSoru1cevap1] = useState();
  const [soru1cevap2, setSoru1cevap2] = useState();
  const [soru1cevap3, setSoru1cevap3] = useState();
  const [soru1cevap4, setSoru1cevap4] = useState();
  const [soru1cevap5, setSoru1cevap5] = useState();
  const [soru2cevap1, setSoru2cevap1] = useState();
  const [soru2cevap2, setSoru2cevap2] = useState();
  const [soru2cevap3, setSoru2cevap3] = useState();
  const [soru2cevap4, setSoru2cevap4] = useState();
  const [soru2cevap5, setSoru2cevap5] = useState();
  const [soru3cevap1, setSoru3cevap1] = useState();
  const [soru3cevap2, setSoru3cevap2] = useState();
  const [soru3cevap3, setSoru3cevap3] = useState();
  const [soru3cevap4, setSoru3cevap4] = useState();
  const [soru3cevap5, setSoru3cevap5] = useState();
  const [soru4cevap1, setSoru4cevap1] = useState();
  const [soru4cevap2, setSoru4cevap2] = useState();
  const [soru4cevap3, setSoru4cevap3] = useState();
  const [soru4cevap4, setSoru4cevap4] = useState();
  const [soru4cevap5, setSoru4cevap5] = useState();

  const [soru5cevap1, setSoru5cevap1] = useState();
  const [soru5cevap2, setSoru5cevap2] = useState();
  const [soru5cevap3, setSoru5cevap3] = useState();
  const [soru5cevap4, setSoru5cevap4] = useState();
  const [soru5cevap5, setSoru5cevap5] = useState();
  const [soru6cevap1, setSoru6cevap1] = useState();
  const [soru6cevap2, setSoru6cevap2] = useState();
  const [soru6cevap3, setSoru6cevap3] = useState();
  const [soru6cevap4, setSoru6cevap4] = useState();
  const [soru6cevap5, setSoru6cevap5] = useState();
  const [soru7cevap1, setSoru7cevap1] = useState();
  const [soru7cevap2, setSoru7cevap2] = useState();
  const [soru7cevap3, setSoru7cevap3] = useState();
  const [soru7cevap4, setSoru7cevap4] = useState();
  const [soru7cevap5, setSoru7cevap5] = useState();
  const [soru8cevap1, setSoru8cevap1] = useState();
  const [soru8cevap2, setSoru8cevap2] = useState();
  const [soru8cevap3, setSoru8cevap3] = useState();
  const [soru8cevap4, setSoru8cevap4] = useState();
  const [soru8cevap5, setSoru8cevap5] = useState();

  const [soru9cevap1, setSoru9cevap1] = useState();
  const [soru9cevap2, setSoru9cevap2] = useState();
  const [soru9cevap3, setSoru9cevap3] = useState();
  const [soru9cevap4, setSoru9cevap4] = useState();
  const [soru9cevap5, setSoru9cevap5] = useState();

  const [soru10cevap1, setSoru10cevap1] = useState();
  const [soru10cevap2, setSoru10cevap2] = useState();
  const [soru10cevap3, setSoru10cevap3] = useState();
  const [soru10cevap4, setSoru10cevap4] = useState();
  const [soru10cevap5, setSoru10cevap5] = useState();

  const [soru11cevap1, setSoru11cevap1] = useState();
  const [soru11cevap2, setSoru11cevap2] = useState();
  const [soru11cevap3, setSoru11cevap3] = useState();
  const [soru11cevap4, setSoru11cevap4] = useState();
  const [soru11cevap5, setSoru11cevap5] = useState();

  const [soru12cevap1, setSoru12cevap1] = useState();
  const [soru12cevap2, setSoru12cevap2] = useState();
  const [soru12cevap3, setSoru12cevap3] = useState();
  const [soru12cevap4, setSoru12cevap4] = useState();
  const [soru12cevap5, setSoru12cevap5] = useState();

  const [soru13cevap1, setSoru13cevap1] = useState();
  const [soru13cevap2, setSoru13cevap2] = useState();
  const [soru13cevap3, setSoru13cevap3] = useState();
  const [soru13cevap4, setSoru13cevap4] = useState();
  const [soru13cevap5, setSoru13cevap5] = useState();

  const [soru14cevap1, setSoru14cevap1] = useState();
  const [soru14cevap2, setSoru14cevap2] = useState();
  const [soru14cevap3, setSoru14cevap3] = useState();
  const [soru14cevap4, setSoru14cevap4] = useState();
  const [soru14cevap5, setSoru14cevap5] = useState();

  const [soru15cevap1, setSoru15cevap1] = useState();
  const [soru15cevap2, setSoru15cevap2] = useState();
  const [soru15cevap3, setSoru15cevap3] = useState();
  const [soru15cevap4, setSoru15cevap4] = useState();
  const [soru15cevap5, setSoru15cevap5] = useState();

  const [soru16cevap1, setSoru16cevap1] = useState();
  const [soru16cevap2, setSoru16cevap2] = useState();
  const [soru16cevap3, setSoru16cevap3] = useState();
  const [soru16cevap4, setSoru16cevap4] = useState();
  const [soru16cevap5, setSoru16cevap5] = useState();

  const [soru17cevap1, setSoru17cevap1] = useState();
  const [soru17cevap2, setSoru17cevap2] = useState();
  const [soru17cevap3, setSoru17cevap3] = useState();
  const [soru17cevap4, setSoru17cevap4] = useState();
  const [soru17cevap5, setSoru17cevap5] = useState();

  const [soru18cevap1, setSoru18cevap1] = useState();
  const [soru18cevap2, setSoru18cevap2] = useState();
  const [soru18cevap3, setSoru18cevap3] = useState();
  const [soru18cevap4, setSoru18cevap4] = useState();
  const [soru18cevap5, setSoru18cevap5] = useState();

  const [soru19cevap1, setSoru19cevap1] = useState();
  const [soru19cevap2, setSoru19cevap2] = useState();
  const [soru19cevap3, setSoru19cevap3] = useState();
  const [soru19cevap4, setSoru19cevap4] = useState();
  const [soru19cevap5, setSoru19cevap5] = useState();

  const [soru20cevap1, setSoru20cevap1] = useState();
  const [soru20cevap2, setSoru20cevap2] = useState();
  const [soru20cevap3, setSoru20cevap3] = useState();
  const [soru20cevap4, setSoru20cevap4] = useState();
  const [soru20cevap5, setSoru20cevap5] = useState();
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
  return (
    <div>
      <p>Anketi Düzenle</p>
      <div>
        {anket.soru1 ? (
          <div className="soru1 div-soru border rounded p-3 mt-5">
            <h5 className="text-center mb-4">{anket.soru1}</h5>
            <p>
              <input
                type="radio"
                className="me-2 s11"
                name="1"
                onChange={(e) => {
                  setSoru1cevap1(e.target.value);
                }}
              />
              {anket.soru1cevap1}
            </p>
            <p>
              <input
                type="radio"
                className="me-2 s12"
                name="1"
                onChange={(e) => {
                  setSoru1cevap2(e.target.value);
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
                  onChange={(e) => {
                    setSoru1cevap3(e.target.value);
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
                  onChange={(e) => {
                    setSoru1cevap4(e.target.value);
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
                  onChange={(e) => {
                    setSoru1cevap5(e.target.value);
                  }}
                />
                {anket.soru1cevap5}
              </p>
            ) : null}
          </div>
        ) : null}
        {anket.soru2 ? (
          <div className="soru2 div-soru border rounded p-3 mt-4">
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
          <div className="soru3 div-soru border rounded p-3 mt-4">
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
          <div className="soru4 div-soru border rounded p-3 mt-4">
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
          <div className="soru5 div-soru border rounded p-3 mt-4">
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
          <div className="soru6 div-soru border rounded p-3 mt-4">
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
          <div className="soru7 div-soru border rounded p-3 mt-4">
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
          <div className="soru8 div-soru border rounded p-3 mt-4">
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
          <div className="soru9 div-soru border rounded p-3 mt-4">
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
          <div className="soru10 div-soru border rounded p-3 mt-4">
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
          <div className="soru11 div-soru border rounded p-3 mt-4">
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
          <div className="soru12 div-soru border rounded p-3 mt-4">
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
          <div className="soru13 div-soru border rounded p-3 mt-4">
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
          <div className="soru14 div-soru border rounded p-3 mt-4">
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
          <div className="soru15 div-soru border rounded p-3 mt-4">
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
          <div className="soru16 div-soru border rounded p-3 mt-4">
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
          <div className="soru17 div-soru border rounded p-3 mt-4">
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
          <div className="soru18 div-soru border rounded p-3 mt-4">
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
          <div className="soru19 div-soru border rounded p-3 mt-4">
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
          <div className="soru20 div-soru border rounded p-3 mt-4">
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
    </div>
  );
};

export default AnketDuzenle;
