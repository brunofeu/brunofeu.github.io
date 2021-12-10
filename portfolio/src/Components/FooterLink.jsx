import React from 'react'

function FooterLink({url, text}) {
  return (
    <div>
      <a href={url} target="_blank"><i class="fab fa-github"></i>
        <p>{text}</p>
      </a>
    </div>
  )
}

export default FooterLink
