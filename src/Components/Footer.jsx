import React from 'react'
import FooterLink from './FooterLink';
import github_logo from '../images/github-brands.svg'
import instagram_logo from '../images/instagram-brands.svg'
import linkedin_logo from '../images/linkedin-brands.svg'
import email_logo from '../images/envelope-square-solid.svg'
import heart from '../images/heart.png'

function Footer() {
  return (
    <footer className="footer-container">
      <h3 id="contact" className="footer-main-text">CONTATO</h3>
      <div className="footer-links-container">
        <FooterLink img={ github_logo } url="https://github.com/brunofeu" text="GitHub"/>
        <FooterLink img={ linkedin_logo } url="https://www.linkedin.com/in/brunofeu/" text="LinkedIn"/>
        <FooterLink img ={ instagram_logo } url="http://instagram.com/brunofeu" text="Instagram"/>
        <FooterLink img ={ email_logo } url="mailto:brunofeu89@gmail.com" text="Email"/>
      </div>
      <div className="footer-developer-text">
        <p> por <a href="https://github.com/brunofeu"><strong>Bruno Feu</strong></a> </p>
        <p> Construído com React e
          <img id="heart-img" src={ heart } alt="heart" />
        </p>
      </div>
    </footer>
  )
}

export default Footer;
