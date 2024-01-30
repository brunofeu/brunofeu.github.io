import React from 'react'

const ContactCard = ({ title, content }) => {
  return (
    <div className='contact-card-container'>
      <img></img>
      <div>
        <p>{title}</p>
        <p>{content}</p>
      </div>
    </div>

  )
}

export default ContactCard