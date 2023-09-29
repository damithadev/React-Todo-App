import React from "react";
import { useState } from "react";
import Header from "./header";
import AddItem from "./AddItem";
import Body from "./body";
import Footer from "./footer";

function App() {
  const [items, setItems] = useState(() => {
    const storedItems = JSON.parse(localStorage.getItem("taskList"));
    return storedItems || []; // If no items are in localStorage, initialize as an empty array
  });

  const [newItem, setNewItem] = useState("");

  const setAndSaveItems = (newItems) => {
    setItems(newItems);
    localStorage.setItem("taskList", JSON.stringify(newItems));
  };

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    setAndSaveItems(listItems);
  };

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setAndSaveItems(listItems);
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setAndSaveItems(listItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    //addItem
    addItem(newItem);
    setNewItem("");
  };

  return (
    <div className="App">
      <Header title="To-do App" />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
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
