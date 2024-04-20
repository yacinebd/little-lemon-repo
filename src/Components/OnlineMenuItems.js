import greekSaladImg from "../icons_assets/greek salad.jpg"
import Bruchetta from "../icons_assets/bruchetta.svg"
import LemonDessert from '../icons_assets/lemon dessert.jpg'
import deliveryIcon from "../icons_assets/images/f21897ecfdee7d5927d1ec7b61408485ab9f6838.jpg"



const OnlineMenuItems = [{
    itemImg: greekSaladImg,
    itemName: "Greek Salad",
    itemPrice: "$ 12.99",
    itemDescription: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons",
    itemOrder: "Order for delivery",
    itemIcon: deliveryIcon
},{
    itemImg: Bruchetta,
    itemName: "Bruchetta",
    itemPrice: "$ 5.99",
    itemDescription:"Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    itemOrder: "Order for delivery",
    itemIcon: deliveryIcon
},{
    itemImg: LemonDessert,
    itemName: "Lemon Dessert",
    itemPrice: "$ 5.00",
    itemDescription: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    itemOrder: "Order for delivery",
    itemIcon: deliveryIcon
}]

export {OnlineMenuItems};



