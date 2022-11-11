import React from 'react'
import './experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
return (
<section id='experiences'>
<h5>What Skills I Have</h5>
<h2>My Experience</h2>

<div className="container experience__container">
  <div className="experience__frontend">
    <h3>Frontend Developement</h3>
    <div className="experience__content">
      <article className="experience__details">
          <BsFillPatchCheckFill className='experience__details-icon'/>
          <div>
          <h4>HTML</h4>
          <small className='text-align'>Intermediate</small>
          </div>
      </article>
      
      <article className="experience__details">
          <BsFillPatchCheckFill className='experience__details-icon'/>
          <div>
          <h4>CSS</h4>
          <small className='text-align'>Intermediate</small>
          </div>
      </article>
      
      <article className="experience__details">
          <BsFillPatchCheckFill className='experience__details-icon'/>
          <div>
          <h4>JavaScript</h4>
          <small className='text-align'>Intermediate</small>
          </div>
      </article>
      
      <article className="experience__details">
          <BsFillPatchCheckFill className='experience__details-icon'/>
          <div>
          <h4>React</h4>
          <small className='text-align'>Intermediate</small>
          </div>
      </article>
      

      
      </div>
  </div>
  <div className="experience__backtend">
  <h3>Backend Developement</h3>
    <div className="experience__content">
      <article className="experience__details">
          <BsFillPatchCheckFill className='experience__details-icon'/>
          <div>
          <h4>C</h4>
          <small className='text-align'>Intermediate</small>
          </div>
      </article>
      
      
      <article className="experience__details">
          <BsFillPatchCheckFill className='experience__details-icon'/>
          <div>
          <h4>SQL</h4>
          <small className='text-align'>Basic</small>
          </div>
      </article>
      <article className="experience__details">
          <BsFillPatchCheckFill className='experience__details-icon'/>
          <div>
          <h4>Phyton</h4>
          <small className='text-align'>basic</small>
          </div>
      </article>
      
     
      </div>
  </div>

  <div className="experience__Anotherskill">
  <h3>Another Skill</h3>
    <div className="experience__content">
      <article className="experience__details">
          <BsFillPatchCheckFill className='experience__details-icon'/>
          <div>
          <h4>Tableau</h4>
          <small className='text-align'>Intermediate</small>
          </div>
      </article>
      
      <article className="experience__details">
          <BsFillPatchCheckFill className='experience__details-icon'/>
          <div>
          <h4>Cisco Packet Tracer</h4>
          <small className='text-align'>Intermediate</small>
          </div>
      </article>
      
      <article className="experience__details">
          <BsFillPatchCheckFill className='experience__details-icon'/>
          <div>
          <h4>Figma</h4>
          <small className='text-align'>Experience</small>
          </div>
      </article>
      <article className="experience__details">
          <BsFillPatchCheckFill className='experience__details-icon'/>
          <div>
          <h4>Photoshop</h4>
          <small className='text-align'>Intermediate</small>
          </div>
      </article>
</div>



      
      
      </div>
  </div>

</section>
)
}

export default Experience