import React from 'react';
import './Navbar.css';
import logotipo from '../images/logo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logotipo} alt="Logo" />
        <span>CuidarBem</span>
      </div>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#contato">Contato</a></li>
        <li><a href="#sobre-nos">Sobre nós</a></li>
      </ul>
      <div className="navbar-buttons">
        <button className="btn-entrar">Entrar</button>
        <button className="btn-cadastrar">Cadastrar</button>
      </div>
    </nav>
  );
};

export default Navbar;
