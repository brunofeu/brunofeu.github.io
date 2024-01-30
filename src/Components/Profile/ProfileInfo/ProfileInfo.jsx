import React from 'react';
import SocialMediaIcons from '../../SocialMediaIcons/SocialMediaIcons';
import './ProfileInfo.css';

import ContactInfo from '../ContactInfo/ContactInfo';

const ProfileInfo = () => {

  return (
    <div className='profile-info-container'>
      <h1>Bruno Feu</h1>
      <p>Web Developer</p>
      <SocialMediaIcons />
      <ContactInfo />
    </div>

  )
};

export default ProfileInfo;
