import React from "react";
import "./cadastrar.css";
import Cuidador from "../images/cuidador.png";
import Medicos from "../images/cuidados-medicos.png";
export default function Cadastrar(){
    return(
        <section class="secao-cadastro">
      <div class="cadastro-paciente">
        <img
          class="logo-cadastro-paciente"
          src= {Cuidador}
          alt="idosos"
        />
        <h3>Cadastrar Paciente</h3>
        <p class="texto-cadastro-paciente">
          Garantir o bem-estar de quem amamos começa com atenção e carinho. No
          CuidarBem, você pode registrar todas as informações importantes sobre
          o idoso para que ele receba o cuidado que merece.
        </p>
        <button class="botao-paciente" onclick="">Cadastrar</button>
      </div>

      <div class="cadastro-cuidador">
        <img
          class="logo-cadastro-cuidador"
          src={Medicos}
          alt="idosos"
        />
        <h3>Cadastrar cuidador</h3>
        <p class="texto-cadastro-cuidador">
          Garantir o bem-estar dos idosos começa com atenção e profissionais
          dedicados Preencha dados como experiência, especialidades e contatos,
          garantindo que cada necessidade seja atendida por quem tem preparo e
          carinho.
        </p>

        <button class="botao-cuidador" onclick="">Cadastrar</button>
      </div>
    </section>
    );
}