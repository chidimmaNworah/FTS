import React from "react";
import './testimonials.css'
import AVTR1 from '../../assets/testimonials/he.jpg'
import AVTR2 from '../../assets/testimonials/he2.jpg'
import AVTR3 from '../../assets/testimonials/he3.jpg'
import AVTR4 from '../../assets/testimonials/he4.jpg'
import AVTR5 from '../../assets/testimonials/she.jpg'

const data = [
  {
    avatar: AVTR1,
    name: 'Tina Snow',
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, recusandae pariatur perferendis sint nihil hic esse? Deserunt vel similique, velit aut molestias porro tempore saepe adipisci aperiam possimus explicabo repudiandae.'
  },
  {
    avatar: AVTR2,
    name: 'Tina Snow',
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, recusandae pariatur perferendis sint nihil hic esse? Deserunt vel similique, velit aut molestias porro tempore saepe adipisci aperiam possimus explicabo repudiandae.'
  },
  {
    avatar: AVTR3,
    name: 'Tina Snow',
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, recusandae pariatur perferendis sint nihil hic esse? Deserunt vel similique, velit aut molestias porro tempore saepe adipisci aperiam possimus explicabo repudiandae.'
  },
  {
    avatar: AVTR4,
    name: 'Tina Snow',
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, recusandae pariatur perferendis sint nihil hic esse? Deserunt vel similique, velit aut molestias porro tempore saepe adipisci aperiam possimus explicabo repudiandae.'
  },
  {
    avatar: AVTR5,
    name: 'Tina Snow',
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, recusandae pariatur perferendis sint nihil hic esse? Deserunt vel similique, velit aut molestias porro tempore saepe adipisci aperiam possimus explicabo repudiandae.'
  }
]

const Testimonials = ()=> {
  return(
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials__container">


        {
          data.map(({avatar, name, review}, index) =>{
            return (
              <article key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt={name} />
                </div>
                <h5 className="client__name">{name}</h5>
                <small className="client__review">{review}</small>
              </article>
            )
          })
        }
        
      </div>
    </section>
  )
}

export default Testimonials