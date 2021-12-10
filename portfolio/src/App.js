import './App.css';

function App() {
  return (
  <div>
    <header class="header">
      <div class="header-content">
        <div class="title">
          <a class="button" href="#top">
            <h1>Bruno Feu</h1>
          </a>
  
        </div>
        <nav class="head-list">
          <div><a class="button" href="#habilidades">Habilidades</a></div>
          <div><a class="button" href="#outrasHabilidades">Outras Habilidades</a></div>
          <div><a class="button" href="#links">Contato</a></div>
        </nav>
      </div>
    </header>
  
    <div class="main-content">
      <section class="persona">
        <div class="head-picture">
          <a href="1592586909136.jpeg"><img src="1592586909136.jpeg" alt="Foto de Bruno" class="picture" /></a>
        </div>
  
        <div class="about">
          <h3>OLÁ,</h3>
          <h1>Eu sou Bruno.</h1>
          <p>
            Estudande de Desenvolvimento Web na Trybe,
            Engenheiro e <strong>apaixonado por tecnologia</strong>.
          </p>
          <p>
            Na minha visão, o futuro da sociedade será baseado na tecnologia, por
            este motivo meu objetivo é me tornar desenvolvedor para poder
            <strong>mudar a vida das pessoas</strong>.
            <strong><em>Brasileiro de São Paulo/SP</em></strong>
          </p>
        </div>
  
      </section>
  
      <section class="main-section">
  
        <div class="habilidades-list">
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
        <div class="habilidades-list">
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
    <footer class="footer">
  
  
      <div class="contact-links">
        <h4 id="links">Contato</h4>
      </div>
  
      <section class="social">
  
        <a href="https://github.com/brunofeu" target="_blank"><i class="fab fa-github"></i>
          <p>GitHub</p>
        </a>
  
  
  
        <a href="https://www.linkedin.com/in/brunofeu/" target="_blank"><i class="fab fa-linkedin"></i>
          <p>LinkedIn</p>
        </a>
  
  
        <a href="instagram.com/brunofeu" target="_blank"><i class="fab fa-instagram"></i>
          <p>Instagram</p>
        </a>
  
  
      </section>
  
    </footer>
  </div>
  );
}

export default App;
