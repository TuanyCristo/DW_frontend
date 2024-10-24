import React from "react";
import '../sessaoApresentacao/conhecanos.css'
import Foto from '../images/section2.png'

export default function ConhecaNos() {
    return (
        <section class="sessao-2">
           

            <div className="paragrafo">
            <h6>Cuidamos de você</h6>
            <p>Cuidado</p>
            <p>especializado</p>
            <p>e saúde no conforto</p>
            <p>do seu lar</p>
            </div>

            <div class="img-foto">
            <img src={Foto} alt="foto"></img>
            </div>
        </section>
    );
}