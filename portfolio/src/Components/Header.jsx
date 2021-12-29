import React, { useContext, useState } from 'react'
import PortfolioContext from '../context/PortfolioContext';

function Header() {
  const [menuOpen, setMenuOpen] = useContext(PortfolioContext)

  const handleClick = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <header className="header-container">
      <div className="header-content">
        <h1 className="header-text-name">
          BRUNO FEU
        </h1>
        <div className={`header-nav-btn ${menuOpen ? 'open' : '' } `} onClick={ handleClick }>
          <div className="header-btn-burger" onClick={ handleClick }></div>
        </div>
        {/* {menuOpen && ( */}
          <nav className={`header-nav ${menuOpen ? 'open' : '' } `}>
            <a className="header-nav-text" onClick={handleClick} href="#top">Home</a>
            <a className="header-nav-text" onClick={handleClick} href="#about">Sobre Mim</a>
            <a className="header-nav-text" onClick={handleClick} href="#projects">Projetos</a>
            <a className="header-nav-text" onClick={handleClick} href="#contact">Contato</a>
        </nav>
        {/* )
      } */}
      </div>
    </header>
  )
}

export default Header
