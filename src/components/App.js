import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Header from "./Header";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  return (
    <div className={(isDarkMode ? "App dark" : "App")}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick}/> 
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
