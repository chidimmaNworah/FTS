import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithubSquare} from 'react-icons/fa'
import {FaDribbbleSquare} from 'react-icons/fa'
import {FaTwitterSquare} from 'react-icons/fa'


const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="www.linkedin.com/in/favourite-tech-solutions-046545238" target="_blank" rel='noreferrer'><BsLinkedin /></a>
        <a href="https://github.com/chidimmaNworah/FTS" target="_blank" rel='noreferrer'><FaGithubSquare /></a>
        <a href="https://dribbble.com/FTSolutions" target="_blank" rel='noreferrer'><FaDribbbleSquare /></a>
        <a href="https://twitter.com/FavouriteTech" target="_blank" rel='noreferrer'><FaTwitterSquare /></a>
    </div> 
  )
}

export default HeaderSocials