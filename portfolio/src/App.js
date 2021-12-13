import { useContext, useState } from 'react';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import PortfolioContext from './context/PortfolioContext';
import profileImage from './images/IMG_9726.jpg'

function App() {
  const teste = useContext(PortfolioContext)
  return (
  <main className="relative w-2/3 max-w-4xl m-auto">
    <Header/>
    <div className="">
      <section className="flex justify-between items-center">
        <div className="border-4 rounded-full border-indigo-400 ">
          <img src={profileImage} alt="profile-picture" className="rounded-full border-2 h-48 w-48 " />
        </div>
        <div className=" flex flex-col w-1/2 h-40 justify-around m-auto">
          <h1 className="text-3xl text-center text-indigo-400">OLÁ, Eu sou o Bruno.</h1>
          <p className="text-center p-2">
            Estudande de Desenvolvimento Web na Trybe,
            Engenheiro e <strong>apaixonado por tecnologia</strong>.
          </p>
        </div>
      </section>
      <p className="text-center italic p-10">
        Na minha visão, o futuro da sociedade será baseado na tecnologia, por
        este motivo meu objetivo é me tornar desenvolvedor para poder
        <strong> mudar a vida das pessoas</strong>.
      </p>
  
      <section className="main-section">
  
        <div className="habilidades-list">
          <h3 id="habilidades">Habilidades</h3>

            <ol>
              <li>Unix</li>
              <li>Git</li>
              <li>GitHub</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>DOM</li>
              <li>Flexbox</li>
              <li>Metodologia Ágil</li>
            </ol>
        </div>
        <div className="habilidades-list">
          <h3 id="outrasHabilidades">Outras Habilidades</h3>
            <ul>
              <li>Honestidade</li>
              <li>Sinceridade</li>
              <li>Competitividade</li>
              <li>Praticidade</li>
              <li>Resiliência</li>
              <li>Ambição</li>
              <li>Pensamento crítico</li>
            </ul>
        </div>
  
      </section>
  
    </div>
    <Footer/>
  </main>
  );
}

export default App;
