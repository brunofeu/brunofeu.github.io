import React from 'react'
import './ContactInfo.css'
import ContactCard from './ContactCard'

function ContactInfo() {
  return (
    <div className='contact-info-container'>
      <ContactCard title='Phone' content='(555) 555-5555' />
      <ContactCard title='Email' content='brunofeu89@gmail.com' />
      <ContactCard title='Location' content='São Paulo - Brasil' />
      <ContactCard title='Birthday' content='Apr 02, 1989' />
    </div>
  )
}

export default ContactInfo