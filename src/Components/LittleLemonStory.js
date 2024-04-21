import React from 'react'
import "./LittleLemonStory.css"
import Mario from "../icons_assets/Mario and Adrian A.jpg"
import Adrian from "../icons_assets/Mario and Adrian b.jpg"

function LittleLemonStory() {
  return (
    <div className='little-lemon-story'>
        <h2 className='res-title'>Little Lemon</h2>
        <h3 className='res-city'>Chicago</h3>
        <p className='res-story'>"Welcome to Little Lemon, where Mediterranean flavors meet Italian charm! Founded by brothers Mario and Adrian, hailing from Italy, our restaurant is a homage to their homeland's vibrant cuisine. With fresh ingredients and recipes inspired by their upbringing, we bring a taste of the Mediterranean to the heart of the US. Indulge in our delectable dishes, crafted with passion and served with a side of warm hospitality. Join us on a culinary journey where every bite tells a story of tradition, family, and love."</p>
        <img className='res-owner1' src={ Mario } />
        <img className='res-owner2' src={ Adrian }/>
    </div>
  )
}

export default LittleLemonStory