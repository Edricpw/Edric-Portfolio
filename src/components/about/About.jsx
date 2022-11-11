import React from 'react'
import './about.css'
import ME from '../../Assets/linked in.jpg'
import {BsAwardFill} from 'react-icons/bs'
import {AiFillFolderOpen} from 'react-icons/ai'

const About = () => {
return (
<section id ='about'>
  <h5>Get To Know</h5>
  <h2>About Me</h2>

  <div className="container about__container">
    <div className="about__me">
      <div className="about__me-image">
        <img src={ME} alt="About Image"/>
        </div>
      </div>

      <div className="about__content">
        <div className="about__cards">
          <article className='about__card'>
          <BsAwardFill className='about__icon'/>
          <h5>Education</h5>
          <small>Student at Bina Nusantara University </small>  
          </article>

          <article className='about__card'>
          <AiFillFolderOpen className='about__icon'/>
          <h5>Projects</h5>
          <small>8+ Completed Projects</small>
          </article> 
      </div>

      <p>
            Hi! My name is Edric Pratama Widjaja. I am a Master Track Student at Bina Nusantara University.
            My major is Computer Science and I'm interested in Front End Web Development and UI/UX Design!
      </p>

        <a href='#contact' className='btn btn-primary'>Let's Talk</a>

    </div>
  </div>
</section>
)
}

export default About