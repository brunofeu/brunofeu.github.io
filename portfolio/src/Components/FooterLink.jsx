import React from 'react'

function FooterLink({img, url, text}) {
  return (
    <div>
      <a href={url} target="_blank" rel="noreferrer" className="flex flex-col items-center">
        <img src={ img } alt="logo-brand" className="m-1 h-10 drop-shadow-[2px_5px_5px_rgba(0,0,0,.28)] hover:animate-bounce"/>
        <p className="hidden md:block pt-2">{text}</p>
      </a>
    </div>
  )
}

export default FooterLink
