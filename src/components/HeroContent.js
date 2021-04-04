import React from 'react';
import Reveal from 'react-reveal/Reveal';

const HeroContent = () => {
  return (
    <>
      <div className="hero-container">
      <Reveal effect="fadeInDown">
        <h1>Over <span className="highlight-text">30,000,000</span> plus schools in the world are using school management software to drive thier schools to success, here we present to you the very same software at a cheaper price!</h1><br/>
        </Reveal>
        <Reveal effect="fadeInDown">
        <div className="hero-action">
        <form className='hero-form' onSubmit=''>
        <label>Grab your exclusive early access token.</label><br/>
          <input type="text" placeholder='yourmail@example.com' onChange='' className='hero-mail-input'/>
          <input type="button" value="Get started" className='hero-button hvr-push'/>
          </form>
        </div>
        </Reveal>
      </div>
    </>
  )
}

export default HeroContent
