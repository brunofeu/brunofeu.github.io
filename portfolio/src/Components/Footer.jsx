import React from 'react'
import FooterLink from './FooterLink';
import github_logo from '../images/github-brands.svg'
import instagram_logo from '../images/instagram-brands.svg'
import linkedin_logo from '../images/linkedin-brands.svg'
import email_logo from '../images/envelope-square-solid.svg'

function Footer() {
  return (
    <footer className="flex flex-col items-center bg-gray-300 absolute w-screen p-5">
      <h4 id="links" className="text-3xl text-indigo-400 drop-shadow-xl">Contato</h4>
      <div className="flex w-2/3 justify-around pt-5">
        <FooterLink img={ github_logo } url="https://github.com/brunofeu" text="GitHub"/>
        <FooterLink img={ linkedin_logo } url="https://www.linkedin.com/in/brunofeu/" text="LinkedIn"/>
        <FooterLink img ={ instagram_logo } url="instagram.com/brunofeu" text="Instagram"/>
        <FooterLink img ={ email_logo } url="mailto:brunofeu89@gmail.com" text="Email"/>
      </div>
    </footer>
  )
}

export default Footer;
