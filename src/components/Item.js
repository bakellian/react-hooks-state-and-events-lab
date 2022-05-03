import React from "react";
import { useState } from "react";

function Item({ name, category }) {

  const [isInCart, setInCart] = useState(false)
  const modeButtonText = isInCart ? "Remove From Cart" : "Add to Cart"

  function handleClick() {
    // console.log('i was clicked')
    setInCart((isInCart) => !isInCart)
  }
  return (
    <li className={isInCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick} className="add">{modeButtonText}</button>
    </li>
  );
}

export default Item;
