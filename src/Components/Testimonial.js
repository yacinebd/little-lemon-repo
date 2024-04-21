import React from 'react'
import ReviewCard from './ReviewCard';
import {reviews} from './reviews'
import "./Testimonials.css"


function Testimonial() {
  return (<>
  <div className='testimonials'>
    <h2 className='title'> Testimonials</h2>
    <div className='reviews {item.name}'>
    {reviews.map((item, index) => (
        <ReviewCard
        key= { index }
        picture= { item.picture }
        name = { item.name }
        comment = { item.comment}
        rating = { item.rating }
        />
    ))}
    </div>
    </div>
</>)
}

export default Testimonial;

