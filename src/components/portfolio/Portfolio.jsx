import React from 'react'
import './Portfolio.css'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <h3>This is a portfolio item title</h3>
            <a href="https://github.com/Neverm1ndEZ/Weather-App" className='btn' target='_blank' rel="noreferrer">Github</a>
            <a href="https://github.com/Neverm1ndEZ/Weather-App" className='btn btn-primary' target='_blank' rel="noreferrer">Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio