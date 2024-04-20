import React from 'react'
import "./MenuItemCard.css"
import {OnlineMenuItems} from "../Components/OnlineMenuItems"

function MenuItemCard({ itemImg, itemName, itemPrice, itemDescription, itemOrder, itemIcon }) {
  return (
    <>
    <div className='menu-item-card'>
        <img className='item-img' src={itemImg} alt={itemName} />
        <div className='item-details'>
            <h2 className='item-name'>{itemName}</h2>
            <p className='item-price'>{itemPrice}</p>
            <p className='item-description'>{itemDescription}</p>
            <button className="order-btn">
            {itemOrder}
            <img src={itemIcon} alt="Order Icon" />
            </button>
        </div>
    </div>
    </>
  )
}

export default MenuItemCard