import React from 'react';
import profileImage from '../images/IMG_9726.jpg'

function About() {
  return (
    <div className="about-container" id='about'>
      <section className="about-top-container">
        <img src={profileImage} alt="profile" className="about-picture" />
        
        <div className="about-top-text">
          <h1>Olá! 👋</h1>
          <h1>Eu sou o Bruno</h1>
          <p> Desenvolvedor Front-End, Engenheiro e <strong>apaixonado por tecnologia</strong>.</p>
        </div>
      </section>
        <p className="about-quote"><em>“Seja curioso. Leia de tudo. Tente coisas novas. O que as pessoas chamam de inteligência se resume a curiosidade.”</em> — Aaron Swartz</p>
        <h3 className=" main-text-area">SOBRE MIM</h3>
        <p className="about-me-text">
        Atualmente, estou estudando desenvolvimento web na Trybe, uma escola que ensina a programar, a aprender e a trabalhar. Lá foi onde definitivamente encontrei algo que tenho prazer em fazer todos os dias. Gosto do que somos capazes de alcançar por meio do código. 
        </p>
    </div>
  )
}

export default About;
