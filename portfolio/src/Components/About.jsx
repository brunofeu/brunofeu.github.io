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
        <h3 className=" main-text-area">SOBRE MIM</h3>
        <p className="about-me-text">
        Atualmente, estou estudando desenvolvimento web na Trybe, uma escola que ensina a programar, a aprender e a trabalhar. Lá foi onde definitivamente encontrei algo que tenho prazer em fazer todos os dias. Gosto do que somos capazes de alcançar por meio do código. 
        </p>
    </div>
  )
}

export default About;
