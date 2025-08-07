

import React, { useState } from "react";

const name = [
  "dehemi",
  "malee",
  "kasun",
  "dehemi4",
  "dehemi5",
  "amal"
];

const RandomName = () => {
  // useState hook must be inside the component function
  const [randomName, setRandomName] = useState("");

  const addtodo = () => {
    const randomIndex = Math.floor(Math.random() * name.length);
    setRandomName(name[randomIndex]);
  };

  const clearName = () => {
    setRandomName(""); // Clear the displayed random name
  };

  return (
    <div>
      <h2> <b>Random Name</b></h2>
      <button onClick={addtodo}>Add</button>
      <button onClick={clearName}>Clear</button>

      {randomName && <p>Random Name: {randomName}</p>}
    </div>
  );
};

export default RandomName;
