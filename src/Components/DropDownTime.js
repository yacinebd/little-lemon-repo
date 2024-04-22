import React from 'react'
import DropDown from './DropDown';
import clock from "../icons_assets/images/clock.png"
function DropDownTime() {
    const buttonImg = clock
    const buttonText = "Select Time";
    const items = ["18:00","18:30","19:00","19:30","20:00","20:30","21:00","21:30","22:00"];

    return (
      <div className="time">
        <DropDown buttonImg={buttonImg} buttonText={buttonText} items={items} />
      </div>
    );
  }

export default DropDownTime