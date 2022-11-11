import React from 'react'
import './footer.css'
import {AiFillLinkedin} from 'react-icons/ai'
import {BsWhatsapp} from 'react-icons/bs'
import {AiFillGithub} from 'react-icons/ai'

function footer() {
    return (
        <footer>
            <a href='#' className=''footer__logo>   </a>
            
            <ul className='permalinks'>
                <li><a href='#'>Home</a></li>
                <li><a href='#about'>About</a></li>
                <li><a href='#experiences'>Experience</a></li>
                <li><a href='#portofolio'>Portofolio</a></li>
                <li><a href='#contact'>Contact</a></li>
            </ul>

            <div className='footer__socials'>
                <a href='https://linked.com/edricpratamaw'><AiFillLinkedin/></a>
                <a href='https://wa.me/6281355161002' targets="_blank"><BsWhatsapp/></a>
                <a href='https://github.com'><AiFillGithub/></a>

            
            </div>
        
        </footer>

        
    )
}

export default footer