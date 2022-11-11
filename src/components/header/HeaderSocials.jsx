import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsWhatsapp} from 'react-icons/bs'


const HeaderSocials = () => {
  return (
    <div className='header_socials'> 
    <a href='https://linked.com/edricpratamaw' targets="_blank"><BsLinkedin/></a>
    <a href='https://github.com' targets="_blank"><FaGithub/></a>
    <a href='https://wa.me/6281355161002' targets="_blank"><BsWhatsapp/></a>
    </div>
  )
}

export default HeaderSocials