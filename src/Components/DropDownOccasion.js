import React from 'react'
import DropDown from './DropDown';
import glass from  "../icons_assets/images/birthday deco.png"
function DropDownOccasion() {
    const buttonImg = glass
    const buttonText = "Select an occasion";
    const items = ["Birthday", "Engagement", "Anniversary", "Family Gathering", "Date Night"];

    return (
      <div className="occassion">
        <DropDown buttonImg={buttonImg} buttonText={buttonText} items={items} />
      </div>
    );
  }

export default DropDownOccasion