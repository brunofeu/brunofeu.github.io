import React from 'react'
import FooterLink from './FooterLink';
import github_logo from '../images/github-brands.svg'
import instagram_logo from '../images/instagram-brands.svg'
import linkedin_logo from '../images/linkedin-brands.svg'
import email_logo from '../images/envelope-square-solid.svg'
import heart from '../images/heart.png'

function Footer() {
  return (
    <footer className="flex flex-col border-t-2 items-center mt-10 p-5 pb-0">
      <h4 id="links" className="text-3xl text-violet-800 drop-shadow-xl">Contato</h4>
      <div className="flex w-full md:w-3/4 justify-around pt-5" id="contact">
        <FooterLink img={ github_logo } url="https://github.com/brunofeu" text="GitHub"/>
        <FooterLink img={ linkedin_logo } url="https://www.linkedin.com/in/brunofeu/" text="LinkedIn"/>
        <FooterLink img ={ instagram_logo } url="http://instagram.com/brunofeu" text="Instagram"/>
        <FooterLink img ={ email_logo } url="mailto:brunofeu89@gmail.com" text="Email"/>
      </div>
      <div className="flex border-t 2 mt-10">
        <p className="text-xs"> Construído com React, CSS Tailwind e</p>
        <img className="h-3 pl-2" src={ heart } alt="heart" />
      </div>
    </footer>
  )
}

export default Footer;
