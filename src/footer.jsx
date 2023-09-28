import React from "react";

const Footer = ({ length }) => {
  return (
    <footer>
      <p style={{ fontSize: "17px" }}>
        You have {length} {length === 1 ? "task" : "tasks"} to do.
      </p>
    </footer>
  );
};

export default Footer;
