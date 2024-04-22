import React from 'react'
import BookingForm from './BookingForm'
import NavBar from "./NavBar"
import Footer from "./Footer"
import ResPic from "../icons_assets/restaurant.jpg"
import "./BookingPage.css"

function BookingPage() {
  return (<>
    <NavBar />
    <header className='reservation'>
            <img className='header-img' src ={ ResPic} alt="restaurant terrace"/>
            <h2 className='reserve-a-table'>Reservation</h2>
            <h3 className='Book-a-res'>Book a reservation at little lemon restaurant</h3>
    </header>
    <BookingForm/>
    <div className='Book-footer'>
    <Footer/>
    </div>
 </> )
}

export default BookingPage