import React from "react";
import { useState } from "react";
import Header from "./header";
import Footer from "./footer";

function App() {
  const [name, setName] = useState("damitha");

  const changeName = () => {
    setName("Jay");
  };

  return (
    <div className="App">
      <Header />
      <button onClick={changeName}>Click </button>
      <p>
        Hello <b>{name}</b>
      </p>
      <Footer />
    </div>
  );
}

export default App;
