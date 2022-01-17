import React, { useEffect, useState } from 'react';
import profileImage from '../images/IMG_9726.jpg'
import {HideOn} from 'react-hide-on-scroll';

function About() {
  const listenToScroll = () => {
    let heightToHideFrom = 400;
    const winScroll = document.body.scrollTop || 
        document.documentElement.scrollTop;
    if (winScroll > heightToHideFrom) { 
      document.getElementById('about-quote').classList.remove('hide-text')
    } else {
      document.getElementById('about-quote').classList.add('hide-text')
    }  
  };
  
    useEffect(() => {   
      window.addEventListener("scroll", listenToScroll);
      return () => 
        window.removeEventListener("scroll", listenToScroll); 
    }, [])




  return (
    <div id='about'>
      <section className="about-container">
        <div className="border-img">

        <img src={profileImage} alt="profile" className="about-picture" />
        </div>
        <div className="about-text">
          <h1 className="about-name">Olá, 👋 meu nome é 
            <br />
            <strong>Bruno Feu</strong>
          </h1>
          <p className="about-description"> Desenvolvedor Front-End, Engenheiro e <strong>apaixonado por tecnologia</strong>.</p>
        </div>
      </section>
      <div className="hide">
        <p className="about-quote" id="about-quote"><em>“Seja curioso. Leia de tudo. Tente coisas novas. O que as pessoas chamam de inteligência se resume a curiosidade.”</em> — Aaron Swartz</p>
      </div>
      <div className="about-me">

        <h3 className="about-me-title">SOBRE MIM</h3>
        <p className="about-me-text">
          Eu sou o Bruno Feu, estudante de desenvolvimento web na Trybe. Desenvolvo sites com HTML, CSS e JavaScript. Possuo conhecimento em Git, React, Redux com React, Hooks, testes unitários e RTL, entre outras tecnologias.
          <br/> Atualmente estou migrando para a área de desenvolvimento pois aqui finalmente encontrei algo que me da prazer em trabalhar todos os dias. Acredito que meu trabalho possa gerar um impacto positivo na vida das pessoas. É isso que busco à cada novo aprendizado e novo projeto.
        </p>
      </div>
    </div>
  )
}

export default About;
