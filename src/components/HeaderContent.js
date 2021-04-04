import React from 'react';
import Reveal from 'react-reveal/Reveal';

import { FaQuinscape } from 'react-icons/fa';

const HeaderContent = () => {
  return (
    <>
      <nav>
      <Reveal effect="fadeInDown">
        <div className="nav-left">
          <span><FaQuinscape className='nav-icon'/></span>
          <span>School Saas</span>
        </div>
        </Reveal>
        
        <Reveal effect="fadeInDown">
        <div className="nav-right">
          <button className='hvr-push'>Sign Up</button>
        </div>
        </Reveal>
      </nav>
    </>
  )
}

export default HeaderContent
