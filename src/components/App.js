import React from "react";
import { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const [isDarkMode, setDarkMode] = useState(true)
  const modeButtonText = isDarkMode ? "light mode" : "dark mode"
  const appClass = true ? "App dark" : "App light"
 
  const onToggleMode = () => {
    setDarkMode((isDarkMode) => !isDarkMode)
  }
  const handleClick = () => {
    //toggle the button to the opposite of itself
    //set up as it's own function iscase we want to add more to handleClick later on
    // then button can do multiple things 
    onToggleMode();
  }

  return (
    <div className={isDarkMode ? "App dark" : "App"}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>{modeButtonText}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
