import React, { useEffect, useState } from "react";
import "./AnketEkle.css";
import { AiFillPlusSquare } from "react-icons/ai/index.esm";
import { BsClipboardPlus } from "react-icons/bs/index.esm";
const AnketEkle = () => {
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

  const ekle = async () => {
    let response = await fetch("http://127.0.0.1:8000/api/anket-ekle/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        baslik: baslik,
        soru1: soru1,
        soru2: soru2,
        soru3: soru3,
        soru4: soru4,
        soru5: soru5,
        soru6: soru6,
        soru7: soru7,
        soru8: soru8,
        soru9: soru9,
        soru10: soru10,
        soru11: soru11,
        soru12: soru12,
        soru13: soru13,
        soru14: soru14,
        soru15: soru15,
        soru16: soru16,
        soru17: soru17,
        soru18: soru18,
        soru19: soru19,
        soru20: soru20,
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
    });
  };

  const [count, setCount] = useState(2);

  const cevapEkle = (e) => {
    let div = e.target.parentNode.parentNode.querySelector(".cevaplar");
    let div_sayi = div.parentNode.classList[0];
    if (div.childElementCount != 5) {
      if (div.childElementCount == 2) {
        div.insertAdjacentHTML(
          "beforeend",
          `
            <div class="rounded ms-4 mt-4">
              <div class="d-flex">
                
                <input
                  type="text"
                  placeholder="Üçüncü Şık"
                  class="!3${div_sayi} form-control mt-1 ms-2"
                  max_length="100"
                />
              </div>
            </div>`
        );
      } else if (div.childElementCount == 3) {
        div.insertAdjacentHTML(
          "beforeend",
          `<div class="rounded ms-4 mt-4">
              <div class="d-flex">
                
                <input
                  type="text"
                  placeholder="Dördüncü Şık"
                  class="!4${div_sayi} form-control mt-1 ms-2"
                  max_length="100"
                />
              </div>
            </div>`
        );
      } else if (div.childElementCount == 4) {
        div.insertAdjacentHTML(
          "beforeend",
          `<div class="rounded ms-4 mt-4">
              <div class="d-flex">
                
                <input
                  type="text"
                  placeholder="Beşinci Şık"
                  class="!5${div_sayi} form-control mt-1 ms-2"
                  max_length="100"
                />
              </div>
            </div>`
        );
      }
    }

    if (document.getElementsByClassName(`!3${count}`).length > 0) {
      let input_yeri = document.getElementsByClassName(`!3${count}`)[0];
      if (count == 1) {
        input_yeri.addEventListener("change", (e) => {
          setSoru1cevap3(e.target.value);
        });
      } else if (count == 2) {
        input_yeri.addEventListener("change", (e) => {
          setSoru2cevap3(e.target.value);
        });
      } else if (count == 3) {
        input_yeri.addEventListener("change", (e) => {
          setSoru3cevap3(e.target.value);
        });
      } else if (count == 4) {
        input_yeri.addEventListener("change", (e) => {
          setSoru4cevap3(e.target.value);
        });
      } else if (count == 5) {
        input_yeri.addEventListener("change", (e) => {
          setSoru5cevap3(e.target.value);
        });
      } else if (count == 6) {
        input_yeri.addEventListener("change", (e) => {
          setSoru6cevap3(e.target.value);
        });
      } else if (count == 7) {
        input_yeri.addEventListener("change", (e) => {
          setSoru7cevap3(e.target.value);
        });
      } else if (count == 8) {
        input_yeri.addEventListener("change", (e) => {
          setSoru8cevap3(e.target.value);
        });
      } else if (count == 9) {
        input_yeri.addEventListener("change", (e) => {
          setSoru9cevap3(e.target.value);
        });
      } else if (count == 10) {
        input_yeri.addEventListener("change", (e) => {
          setSoru10cevap3(e.target.value);
        });
      } else if (count == 11) {
        input_yeri.addEventListener("change", (e) => {
          setSoru11cevap3(e.target.value);
        });
      } else if (count == 12) {
        input_yeri.addEventListener("change", (e) => {
          setSoru12cevap3(e.target.value);
        });
      } else if (count == 13) {
        input_yeri.addEventListener("change", (e) => {
          setSoru13cevap3(e.target.value);
        });
      } else if (count == 14) {
        input_yeri.addEventListener("change", (e) => {
          setSoru14cevap3(e.target.value);
        });
      } else if (count == 15) {
        input_yeri.addEventListener("change", (e) => {
          setSoru15cevap3(e.target.value);
        });
      } else if (count == 16) {
        input_yeri.addEventListener("change", (e) => {
          setSoru16cevap3(e.target.value);
        });
      } else if (count == 17) {
        input_yeri.addEventListener("change", (e) => {
          setSoru17cevap3(e.target.value);
        });
      } else if (count == 18) {
        input_yeri.addEventListener("change", (e) => {
          setSoru18cevap3(e.target.value);
        });
      } else if (count == 19) {
        input_yeri.addEventListener("change", (e) => {
          setSoru19cevap3(e.target.value);
        });
      } else if (count == 20) {
        input_yeri.addEventListener("change", (e) => {
          setSoru20cevap3(e.target.value);
        });
      }
    }

    if (document.getElementsByClassName(`!4${count}`).length > 0) {
      let input_yeri4 = document.getElementsByClassName(`!4${count}`)[0];
      if (count == 1) {
        input_yeri4.addEventListener("change", (e) => {
          setSoru1cevap4(e.target.value);
        });
      } else if (count == 2) {
        input_yeri4.addEventListener("change", (e) => {
          setSoru2cevap4(e.target.value);
        });
      } else if (count == 3) {
        input_yeri4.addEventListener("change", (e) => {
          setSoru3cevap4(e.target.value);
        });
      } else if (count == 4) {
        input_yeri4.addEventListener("change", (e) => {
          setSoru4cevap4(e.target.value);
        });
      } else if (count == 5) {
        input_yeri4.addEventListener("change", (e) => {
          setSoru5cevap4(e.target.value);
        });
      } else if (count == 6) {
        input_yeri4.addEventListener("change", (e) => {
          setSoru6cevap4(e.target.value);
        });
      } else if (count == 7) {
        input_yeri4.addEventListener("change", (e) => {
          setSoru7cevap4(e.target.value);
        });
      } else if (count == 8) {
        input_yeri4.addEventListener("change", (e) => {
          setSoru8cevap4(e.target.value);
        });
      } else if (count == 9) {
        input_yeri4.addEventListener("change", (e) => {
          setSoru9cevap4(e.target.value);
        });
      } else if (count == 10) {
        input_yeri4.addEventListener("change", (e) => {
          setSoru10cevap4(e.target.value);
        });
      } else if (count == 11) {
        input_yeri4.addEventListener("change", (e) => {
          setSoru11cevap4(e.target.value);
        });
      } else if (count == 12) {
        input_yeri4.addEventListener("change", (e) => {
          setSoru12cevap4(e.target.value);
        });
      } else if (count == 13) {
        input_yeri4.addEventListener("change", (e) => {
          setSoru13cevap4(e.target.value);
        });
      } else if (count == 14) {
        input_yeri4.addEventListener("change", (e) => {
          setSoru14cevap4(e.target.value);
        });
      } else if (count == 15) {
        input_yeri4.addEventListener("change", (e) => {
          setSoru15cevap4(e.target.value);
        });
      } else if (count == 16) {
        input_yeri4.addEventListener("change", (e) => {
          setSoru16cevap4(e.target.value);
        });
      } else if (count == 17) {
        input_yeri4.addEventListener("change", (e) => {
          setSoru17cevap4(e.target.value);
        });
      } else if (count == 18) {
        input_yeri4.addEventListener("change", (e) => {
          setSoru18cevap4(e.target.value);
        });
      } else if (count == 19) {
        input_yeri4.addEventListener("change", (e) => {
          setSoru19cevap4(e.target.value);
        });
      } else if (count == 20) {
        input_yeri4.addEventListener("change", (e) => {
          setSoru20cevap4(e.target.value);
        });
      }
    }

    if (document.getElementsByClassName(`!5${count}`).length > 0) {
      let input_yeri5 = document.getElementsByClassName(`!5${count}`)[0];
      if (count == 1) {
        input_yeri5.addEventListener("change", (e) => {
          setSoru1cevap5(e.target.value);
        });
      } else if (count == 2) {
        input_yeri5.addEventListener("change", (e) => {
          setSoru2cevap5(e.target.value);
        });
      } else if (count == 3) {
        input_yeri5.addEventListener("change", (e) => {
          setSoru3cevap5(e.target.value);
        });
      } else if (count == 4) {
        input_yeri5.addEventListener("change", (e) => {
          setSoru4cevap5(e.target.value);
        });
      } else if (count == 5) {
        input_yeri5.addEventListener("change", (e) => {
          setSoru5cevap5(e.target.value);
        });
      } else if (count == 6) {
        input_yeri5.addEventListener("change", (e) => {
          setSoru6cevap5(e.target.value);
        });
      } else if (count == 7) {
        input_yeri5.addEventListener("change", (e) => {
          setSoru7cevap5(e.target.value);
        });
      } else if (count == 8) {
        input_yeri5.addEventListener("change", (e) => {
          setSoru8cevap5(e.target.value);
        });
      } else if (count == 9) {
        input_yeri5.addEventListener("change", (e) => {
          setSoru9cevap5(e.target.value);
        });
      } else if (count == 10) {
        input_yeri5.addEventListener("change", (e) => {
          setSoru10cevap5(e.target.value);
        });
      } else if (count == 11) {
        input_yeri5.addEventListener("change", (e) => {
          setSoru11cevap5(e.target.value);
        });
      } else if (count == 12) {
        input_yeri5.addEventListener("change", (e) => {
          setSoru12cevap5(e.target.value);
        });
      } else if (count == 13) {
        input_yeri5.addEventListener("change", (e) => {
          setSoru13cevap5(e.target.value);
        });
      } else if (count == 14) {
        input_yeri5.addEventListener("change", (e) => {
          setSoru14cevap5(e.target.value);
        });
      } else if (count == 15) {
        input_yeri5.addEventListener("change", (e) => {
          setSoru15cevap5(e.target.value);
        });
      } else if (count == 16) {
        input_yeri5.addEventListener("change", (e) => {
          setSoru16cevap5(e.target.value);
        });
      } else if (count == 17) {
        input_yeri5.addEventListener("change", (e) => {
          setSoru17cevap5(e.target.value);
        });
      } else if (count == 18) {
        input_yeri5.addEventListener("change", (e) => {
          setSoru18cevap5(e.target.value);
        });
      } else if (count == 19) {
        input_yeri5.addEventListener("change", (e) => {
          setSoru19cevap5(e.target.value);
        });
      } else if (count == 20) {
        input_yeri5.addEventListener("change", (e) => {
          setSoru20cevap5(e.target.value);
        });
      }
    }
  };

  const soruEkle = (e) => {
    let soru = document.getElementsByClassName("soru").length;
    setCount(count + 1);
    if (soru < 21) {
      let div = e.target.parentNode.parentNode.querySelector(".sorular");
      div.insertAdjacentHTML(
        "beforeend",
        `<div class="${count} soru border bg-light p-3 mt-4">
          ${count}
          <input
            type="text"
            placeholder="Soru Başlığı"
            class="!${count}baslik form-control mt-1"
            max_length="200"
          />
          <div class="cevaplar ${count}">
            <div class="rounded ms-4 mt-4">
              <div class="d-flex">
                
                <input
                  type="text"
                  placeholder="Birinci Şık"
                  class="!1${count} form-control mt-1 ms-2"
                  max_length="100"
                />
              </div>
            </div>
            <div class="rounded ms-4 mt-4">
              <div class="d-flex">
                
                <input
                  type="text"
                  placeholder="İkinci Şık"
                  class="!2${count} form-control mt-1 ms-2"
                  max_length="100"
                />
              </div>
            </div>
          </div>
          <svg stroke="currentColor" class="icon${count} icona mt-2 ms-4" id="icon" fill="currentColor" stroke-width="0" 
          viewBox="0 0 1024 1024"  height="30" width="30" xmlns="http://www.w3.org/2000/svg" 
          style="cursor: pointer;">
          <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM704 536c0 4.4-3.6 8-8 8H544v152c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V544H328c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h152V328c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v152h152c4.4 0 8 3.6 8 8v48z"></path>
          </svg>
        </div>`
      );

      let icon = document.getElementsByClassName(`icon${count}`)[0];
      icon.addEventListener("click", (e) => {
        cevapEkle(e);
      });
    }

    if (document.getElementsByClassName(`!1${count}`).length > 0) {
      let input_yeri1 = document.getElementsByClassName(`!1${count}`)[0];
      if (count == 1) {
        input_yeri1.addEventListener("change", (e) => {
          setSoru1cevap1(e.target.value);
        });
      } else if (count == 2) {
        input_yeri1.addEventListener("change", (e) => {
          setSoru2cevap1(e.target.value);
        });
      } else if (count == 3) {
        input_yeri1.addEventListener("change", (e) => {
          setSoru3cevap1(e.target.value);
        });
      } else if (count == 4) {
        input_yeri1.addEventListener("change", (e) => {
          setSoru4cevap1(e.target.value);
        });
      } else if (count == 5) {
        input_yeri1.addEventListener("change", (e) => {
          setSoru5cevap1(e.target.value);
        });
      } else if (count == 6) {
        input_yeri1.addEventListener("change", (e) => {
          setSoru6cevap1(e.target.value);
        });
      } else if (count == 7) {
        input_yeri1.addEventListener("change", (e) => {
          setSoru7cevap1(e.target.value);
        });
      } else if (count == 8) {
        input_yeri1.addEventListener("change", (e) => {
          setSoru8cevap1(e.target.value);
        });
      } else if (count == 9) {
        input_yeri1.addEventListener("change", (e) => {
          setSoru9cevap1(e.target.value);
        });
      } else if (count == 10) {
        input_yeri1.addEventListener("change", (e) => {
          setSoru10cevap1(e.target.value);
        });
      } else if (count == 11) {
        input_yeri1.addEventListener("change", (e) => {
          setSoru11cevap1(e.target.value);
        });
      } else if (count == 12) {
        input_yeri1.addEventListener("change", (e) => {
          setSoru12cevap1(e.target.value);
        });
      } else if (count == 13) {
        input_yeri1.addEventListener("change", (e) => {
          setSoru13cevap1(e.target.value);
        });
      } else if (count == 14) {
        input_yeri1.addEventListener("change", (e) => {
          setSoru14cevap1(e.target.value);
        });
      } else if (count == 15) {
        input_yeri1.addEventListener("change", (e) => {
          setSoru15cevap1(e.target.value);
        });
      } else if (count == 16) {
        input_yeri1.addEventListener("change", (e) => {
          setSoru16cevap1(e.target.value);
        });
      } else if (count == 17) {
        input_yeri1.addEventListener("change", (e) => {
          setSoru17cevap1(e.target.value);
        });
      } else if (count == 18) {
        input_yeri1.addEventListener("change", (e) => {
          setSoru18cevap1(e.target.value);
        });
      } else if (count == 19) {
        input_yeri1.addEventListener("change", (e) => {
          setSoru19cevap1(e.target.value);
        });
      } else if (count == 20) {
        input_yeri1.addEventListener("change", (e) => {
          setSoru20cevap1(e.target.value);
        });
      }
    }

    if (document.getElementsByClassName(`!2${count}`).length > 0) {
      let input_yeri2 = document.getElementsByClassName(`!2${count}`)[0];
      if (count == 1) {
        input_yeri2.addEventListener("change", (e) => {
          setSoru1cevap2(e.target.value);
        });
      } else if (count == 2) {
        input_yeri2.addEventListener("change", (e) => {
          setSoru2cevap2(e.target.value);
        });
      } else if (count == 3) {
        input_yeri2.addEventListener("change", (e) => {
          setSoru3cevap2(e.target.value);
        });
      } else if (count == 4) {
        input_yeri2.addEventListener("change", (e) => {
          setSoru4cevap2(e.target.value);
        });
      } else if (count == 5) {
        input_yeri2.addEventListener("change", (e) => {
          setSoru5cevap2(e.target.value);
        });
      } else if (count == 6) {
        input_yeri2.addEventListener("change", (e) => {
          setSoru6cevap2(e.target.value);
        });
      } else if (count == 7) {
        input_yeri2.addEventListener("change", (e) => {
          setSoru7cevap2(e.target.value);
        });
      } else if (count == 8) {
        input_yeri2.addEventListener("change", (e) => {
          setSoru8cevap2(e.target.value);
        });
      } else if (count == 9) {
        input_yeri2.addEventListener("change", (e) => {
          setSoru9cevap2(e.target.value);
        });
      } else if (count == 10) {
        input_yeri2.addEventListener("change", (e) => {
          setSoru10cevap2(e.target.value);
        });
      } else if (count == 11) {
        input_yeri2.addEventListener("change", (e) => {
          setSoru11cevap2(e.target.value);
        });
      } else if (count == 12) {
        input_yeri2.addEventListener("change", (e) => {
          setSoru12cevap2(e.target.value);
        });
      } else if (count == 13) {
        input_yeri2.addEventListener("change", (e) => {
          setSoru13cevap2(e.target.value);
        });
      } else if (count == 14) {
        input_yeri2.addEventListener("change", (e) => {
          setSoru14cevap2(e.target.value);
        });
      } else if (count == 15) {
        input_yeri2.addEventListener("change", (e) => {
          setSoru15cevap2(e.target.value);
        });
      } else if (count == 16) {
        input_yeri2.addEventListener("change", (e) => {
          setSoru16cevap2(e.target.value);
        });
      } else if (count == 17) {
        input_yeri2.addEventListener("change", (e) => {
          setSoru17cevap2(e.target.value);
        });
      } else if (count == 18) {
        input_yeri2.addEventListener("change", (e) => {
          setSoru18cevap2(e.target.value);
        });
      } else if (count == 19) {
        input_yeri2.addEventListener("change", (e) => {
          setSoru19cevap2(e.target.value);
        });
      } else if (count == 20) {
        input_yeri2.addEventListener("change", (e) => {
          setSoru20cevap2(e.target.value);
        });
      }
    }

    if (document.getElementsByClassName(`!${count}baslik`).length > 0) {
      let input_yeri1 = document.getElementsByClassName(`!${count}baslik`)[0];

      if (count == 2) {
        input_yeri1.addEventListener("change", (e) => {
          setSoru2(e.target.value);
        });
      } else if (count == 3) {
        input_yeri1.addEventListener("change", (e) => {
          setSoru3(e.target.value);
        });
      } else if (count == 4) {
        input_yeri1.addEventListener("change", (e) => {
          setSoru4(e.target.value);
        });
      } else if (count == 5) {
        input_yeri1.addEventListener("change", (e) => {
          setSoru5(e.target.value);
        });
      } else if (count == 6) {
        input_yeri1.addEventListener("change", (e) => {
          setSoru6(e.target.value);
        });
      } else if (count == 7) {
        input_yeri1.addEventListener("change", (e) => {
          setSoru7(e.target.value);
        });
      } else if (count == 8) {
        input_yeri1.addEventListener("change", (e) => {
          setSoru8(e.target.value);
        });
      } else if (count == 9) {
        input_yeri1.addEventListener("change", (e) => {
          setSoru9(e.target.value);
        });
      } else if (count == 10) {
        input_yeri1.addEventListener("change", (e) => {
          setSoru10(e.target.value);
        });
      } else if (count == 11) {
        input_yeri1.addEventListener("change", (e) => {
          setSoru11(e.target.value);
        });
      } else if (count == 12) {
        input_yeri1.addEventListener("change", (e) => {
          setSoru12(e.target.value);
        });
      } else if (count == 13) {
        input_yeri1.addEventListener("change", (e) => {
          setSoru13(e.target.value);
        });
      } else if (count == 14) {
        input_yeri1.addEventListener("change", (e) => {
          setSoru14(e.target.value);
        });
      } else if (count == 15) {
        input_yeri1.addEventListener("change", (e) => {
          setSoru15(e.target.value);
        });
      } else if (count == 16) {
        input_yeri1.addEventListener("change", (e) => {
          setSoru16(e.target.value);
        });
      } else if (count == 17) {
        input_yeri1.addEventListener("change", (e) => {
          setSoru17(e.target.value);
        });
      } else if (count == 18) {
        input_yeri1.addEventListener("change", (e) => {
          setSoru18(e.target.value);
        });
      } else if (count == 19) {
        input_yeri1.addEventListener("change", (e) => {
          setSoru19(e.target.value);
        });
      } else if (count == 20) {
        input_yeri1.addEventListener("change", (e) => {
          setSoru20(e.target.value);
        });
      }
    }
  };

  useEffect(() => {
    let div = document.getElementsByClassName("soru_ekle_ana")[0];
    div.addEventListener("click", (e) => {
      cevapEkle(e);
    });
  }, []);
  return (
    <div>
      <h4 className="text-center pt-4">Anket Ekle</h4>
      <div className="sorular col-10 col-md-8 offset-1 offset-md-2 offset-1 mt-5">
        <div className="soru">
          <input
            type="text"
            placeholder="Anketin Başlığı"
            className="form-control"
            onChange={(e) => {
              setBaslik(e.target.value);
            }}
          />
          <h4 className="mt-5">Sorular</h4>
          <div className="1 border bg-light p-3">
            <input
              type="text"
              placeholder="Soru Başlığı"
              className="form-control"
              maxLength={200}
              onChange={(e) => {
                setSoru1(e.target.value);
              }}
            />

            <div className="cevaplar">
              <div className="rounded ms-4 mt-4">
                <div className="d-flex">
                  <input
                    type="text"
                    placeholder="Birinci Şık"
                    className="!11 form-control mt-1 ms-2"
                    maxLength={100}
                    onChange={(e) => {
                      setSoru1cevap1(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="rounded ms-4 mt-4">
                <div className="d-flex">
                  <input
                    type="text"
                    placeholder="İkinci Şık"
                    className="!21 form-control mt-1 ms-2"
                    maxLength={100}
                    onChange={(e) => {
                      setSoru1cevap2(e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>
            <AiFillPlusSquare
              size={30}
              style={{ cursor: "pointer" }}
              className="soru_ekle_ana icon mt-2 ms-4"
            />
          </div>
        </div>
      </div>
      <div className="col-10 col-md-8 offset-1 offset-md-2 offset-2">
        {/* <BsClipboardPlus
          size={30}
          style={{ cursor: "pointer" }}
          className="icon"
        /> */}
        <p onClick={soruEkle}>ekle</p>
      </div>
      <div>
        <button className="center btn btn-outline-danger my-3" onClick={ekle}>
          Anketi Oluştur
        </button>
      </div>
    </div>
  );
};

export default AnketEkle;
