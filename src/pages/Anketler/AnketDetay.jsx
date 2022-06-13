import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const AnketDetay = () => {
  let param = useParams();
  const [anket, setAnket] = useState();
  const [loading, setLoading] = useState(true);
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
        {anket.soru1 ? (
          <div className="soru1 border rounded p-3 mt-5">
            <h5 className="text-center mb-4">{anket.soru1}</h5>
            <p>
              <input type="radio" className="me-2" name="1" />
              {anket.soru1cevap1}
            </p>
            <p>
              <input type="radio" className="me-2" name="1" />
              {anket.soru1cevap2}
            </p>
            {anket.soru1cevap3 ? (
              <p>
                <input type="radio" className="me-2" name="1" />
                {anket.soru1cevap3}
              </p>
            ) : null}
            {anket.soru1cevap4 ? (
              <p>
                <input type="radio" className="me-2" name="1" />
                {anket.soru1cevap4}
              </p>
            ) : null}
            {anket.soru1cevap5 ? (
              <p>
                <input type="radio" className="me-2" name="1" />
                {anket.soru1cevap5}
              </p>
            ) : null}
          </div>
        ) : null}
        {anket.soru2 ? (
          <div className="soru2 border rounded p-3 mt-4">
            <h5 className="text-center mb-4">{anket.soru2}</h5>
            <p>
              <input type="radio" className="me-2" name="2" />
              {anket.soru2cevap1}
            </p>
            <p>
              <input type="radio" className="me-2" name="2" />
              {anket.soru2cevap2}
            </p>
            {anket.soru2cevap3 ? (
              <p>
                <input type="radio" className="me-2" name="2" />
                {anket.soru2cevap3}
              </p>
            ) : null}
            {anket.soru2cevap4 ? (
              <p>
                <input type="radio" className="me-2" name="2" />
                {anket.soru2cevap4}
              </p>
            ) : null}
            {anket.soru2cevap5 ? (
              <p>
                <input type="radio" className="me-2" name="2" />
                {anket.soru2cevap5}
              </p>
            ) : null}
          </div>
        ) : null}
        {anket.soru3 ? (
          <div className="soru3 border rounded p-3 mt-4">
            <h5 className="text-center mb-4">{anket.soru3}</h5>
            <p>
              <input type="radio" className="me-2" name="3" />
              {anket.soru3cevap1}
            </p>
            {anket.soru3cevap3 ? (
              <p>
                <input type="radio" className="me-2" name="3" />
                {anket.soru3cevap3}
              </p>
            ) : null}
            {anket.soru3cevap4 ? (
              <p>
                <input type="radio" className="me-2" name="3" />
                {anket.soru3cevap4}
              </p>
            ) : null}
            {anket.soru3cevap5 ? (
              <p>
                <input type="radio" className="me-2" name="3" />
                {anket.soru3cevap5}
              </p>
            ) : null}
          </div>
        ) : null}
        {anket.soru4 ? (
          <div className="soru4 border rounded p-3 mt-4">
            <h5 className="text-center mb-4">{anket.soru4}</h5>
            <p>
              <input type="radio" className="me-2" name="4" />
              {anket.soru4cevap1}
            </p>
            {anket.soru2cevap3 ? (
              <p>
                <input type="radio" className="me-2" name="2" />
                {anket.soru2cevap3}
              </p>
            ) : null}
            {anket.soru2cevap4 ? (
              <p>
                <input type="radio" className="me-2" name="2" />
                {anket.soru2cevap4}
              </p>
            ) : null}
            {anket.soru2cevap5 ? (
              <p>
                <input type="radio" className="me-2" name="2" />
                {anket.soru2cevap5}
              </p>
            ) : null}
          </div>
        ) : null}
        {anket.soru5 ? (
          <div className="soru5 border rounded p-3 mt-4">
            <h5 className="text-center mb-4">{anket.soru5}</h5>
            <p>
              <input type="radio" className="me-2" name="5" />
              {anket.soru5cevap1}
            </p>
            <p>
              <input type="radio" className="me-2" name="5" />
              {anket.soru5cevap2}
            </p>
            {anket.soru5cevap3 ? (
              <p>
                <input type="radio" className="me-2" name="5" />
                {anket.soru5cevap3}
              </p>
            ) : null}
            {anket.soru5cevap4 ? (
              <p>
                <input type="radio" className="me-2" name="5" />
                {anket.soru5cevap4}
              </p>
            ) : null}
            {anket.soru5cevap5 ? (
              <p>
                <input type="radio" className="me-2" name="5" />
                {anket.soru5cevap5}
              </p>
            ) : null}
          </div>
        ) : null}
        {anket.soru6 ? (
          <div className="soru6 border rounded p-3 mt-4">
            <h5 className="text-center mb-4">{anket.soru6}</h5>
            <p>
              <input type="radio" className="me-2" name="6" />
              {anket.soru6cevap1}
            </p>
            <p>
              <input type="radio" className="me-2" name="6" />
              {anket.soru6cevap2}
            </p>
            {anket.soru6cevap3 ? (
              <p>
                <input type="radio" className="me-2" name="6" />
                {anket.soru6cevap3}
              </p>
            ) : null}
            {anket.soru6cevap4 ? (
              <p>
                <input type="radio" className="me-2" name="6" />
                {anket.soru6cevap4}
              </p>
            ) : null}
            {anket.soru6cevap5 ? (
              <p>
                <input type="radio" className="me-2" name="6" />
                {anket.soru6cevap5}
              </p>
            ) : null}
          </div>
        ) : null}
        {anket.soru7 ? (
          <div className="soru7 border rounded p-3 mt-4">
            <h5 className="text-center mb-4">{anket.soru7}</h5>
            <p>
              <input type="radio" className="me-2" name="7" />
              {anket.soru7cevap1}
            </p>
            <p>
              <input type="radio" className="me-2" name="7" />
              {anket.soru7cevap2}
            </p>
            {anket.soru7cevap3 ? (
              <p>
                <input type="radio" className="me-2" name="7" />
                {anket.soru7cevap3}
              </p>
            ) : null}
            {anket.soru7cevap4 ? (
              <p>
                <input type="radio" className="me-2" name="7" />
                {anket.soru7cevap4}
              </p>
            ) : null}
            {anket.soru7cevap5 ? (
              <p>
                <input type="radio" className="me-2" name="7" />
                {anket.soru7cevap5}
              </p>
            ) : null}
          </div>
        ) : null}
        {anket.soru8 ? (
          <div className="soru8 border rounded p-3 mt-4">
            <h5 className="text-center mb-4">{anket.soru8}</h5>
            <p>
              <input type="radio" className="me-2" name="8" />
              {anket.soru8cevap1}
            </p>
            <p>
              <input type="radio" className="me-2" name="8" />
              {anket.soru8cevap2}
            </p>
            {anket.soru8cevap3 ? (
              <p>
                <input type="radio" className="me-2" name="8" />
                {anket.soru8cevap3}
              </p>
            ) : null}
            {anket.soru8cevap4 ? (
              <p>
                <input type="radio" className="me-2" name="8" />
                {anket.soru8cevap4}
              </p>
            ) : null}
            {anket.soru8cevap5 ? (
              <p>
                <input type="radio" className="me-2" name="8" />
                {anket.soru8cevap5}
              </p>
            ) : null}
          </div>
        ) : null}
        {anket.soru9 ? (
          <div className="soru9 border rounded p-3 mt-4">
            <h5 className="text-center mb-4">{anket.soru9}</h5>
            <p>
              <input type="radio" className="me-2" name="9" />
              {anket.soru9cevap1}
            </p>
            <p>
              <input type="radio" className="me-2" name="9" />
              {anket.soru9cevap2}
            </p>
            {anket.soru9cevap3 ? (
              <p>
                <input type="radio" className="me-2" name="9" />
                {anket.soru9cevap3}
              </p>
            ) : null}
            {anket.soru9cevap4 ? (
              <p>
                <input type="radio" className="me-2" name="9" />
                {anket.soru9cevap4}
              </p>
            ) : null}
            {anket.soru9cevap5 ? (
              <p>
                <input type="radio" className="me-2" name="9" />
                {anket.soru9cevap5}
              </p>
            ) : null}
          </div>
        ) : null}
        {anket.soru10 ? (
          <div className="soru10 border rounded p-3 mt-4">
            <h5 className="text-center mb-4">{anket.soru10}</h5>
            <p>
              <input type="radio" className="me-2" name="10" />
              {anket.soru10cevap1}
            </p>
            <p>
              <input type="radio" className="me-2" name="10" />
              {anket.soru10cevap2}
            </p>
            {anket.soru10cevap3 ? (
              <p>
                <input type="radio" className="me-2" name="10" />
                {anket.soru10cevap3}
              </p>
            ) : null}
            {anket.soru10cevap4 ? (
              <p>
                <input type="radio" className="me-2" name="10" />
                {anket.soru10cevap4}
              </p>
            ) : null}
            {anket.soru10cevap5 ? (
              <p>
                <input type="radio" className="me-2" name="10" />
                {anket.soru10cevap5}
              </p>
            ) : null}
          </div>
        ) : null}
        {anket.soru11 ? (
          <div className="soru11 border rounded p-3 mt-4">
            <h5 className="text-center mb-4">{anket.soru11}</h5>
            <p>
              <input type="radio" className="me-2" name="11" />
              {anket.soru11cevap1}
            </p>
            <p>
              <input type="radio" className="me-2" name="11" />
              {anket.soru11cevap2}
            </p>
            {anket.soru11cevap3 ? (
              <p>
                <input type="radio" className="me-2" name="11" />
                {anket.soru11cevap3}
              </p>
            ) : null}
            {anket.soru11cevap4 ? (
              <p>
                <input type="radio" className="me-2" name="11" />
                {anket.soru11cevap4}
              </p>
            ) : null}
            {anket.soru11cevap5 ? (
              <p>
                <input type="radio" className="me-2" name="11" />
                {anket.soru11cevap5}
              </p>
            ) : null}
          </div>
        ) : null}
        {anket.soru12 ? (
          <div className="soru12 border rounded p-3 mt-4">
            <h5 className="text-center mb-4">{anket.soru12}</h5>
            <p>
              <input type="radio" className="me-2" name="12" />
              {anket.soru12cevap1}
            </p>
            <p>
              <input type="radio" className="me-2" name="12" />
              {anket.soru12cevap2}
            </p>
            {anket.soru12cevap3 ? (
              <p>
                <input type="radio" className="me-2" name="12" />
                {anket.soru12cevap3}
              </p>
            ) : null}
            {anket.soru12cevap4 ? (
              <p>
                <input type="radio" className="me-2" name="12" />
                {anket.soru12cevap4}
              </p>
            ) : null}
            {anket.soru12cevap5 ? (
              <p>
                <input type="radio" className="me-2" name="12" />
                {anket.soru12cevap5}
              </p>
            ) : null}
          </div>
        ) : null}
        {anket.soru13 ? (
          <div className="soru13 border rounded p-3 mt-4">
            <h5 className="text-center mb-4">{anket.soru13}</h5>
            <p>
              <input type="radio" className="me-2" name="13" />
              {anket.soru13cevap1}
            </p>
            <p>
              <input type="radio" className="me-2" name="13" />
              {anket.soru13cevap2}
            </p>
            {anket.soru13cevap3 ? (
              <p>
                <input type="radio" className="me-2" name="13" />
                {anket.soru13cevap3}
              </p>
            ) : null}
            {anket.soru13cevap4 ? (
              <p>
                <input type="radio" className="me-2" name="13" />
                {anket.soru13cevap4}
              </p>
            ) : null}
            {anket.soru13cevap5 ? (
              <p>
                <input type="radio" className="me-2" name="13" />
                {anket.soru13cevap5}
              </p>
            ) : null}
          </div>
        ) : null}
        {anket.soru14 ? (
          <div className="soru14 border rounded p-3 mt-4">
            <h5 className="text-center mb-4">{anket.soru14}</h5>
            <p>
              <input type="radio" className="me-2" name="14" />
              {anket.soru14cevap1}
            </p>
            <p>
              <input type="radio" className="me-2" name="14" />
              {anket.soru14cevap2}
            </p>
            {anket.soru14cevap3 ? (
              <p>
                <input type="radio" className="me-2" name="14" />
                {anket.soru14cevap3}
              </p>
            ) : null}
            {anket.soru14cevap4 ? (
              <p>
                <input type="radio" className="me-2" name="14" />
                {anket.soru14cevap4}
              </p>
            ) : null}
            {anket.soru14cevap5 ? (
              <p>
                <input type="radio" className="me-2" name="14" />
                {anket.soru14cevap5}
              </p>
            ) : null}
          </div>
        ) : null}
        {anket.soru15 ? (
          <div className="soru15 border rounded p-3 mt-4">
            <h5 className="text-center mb-4">{anket.soru15}</h5>
            <p>
              <input type="radio" className="me-2" name="15" />
              {anket.soru15cevap1}
            </p>
            <p>
              <input type="radio" className="me-2" name="15" />
              {anket.soru15cevap2}
            </p>
            {anket.soru15cevap3 ? (
              <p>
                <input type="radio" className="me-2" name="15" />
                {anket.soru15cevap3}
              </p>
            ) : null}
            {anket.soru15cevap4 ? (
              <p>
                <input type="radio" className="me-2" name="15" />
                {anket.soru15cevap4}
              </p>
            ) : null}
            {anket.soru15cevap5 ? (
              <p>
                <input type="radio" className="me-2" name="15" />
                {anket.soru15cevap5}
              </p>
            ) : null}
          </div>
        ) : null}
        {anket.soru16 ? (
          <div className="soru16 border rounded p-3 mt-4">
            <h5 className="text-center mb-4">{anket.soru16}</h5>
            <p>
              <input type="radio" className="me-2" name="16" />
              {anket.soru16cevap1}
            </p>
            <p>
              <input type="radio" className="me-2" name="16" />
              {anket.soru16cevap2}
            </p>
            {anket.soru16cevap3 ? (
              <p>
                <input type="radio" className="me-2" name="16" />
                {anket.soru16cevap3}
              </p>
            ) : null}
            {anket.soru16cevap4 ? (
              <p>
                <input type="radio" className="me-2" name="16" />
                {anket.soru16cevap4}
              </p>
            ) : null}
            {anket.soru16cevap5 ? (
              <p>
                <input type="radio" className="me-2" name="16" />
                {anket.soru16cevap5}
              </p>
            ) : null}
          </div>
        ) : null}
        {anket.soru17 ? (
          <div className="soru17 border rounded p-3 mt-4">
            <h5 className="text-center mb-4">{anket.soru17}</h5>
            <p>
              <input type="radio" className="me-2" name="17" />
              {anket.soru17cevap1}
            </p>
            <p>
              <input type="radio" className="me-2" name="17" />
              {anket.soru17cevap2}
            </p>
            {anket.soru17cevap3 ? (
              <p>
                <input type="radio" className="me-2" name="17" />
                {anket.soru17cevap3}
              </p>
            ) : null}
            {anket.soru17cevap4 ? (
              <p>
                <input type="radio" className="me-2" name="17" />
                {anket.soru17cevap4}
              </p>
            ) : null}
            {anket.soru17cevap5 ? (
              <p>
                <input type="radio" className="me-2" name="17" />
                {anket.soru17cevap5}
              </p>
            ) : null}
          </div>
        ) : null}
        {anket.soru18 ? (
          <div className="soru18 border rounded p-3 mt-4">
            <h5 className="text-center mb-4">{anket.soru18}</h5>
            <p>
              <input type="radio" className="me-2" name="18" />
              {anket.soru18cevap1}
            </p>
            <p>
              <input type="radio" className="me-2" name="18" />
              {anket.soru18cevap2}
            </p>
            {anket.soru18cevap3 ? (
              <p>
                <input type="radio" className="me-2" name="18" />
                {anket.soru18cevap3}
              </p>
            ) : null}
            {anket.soru18cevap4 ? (
              <p>
                <input type="radio" className="me-2" name="18" />
                {anket.soru18cevap4}
              </p>
            ) : null}
            {anket.soru18cevap5 ? (
              <p>
                <input type="radio" className="me-2" name="18" />
                {anket.soru18cevap5}
              </p>
            ) : null}
          </div>
        ) : null}
        {anket.soru19 ? (
          <div className="soru19 border rounded p-3 mt-4">
            <h5 className="text-center mb-4">{anket.soru19}</h5>
            <p>
              <input type="radio" className="me-2" name="19" />
              {anket.soru19cevap1}
            </p>
            <p>
              <input type="radio" className="me-2" name="19" />
              {anket.soru19cevap2}
            </p>
            {anket.soru19cevap3 ? (
              <p>
                <input type="radio" className="me-2" name="19" />
                {anket.soru19cevap3}
              </p>
            ) : null}
            {anket.soru19cevap4 ? (
              <p>
                <input type="radio" className="me-2" name="19" />
                {anket.soru19cevap4}
              </p>
            ) : null}
            {anket.soru19cevap5 ? (
              <p>
                <input type="radio" className="me-2" name="19" />
                {anket.soru19cevap5}
              </p>
            ) : null}
          </div>
        ) : null}
        {anket.soru20 ? (
          <div className="soru20 border rounded p-3 mt-4">
            <h5 className="text-center mb-4">{anket.soru20}</h5>
            <p>
              <input type="radio" className="me-2" name="20" />
              {anket.soru20cevap1}
            </p>
            <p>
              <input type="radio" className="me-2" name="20" />
              {anket.soru20cevap2}
            </p>
            {anket.soru20cevap3 ? (
              <p>
                <input type="radio" className="me-2" name="20" />
                {anket.soru20cevap3}
              </p>
            ) : null}
            {anket.soru20cevap4 ? (
              <p>
                <input type="radio" className="me-2" name="20" />
                {anket.soru20cevap4}
              </p>
            ) : null}
            {anket.soru20cevap5 ? (
              <p>
                <input type="radio" className="me-2" name="20" />
                {anket.soru20cevap5}
              </p>
            ) : null}
          </div>
        ) : null}
      </div>
    );
  }
};

export default AnketDetay;
