import React from 'react'
import FooterLink from './FooterLink';
import github_logo from '../images/github-brands.svg'
import instagram_logo from '../images/instagram-brands.svg'
import linkedin_logo from '../images/linkedin-brands.svg'

function Footer() {
  return (
    <footer class="footer">
      <h4 id="links">Contato</h4>
      <FooterLink img={ github_logo } url="https://github.com/brunofeu" text="GitHub"/>
      <FooterLink img={ linkedin_logo } url="https://www.linkedin.com/in/brunofeu/" text="LinkedIn"/>
      <FooterLink img ={ instagram_logo } url="instagram.com/brunofeu" text="Instagram"/>
    </footer>
  )
}

export default Footer;
