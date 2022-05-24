import React from 'react'
import './header.css'
import CTA from './CTA'
import Logo from '../../assets/fts_blacks1.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Welcome To</h5>
        <h1>Favourite Tech Solutions</h1>
        <h5 className="text-light">The Digital Interdependence</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={Logo} alt="Logo" />
        </div>
        <a href="#contact" className='scroll_down'>Scroll me</a>
      </div>
    </header>
  )
}

export default Header