import React, { useEffect } from 'react';
// import profileImage from '../images/IMG_9726.jpg'

function About() {
  const listenToScroll = () => {
    const heigthToHideQuote = 300;
    const heigthToHideAbout = 750;
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    if (winScroll < heigthToHideQuote) { 
      document.getElementById('about-quote').classList.add('hide-text')
    } else {
      document.getElementById('about-quote').classList.remove('hide-text')
    }  

    if (winScroll < heigthToHideAbout) { 
      document.getElementById('about-me-title').classList.add('hide-text')
      document.getElementById('about-me-text').classList.add('hide-text')
    } else {
      document.getElementById('about-me-title').classList.remove('hide-text')
      document.getElementById('about-me-text').classList.remove('hide-text')
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

        {/* <img src={profileImage} alt="profile" className="about-picture" /> */}
        </div>
        <div className="about-text">
          <h1 className="about-name">Olá, 👋 meu nome é 
            <br />
            <strong className="name">Bruno Feu</strong>
          </h1>
          <p className="about-description"> Desenvolvedor Web, Engenheiro e <strong>apaixonado por tecnologia</strong>.</p>
        </div>
      </section>

      <div className="quote-container">
        <p className="about-quote" id="about-quote"><em>“A única maneira de fazer um ótimo trabalho é amar o que faz. Se você ainda não encontrou esse sentimento na carreira, continue procurando. Não se acomode.”</em> — Steve Jobs</p>
      </div>

      <div className="about-me-container">
        <h3 className="about-me-title" id="about-me-title">SOBRE MIM</h3>
        <p className="about-me-text" id="about-me-text">
          Meu nome é Bruno Feu, sou estudante de desenvolvimento web na Trybe. Desenvolvo sites com HTML, CSS , JavaScript e TypeScript. Possuo conhecimento em Git, React, Redux, Context API, Hooks, testes unitários e teste de integração, entre outras tecnologias.
          <br /><br /> 
          No momento, estou finalizando o módulo de Back-end, com conhecimentos em Docker, banco de dados realacionais, NodeJS, express, arquitetura de software MSC e REST.
          <br /><br /> 
          Atualmente estou migrando para a área de desenvolvimento pois aqui finalmente encontrei algo que me da prazer em trabalhar todos os dias. Acredito que meu trabalho possa gerar um impacto positivo na vida das pessoas. É isso que busco à cada novo aprendizado e novo projeto.
        </p>
      </div>

    </div>
  )
}

export default About;
