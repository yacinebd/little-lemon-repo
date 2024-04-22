import React, { useState, useEffect, useRef } from 'react';
import "./DropDown.css";

function DropDown({ buttonImg, buttonText, items }) {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setMenuIsOpen(false); // Close the menu if click is outside of it
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setMenuIsOpen(false); 
  };

  return (
    <>
      <div className='dropdown-container' ref={dropdownRef}>
        <button className={`dropdown-toggle ${menuIsOpen ? 'open' : ''}`} onClick={toggleDropdown}>
          {buttonImg && <img src={buttonImg} alt="button-img" />}
          {selectedItem ? selectedItem : buttonText}
          <i className={`fa-solid fa-angle-${menuIsOpen ? 'up' : 'down'}`}></i>
        </button>
        <div className={`dropdown-menu ${menuIsOpen ? 'show' : ''}`}>
          <ul>
            {items.map((item, index) => (
              <li key={index} onClick={() => handleItemClick(item)}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default DropDown;
