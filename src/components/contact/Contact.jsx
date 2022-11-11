 import React from 'react'
 import './contact.css'
 import {MdOutlineEmail} from 'react-icons/md'
 import{AiOutlineLinkedin} from 'react-icons/ai'
 import {BsWhatsapp} from 'react-icons/bs'


 const Contact = () => {
   return (
     <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>edric2002pratama@gmail.com</h5>
            <a href='mailto:edric2002pratama@gmail.com'>Send a Message</a>
          </article>

          <article className='contact__option'>
            <AiOutlineLinkedin className='contact__option-icon'/>
            <h4>Linkedin</h4>
            <h5>Edric Pratama Widjaja</h5>
            <a href='www.linkedin.com/in/edricpratamaw'>Send a Message</a>
          </article>

          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+6281355161002</h5>
            <a href='https://wa.me/6281355161002'>Send a Message</a>
          </article>

        </div>
      {/*END OF CONTACT OPTION}*/}
      


      </div>
     </section>
   )
 }
 
 export default Contact
