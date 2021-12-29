import React, { useContext, useState } from 'react'
import PortfolioContext from '../context/PortfolioContext';

function Header() {
  const [menuOpen, setMenuOpen] = useContext(PortfolioContext)

  const handleClick = (event) => {
    event.classList.toggle('open')
    !menuOpen ? setMenuOpen(true) : setMenuOpen(false)
  }

  return (
    <header className="header-container">
      <div className="header-content">
        <h1 className="header-text-name">
          BRUNO FEU
        </h1>
        <div className="header-nav-btn" onClick={ (e) => handleClick(e.target)  }>
          <div className="header-btn-burger" onClick={ (e) => handleClick(e.target.parentNode)  }></div>
        </div>
        {menuOpen && (
          <nav className="header-nav">
            <a className="header-nav-text" href="#top">Home</a>
            <a className="header-nav-text" href="#about">Sobre Mim</a>
            <a className="header-nav-text" href="#projects">Projetos</a>
            <a className="header-nav-text" href="#contato">Contato</a>
        </nav>
        )
      }
      </div>
    </header>
  )
}

export default Header
