import React from 'react'
import "./Footer.css"
import Restaurant from "../icons_assets/restaurant.jpg"
import FB from "../icons_assets/images/icons8-facebook-250.png"
import Insta from "../icons_assets/images/icons8-instagram-250 (2).png"
import Twit from "../icons_assets/images/icons8-twitter-250 (1).png" 

function Footer() {
  return (
    <div className='footer'>
        <div className='footer-img'>
            <img className='res-img' src={Restaurant} />
        </div>
        <div footer-links >
            <p className='footer-title'>Little Lemon</p>
        <div className='links'>  
            <a href="/">About</a>
            <a href="/">Menu</a>
            <a href="/">Reservation</a>
            <a href="/">Testimonial</a>
            <a href="/">Contact</a>
            </div>  
        </div>
        <div className="contact">
            <p className='footer-contact'>Contacts</p>
            <p className="address">You may want to
                                   also visit us at
                                   331 E ChicagoLaSalle Street Chicago, Illinois 60602USA
            </p>
            <p className='email'>Littlelemon@gmail.com</p>
            <p className='tel'>908 - 1111 - 111</p>
        </div>
        <div className='sm'>
        <p className='Social-Media'>Social Media</p>
        <a href="/"><img className="fb" src={FB} /></a>
        <a href="/"><img className="insta" src={Insta} /></a>
        <a href="/"><img className="twit" src={Twit} /></a>
        </div>
        <p className='rights'>©Littlelemon.allrightsreserved</p>
    </div>
  )
}

export default Footer