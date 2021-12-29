import React from 'react'

function Header() {

  return (
    <header className="header-container">
      <div className="header-content">
        <h1 className="header-text-name">
          BRUNO FEU
        </h1>
        <div className="header-nav-btn" onClick={ (e) => e.target.classList.toggle('open')  }>
          <div className="header-btn-burger" onClick={ (e) => e.target.parentNode.classList.toggle('open')  }></div>
        </div>
        {/* <nav className="header-nav">
          <a className="header-nav-text" href="#top">Home</a>
          <a className="header-nav-text" href="#about">Sobre Mim</a>
          <a className="header-nav-text" href="#projects">Projetos</a>
          <a className="header-nav-text" href="#contato">Contato</a>
        </nav> */}
      </div>
    </header>
  )
}

export default Header
