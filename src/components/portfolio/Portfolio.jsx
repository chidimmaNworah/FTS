import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio/bijoMockup.png'
import IMG2 from '../../assets/portfolio/johoneyBottle.png'
import IMG3 from '../../assets/portfolio/bijoNew.png'
import IMG4 from '../../assets/portfolio/johoneyMenu.png'
import IMG5 from '../../assets/portfolio/bijoTransparent.png'
import IMG6 from '../../assets/portfolio/oshAssociation.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Bijo bulk cooking logo mockup',
    github: 'https://github.com/chidimmaNworah',
    demo: 'https://dribble.com/Alien_pixels'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Johone 3d design honey product',
    github: 'https://github.com/chidimmaNworah',
    demo: 'https://dribble.com/Alien_pixels'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Bijo bulk cooking logo on table design',
    github: 'https://github.com/chidimmaNworah',
    demo: 'https://dribble.com/Alien_pixels'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Johoney honey product menu design',
    github: 'https://github.com/chidimmaNworah',
    demo: 'https://dribble.com/Alien_pixels'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Bijo bulk cooking logo naked and transparent',
    github: 'https://github.com/chidimmaNworah',
    demo: 'https://dribble.com/Alien_pixels'
  },
  {
    id: 6,
    image: IMG6,
    title: 'OshAssociatio internation organization awareness day',
    github: 'https://github.com/chidimmaNworah',
    demo: 'https://dribble.com/Alien_pixels'
  }
]

const Portfolio = () => {
  return (
    <section id='portofolio'>
      <h5>Our Gallery</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
  {
    data.map(({id, image, title, github, demo}) => {
      return (
        <article key={id} className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <div className='portfolio__item-cta'>
          <a href={github} className='btn' target='_blank'>Github</a>
          <a href={demo} className='btn btn-primary' target='_blank'>Demo</a>
          </div>
        </article>
          )
        })
      }
      </div>
    </section>
  )
}

export default Portfolio