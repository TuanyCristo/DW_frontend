import React from "react";
import "../sectionFotos/fotos.css";
import img1 from "../images/img1.png";
import img2 from "../images/img2.png";
import img3 from "../images/img3.png";

export default function SecaoFotos() {
  return (
    <section class="secao_3">
      <h3>Equipe dedicada, pronta para cuidar com excelência.</h3>
      <section class="secao_3-Fotos">
        <div>
          <img
            class="imagem-1"
            src={img1}
            alt=""
          />
        </div>
        <div>
          <img
            class="imagem-2"
            src={img2}
            alt=""
          />
        </div>
        <div>
          <img
            class="imagem-3"
            src={img3}
            alt=""
          />
        </div>
      </section>
    </section>
  );
}
