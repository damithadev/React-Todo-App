import React from "react";
import { useState } from "react";
import Header from "./header";
import Footer from "./footer";
import Body from "./body";

function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: "one half pound bag of cocoa",
    },
    {
      id: 2,
      checked: false,
      item: "bread",
    },
    {
      id: 3,
      checked: false,
      item: "pizza",
    },
  ]);

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
    localStorage.setItem("taskList", JSON.stringify(listItems));
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    localStorage.setItem("taskList", JSON.stringify(listItems));
  };

  return (
    <div className="App">
      <Header title="To-do List" />
      <Body
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
