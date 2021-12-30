import React, { useContext, useState } from 'react'
import PortfolioContext from '../context/PortfolioContext';
import FooterLink from './FooterLink';
import github_logo from '../images/github-brands.svg'
import instagram_logo from '../images/instagram-brands.svg'
import linkedin_logo from '../images/linkedin-brands.svg'
import email_logo from '../images/envelope-square-solid.svg'

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
          <nav className={`header-nav ${menuOpen ? 'open' : '' } `}>
            <div className="header-nav-redirect">
              <a className="header-nav-text" onClick={handleClick} href="#top">Home</a>
              <a className="header-nav-text" onClick={handleClick} href="#about">Sobre Mim</a>
              <a className="header-nav-text" onClick={handleClick} href="#projects">Projetos</a>
              <a className="header-nav-text" onClick={handleClick} href="#contact">Contato</a>
            </div>
            <div className="header-nav-social-links">
              <FooterLink img={ github_logo } url="https://github.com/brunofeu" text="GitHub"/>
              <FooterLink img={ linkedin_logo } url="https://www.linkedin.com/in/brunofeu/" text="LinkedIn"/>
              <FooterLink img ={ instagram_logo } url="http://instagram.com/brunofeu" text="Instagram"/>
              <FooterLink img ={ email_logo } url="mailto:brunofeu89@gmail.com" text="Email"/>
            </div>
          </nav>
      </div>
    </header>
  )
}

export default Header
