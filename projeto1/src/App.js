import React from 'react';
import Navbar from './Navbar/Navbar';
import Footer from './Footer';
import Cadastrar from './sectionCadastrar/cadastrar';
import SecaoFotos from './sectionFotos/fotos';
import SecaoTexto from './secaoTexto/texto';
import Sessao2 from './sessaoApresentacao/conhecanos'


function App() {
  return (
    <div className="App">
      <Navbar />
      <Sessao2/>
      <SecaoFotos/>
      <Cadastrar/>
      <SecaoTexto/>
      <Footer/>
    </div>
  );
}

export default App;
