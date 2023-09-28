import React from "react";
import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

const Body = () => {
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
  };

  return (
    <div className="Body">
      <ul>
        {items.map((item) => (
          <li className="item" key={item.id}>
            <input
              type="checkbox"
              checked={item.checked}
              onChange={() => handleCheck(item.id)}
            />
            <label>{item.item}</label>
            <FaTrashAlt role="button" tabIndex="0" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Body;
