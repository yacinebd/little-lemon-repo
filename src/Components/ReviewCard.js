import React from "react";
import "./ReviewCard.css"

function ReviewCard( { picture, name, comment } ) {
    return (<>
      <div className='card'>
          <img className='testimonial-img' src={ picture } />
          <p className='testimonial-name'>{ name }</p>
          <p className='testimonial-comment'>{ comment }</p>
          <div className='testemonial-rating'>
          <i id="1" class="fa-solid fa-star"></i>
          <i id="2" class="fa-solid fa-star"></i>
          <i id="3" class="fa-solid fa-star"></i>
          <i id="4" class="fa-solid fa-star"></i>
          <i id="5" class="fa-solid fa-star"></i>
          </div>
      </div>
   </> )
  }

  export default ReviewCard;