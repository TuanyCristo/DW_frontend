import React from 'react';
import "./footer.css"
import logo from "../images/logo.png";
import instagram from "../images/instagram.png"
import facebook from "../images/facebook.png"
//import whatsapp from "../images/whatsapp.png"

export default function Footer(){
  return(
    <section class="secao-footer">
        <div class="footer-logo-contato">
          <img class="logo"  src={logo} alt="logo-cuidarBem" />
        
        <div class="footer-contatos">
          <div><p>Entre em contato conosco</p></div>
          <div class="footer-rede-contatos">
            <a href=""><img src= {instagram} alt="instagram" /></a>
            
            <a href=""><img src={facebook} alt="facebook" /></a>
            <a href=""><img src="../images/whatsapp.png" alt="whatsapp" /></a>
          </div>
        </div>
        </div>
        <div class="footer-texto">
          <p>É essencial que cada pessoa cuide de seus pensamentos,
            emoções e bem-estar, especialmente na fase da terceira idade.
            No CuidarBem, promovemos a importância de oferecer atenção 
            e carinho aos idosos para garantir uma vida mais digna, saudável e feliz.</p>
        </div>
      </section>
  );
}
