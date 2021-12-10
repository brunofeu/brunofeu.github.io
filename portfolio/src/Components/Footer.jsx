import React from 'react'
import FooterLink from './FooterLink';

function Footer() {
  return (
    <footer class="footer">
      <h4 id="links">Contato</h4>
      <FooterLink url="https://github.com/brunofeu" text="GitHub"/>
      <FooterLink url="https://www.linkedin.com/in/brunofeu/" text="LinkedIn"/>
      <FooterLink url="instagram.com/brunofeu" text="Instagram"/>
    </footer>
  )
}

export default Footer;
