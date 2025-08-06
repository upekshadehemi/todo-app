import React, { useState } from "react";

const name=[
  "dehemi",
  "malee",
  "kasun",
  "dehemi4",
  "dehemi5",
];
const app = () => {

const[randomName, setRandomName] = useState("");
const addtodo = () => {
 
  const randomIndex = Math.floor(Math.random() * name.length);
  setRandomName(name[randomIndex]);
}
 const clearName = () => {
    setRandomName(''); 
  };

  
return(
  <div>
    <h4>Random Name</h4>
    <button onClick={addtodo}>Add</button>
    <button onClick={clearName}>Clear</button>
     

    {randomName && <p>Random Name: {randomName}</p>}
  </div>
  
);
};
export default app;