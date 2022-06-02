import React from "react";
import "./AnketEkle.css";
import { AiFillPlusSquare } from "react-icons/ai/index.esm";
import { BsClipboardPlus } from "react-icons/bs/index.esm";

const AnketEkle = () => {
  const cevapEkle = (e) => {
    let div = e.target.parentNode.parentNode.querySelector(".cevaplar");
    if (div.childElementCount != 5) {
      if (div.childElementCount == 2) {
        div.innerHTML += `<div class="rounded ms-3 mt-4">
              <div class="d-flex">
                <input type="radio" class="mt-3" ="a" />
                <input
                  type="text"
                  placeholder="Üçüncü Şık"
                  class="form-control mt-1 ms-2"
                />
              </div>
            </div>`;
      } else if (div.childElementCount == 3) {
        div.innerHTML += `<div class="rounded ms-3 mt-4">
              <div class="d-flex">
                <input type="radio" class="mt-3" ="a" />
                <input
                  type="text"
                  placeholder="Dördüncü Şık"
                  class="form-control mt-1 ms-2"
                />
              </div>
            </div>`;
      } else if (div.childElementCount == 4) {
        div.innerHTML += `<div class="rounded ms-3 mt-4">
              <div class="d-flex">
                <input type="radio" class="mt-3" ="a" />
                <input
                  type="text"
                  placeholder="Beşinci Şık"
                  class="form-control mt-1 ms-2"
                />
              </div>
            </div>`;
      }
    }
  };
  const soruEkle = (e) => {
    let div = e.target.parentNode.parentNode.querySelector(".sorular");
    console.log(div);
    div.innerHTML += `<div class="soru">
          
         
          <input
            type="text"
            placeholder="Soru Başlığı"
            class="form-control mt-5"
          />

          <div class="cevaplar">
            <div class="rounded ms-3 mt-4">
              <div class="d-flex">
                <input type="radio" class="mt-3" ="a" />
                <input
                  type="text"
                  placeholder="Birinci Şık"
                  class="form-control mt-1 ms-2"
                />
              </div>
            </div>
            <div class="rounded ms-3 mt-4">
              <div class="d-flex">
                <input type="radio" class="mt-3" ="a" />
                <input
                  type="text"
                  placeholder="İkinci Şık"
                  class="form-control mt-1 ms-2"
                />
              </div>
            </div>
          </div>
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" 
          viewBox="0 0 1024 1024" class="icon mt-2 ms-3" height="30" width="30" xmlns="http://www.w3.org/2000/svg" 
          style="cursor: pointer;" onclick="cevapEkle(e)">
          <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM704 536c0 4.4-3.6 8-8 8H544v152c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V544H328c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h152V328c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v152h152c4.4 0 8 3.6 8 8v48z"></path>
          </svg>
        </div>`;
  };

  return (
    <div>
      <h4 className="text-center pt-4">Anket Ekle</h4>
      <div className="sorular col-10 col-md-8 col-lg-6 offset-1 offset-md-2 offset-lg-3 offset-2 mt-5">
        <div className="soru">
          <input
            type="text"
            placeholder="Anketin Başlığı"
            className="form-control"
          />
          <h4 className="mt-5">Sorular</h4>
          <input
            type="text"
            placeholder="Soru Başlığı"
            className="form-control"
          />

          <div className="cevaplar">
            <div className="rounded ms-3 mt-4">
              <div className="d-flex">
                <input type="radio" className="mt-3" name="a" />
                <input
                  type="text"
                  placeholder="Birinci Şık"
                  className="form-control mt-1 ms-2"
                />
              </div>
            </div>
            <div className="rounded ms-3 mt-4">
              <div className="d-flex">
                <input type="radio" className="mt-3" name="a" />
                <input
                  type="text"
                  placeholder="İkinci Şık"
                  className="form-control mt-1 ms-2"
                />
              </div>
            </div>
          </div>
          <AiFillPlusSquare
            size={30}
            onClick={cevapEkle}
            style={{ cursor: "pointer" }}
            className="icon mt-2 ms-3"
          />
        </div>
      </div>
      <div className="col-10 col-md-8 col-lg-6 offset-1 offset-md-2 offset-lg-3 offset-2">
        <BsClipboardPlus
          size={30}
          onClick={soruEkle}
          style={{ cursor: "pointer" }}
          className="icon mt-4"
        />
      </div>
    </div>
  );
};

export default AnketEkle;
