import React from 'react'

function FooterLink({img, url, text}) {
  return (
    <div>
      <a href={url} target="_blank" rel="noreferrer" className="footer-link">
        <img src={ img } alt="logo-brand"/>
        <p>{text}</p>
      </a>
    </div>
  )
}

export default FooterLink
