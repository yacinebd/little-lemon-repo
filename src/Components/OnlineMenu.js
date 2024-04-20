import MenuItemCard from "./MenuItemCard";
import { OnlineMenuItems } from "./OnlineMenuItems";
import "./OnlineMenu.css"
import React from 'react';

function OnlineMenu() {
  return (
    <div className="online-menu">
      <h2 className="menu-special">This week Special!</h2>
      <div className="menu-card">
        {OnlineMenuItems.map((item, index) => (
          <MenuItemCard
            key={index}
            itemImg={item.itemImg}
            itemName={item.itemName}
            itemPrice={item.itemPrice}
            itemDescription={item.itemDescription}
            itemOrder={item.itemOrder}
            itemIcon={item.itemIcon}
          />
        ))}
      </div>
    </div>
  );
}

export default OnlineMenu;
