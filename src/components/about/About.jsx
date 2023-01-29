import React from 'react'
import './About.css'
import ME from '../../assets/me/me_3.jpg'
import {TbAward} from 'react-icons/tb'
import {MdFolder} from 'react-icons/md'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <TbAward className='about__icons' />
              <h5>Experience</h5>
              <small>1+ Year Working</small>
            </article>
            <article className='about__card'>
              <MdFolder className='about__icons' />
              <h5>Projects</h5>
              <small>5+ Completed</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus soluta voluptate sint, commodi impedit nobis accusamus facilis dolor deleniti? Corrupti beatae qui voluptas delectus vel.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About