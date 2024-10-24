import React from 'react';
import Navbar from './Navbar/Navbar';
import Footer from './Footer';
import Cadastrar from './sectionCadastrar/cadastrar';
import SecaoFotos from './sectionFotos/fotos';
import SecaoTexto from './secaoTexto/texto';
function App() {
  return (
    <div className="App">
      <Navbar />
      <SecaoFotos/>
      <Cadastrar/>
      <SecaoTexto/>
      <Footer/>
    </div>
  );
}

export default App;
