import React from 'react'
import DropDown from './DropDown';
import guests from  "../icons_assets/images/icons8-bridesmaid-96.png"


function DropDownGuests() {
    const buttonImg = guests
    const buttonText = "Select Guests #";
    const items = ["2", "4", "6", "8", "10", "12"];

    return (
      <div className="guests">
        <DropDown buttonImg={buttonImg} buttonText={buttonText} items={items} />
      </div>
    );
  }

export default DropDownGuests