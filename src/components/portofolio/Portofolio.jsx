import React from 'react'
import './portofolio.css'
import IMG1 from '../../Assets/portofolio1.png'
import IMG2 from '../../Assets/portofolio2.png'
import IMG3 from '../../Assets/portofolio3.png'
import IMG4 from '../../Assets/portofolio4.png'
import IMG5 from '../../Assets/portofolio5.png'
import IMG6 from '../../Assets/portofolio6.png'
import PaperRM from '../../Assets/Paper RM.pdf'


const portofolio = () => {
  return (
    <section id='portofolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portofolio__container">
        <article className='portofolio__item'>
          <div className='portofolio__item-image'>
            <img src={IMG1} alt=""/>
          </div>
          <h3>Project Database</h3>
          <div className='portofolio__item-cta'>
          <a href='https://github.com/Edricpw/Project-Database/tree/main/Project%20Database' className='btn' target='_blank'>Github</a>
          <a href='https://github.com/Edricpw/Project-Database/blob/main/Project%20Database/10Cases.sql' className='btn btn-primary' target='_blank'>10 Cases</a>
          </div>
        </article>

        <article className='portofolio__item'>
          <div className='portofolio__item-image'>
            <img src={IMG2} alt=""/>
          </div>
          <h3>Project Game Snake</h3>
          <div className='portofolio__item-cta'>
          <a href='https://github.com/Edricpw/Project-OOP-Snake' className='btn' target='_blank'>Github</a>
          <a href='https://github.com/Edricpw/Project-OOP-Snake/tree/main/Snake/src' className='btn btn-primary' target='_blank'>Snake Game Code</a>
          </div>
        </article>

        <article className='portofolio__item'>
          <div className='portofolio__item-image'>
            <img src={IMG3} alt=""/>
          </div>
          <h3>Sentiment Analysis on Social Media to Detect Toxic Comments</h3>
          <div className='portofolio__item-cta'>
            
          <a href='https://github.com/Edricpw/Research-Method-Code' className='btn' target='_blank'>Github</a>
          <a href={PaperRM} className='btn btn-primary' target='_blank'>Research Method Paper</a>
          </div>
        </article>

        <article className='portofolio__item'>
          <div className='portofolio__item-image'>
            <img src={IMG4} alt=""/>
          </div>
          <h3>SehatYuk! Prototype</h3>
          <div className='portofolio__item-cta'>
          <a href='https://www.figma.com/file/pTOaGZgOrmDHVPWDZcJH64/Solution-Sketch?node-id=0%3A1' className='btn' target='_blank'>Figma</a>
          <a href='https://www.figma.com/proto/pTOaGZgOrmDHVPWDZcJH64/Solution-Sketch?node-id=6%3A14&scaling=scale-down&page-id=0%3A1&starting-point-node-id=8%3A55' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portofolio__item'>
          <div className='portofolio__item-image'>
            <img src={IMG5} alt=""/>
          </div>
          <h3>Web for Diet</h3>
          <div className='portofolio__item-cta'>
          <a href='https://github.com/Edricpw/Project-Multimedia-Web-for-Diet' className='btn' target='_blank'>Github</a>
          <a href='https://wandasafira.github.io/project-multimedia.github.io/' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portofolio__item'>
          <div className='portofolio__item-image'>
            <img src={IMG6} alt=""/>
          </div>
          <h3>BT21 Animate</h3>
          <div className='portofolio__item-cta'>
          <a href='https://github.com/Edricpw/BT21-Animate-Project' className='btn' target='_blank'>Github</a>
          <a href='https://drive.google.com/file/d/1dIUwI6XyHsTgtkahBHBgmNeMNo85gyjt/view' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>    


      </div>
    </section>
  )
}

export default portofolio