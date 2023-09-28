import React from "react";

import ItemList from "./ItemList";

const Body = ({ items, handleCheck, handleDelete }) => {
  return (
    <div className="Body">
      {items.length ? (
        <ItemList
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
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
