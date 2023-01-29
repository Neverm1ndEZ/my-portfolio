import React from 'react'
import './Experience.css'
import {FaCheckCircle } from 'react-icons/fa'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">

        <div className="experience__web">
          <h3>Web Development</h3>
          <div className="experience__content">
              <article className="experience__details">
                <FaCheckCircle className='experience__details-icon' />
                <div>
                  <h4>HTML</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className="experience__details">
                <FaCheckCircle className='experience__details-icon' />
                <div>
                  <h4>CSS</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>
              <article className="experience__details">
                <FaCheckCircle className='experience__details-icon' />
                <div>
                  <h4>JavaScript</h4>
                  <small className='text-light'>Beginner</small>
                </div>
              </article>
              <article className="experience__details">
                <FaCheckCircle className='experience__details-icon' />
                <div>
                  <h4>Tailwind</h4>
                  <small className='text-light'>Beginner</small>
                </div>
              </article>
              <article className="experience__details">
                <FaCheckCircle className='experience__details-icon' />
                <div>
                  <h4>React</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>
          </div>
        </div>

        <div className="experience__app">
        <h3>Android Development</h3>
          <div className="experience__content">
              <article className="experience__details">
                <FaCheckCircle className='experience__details-icon' />
                <div>
                  <h4>Java</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className="experience__details">
                <FaCheckCircle className='experience__details-icon' />
                <div>
                  <h4>C++</h4>
                  <small className='text-light'>Intermediate</small>
                </div>  
              </article>
              <article className="experience__details">
                <FaCheckCircle className='experience__details-icon' />
                <div>
                  <h4>Kotlin</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>
              <article className="experience__details">
                <FaCheckCircle className='experience__details-icon' />
                <div>
                  <h4>Android Studio</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>
              <article className="experience__details">
                <FaCheckCircle className='experience__details-icon' />
                <div>
                  <h4>Flutter</h4>
                  <small className='text-light'>Beginner</small>
                </div>
              </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience