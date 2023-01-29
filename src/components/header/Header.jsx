import React from 'react'
import './Header.css'
import CTA from './CTA'
import me from '../../assets/me/me_1.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container" id='header'>
        <h5>Hello, I'm </h5>
        <h1>Mihir Suman</h1>
        <h5 className="text-light">Student, Programmer, Developer!</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={me} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header