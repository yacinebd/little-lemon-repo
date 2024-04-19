import React from 'react'
import "./Header.css"
import img from '../icons_assets/restauranfood.jpg'

function Header() {
  return (
    <>
    <header>
        <div className='header-content'>
        <h2 className='header-title'>Little Lemon</h2>
        <h3 className='header-subtitle'>Chicago</h3>
        <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        <button>Reserve a table</button>
        <img className="header-img"src={img} />
        </div>
    </header>
    </>
  )
}

export default Header