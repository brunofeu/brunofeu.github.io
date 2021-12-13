import React from 'react'

function FooterLink({img, url, text}) {
  return (
    <div>
      <a href={url} target="_blank"><i class="fab fa-github"></i>
        <img src={ img } alt="logo-brand" />
        <p>{text}</p>
      </a>
    </div>
  )
}

export default FooterLink
