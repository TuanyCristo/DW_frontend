import React from 'react';
import imagemSection2 from '../images/section2.png'

export default function ConhecaNos(){
  return (
    <section class="conheca-nos">
        <div class="texto-sessao2">
            <h6>Cuidamos de você</h6>
            <p>Cuidado <br>especializado</br> e saúde no conforto <br>do seu lar.</br></p>
        </div>
        <div class="imagem">
        <img src={imagemSection2} alt='Idosa e sua cuidadora' />
        </div>
    </section>
  );
};
