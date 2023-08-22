import { useState } from "react";
import React from "react";

// const state = useState()

const App = () => {
  const [count, setcount] = useState(1);
  // let count = 1;
  const IncNum = () => {
    setcount(count + 1);
    console.log("clicked");
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={IncNum}> Click me</button>
    </div>
    
  );
};

export default App;
