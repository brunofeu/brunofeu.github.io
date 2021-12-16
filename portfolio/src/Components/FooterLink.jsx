import React from 'react'

function FooterLink({img, url, text}) {
  return (
    <div>
      <a href={url} target="_blank" className="flex flex-col items-center">
        <img src={ img } alt="logo-brand" className="h-10 drop-shadow-lg hover:animate-bounce"/>
        <p className="pt-2">{text}</p>
      </a>
    </div>
  )
}

export default FooterLink
