import "./BookingConfirmation.css"
import React from 'react'
import BookingForm from './BookingForm'
import NavBar from "./NavBar"
import Footer from "./Footer"
import ResPic from "../icons_assets/restaurant.jpg"
import "./BookingConfirmation.css"

function BookingPage() {
  return (<>
    <NavBar />
    <header className='reservation'>
            <img className='header-img' src ={ ResPic} alt="restaurant terrace"/>
    </header>
    <div className="booking-confirmation">
        <p className="a">Thank you!</p>
        <p className="b">Your table is reserved.</p>
        <p className="c">A confirmation email has been sent tou you. Thank you for planning
        a visit with us. We can’t wait to make you feel special!</p>
    </div>
    <div className='Book-footer'>
    <Footer/>
    </div>
 </> )
}

export default BookingPage