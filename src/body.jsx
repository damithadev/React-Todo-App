import React from "react";
import { FaTrashAlt } from "react-icons/fa";

const Body = ({ items, handleCheck, handleDelete }) => {
  return (
    <div className="Body">
      {items.length ? (
        <ul>
          {items.map((item) => (
            <li className="item" key={item.id}>
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => handleCheck(item.id)}
              />
              <label
                style={item.checked ? { textDecoration: "line-through" } : null}
                onDoubleClick={() => handleCheck(item.id)}
              >
                {item.item}
              </label>
              <FaTrashAlt
                role="button"
                tabIndex="0"
                onClick={() => handleDelete(item.id)}
              />
            </li>
          ))}
        </ul>
      ) : (
        <p
          style={{
            marginTop: "10rem",
            fontSize: "17px",
            textAlign: "center",
          }}
        >
          Your task list is empty. {<br />}Time to add some tasks and stay
          productive
        </p>
      )}
    </div>
  );
};

export default Body;
