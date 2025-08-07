

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TodoApp from "./input";
import Navbar from "./navbar";
import RandomName from "./radomname";



const App = () => {
   
  

  return (

    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/input" element={<TodoApp />} />
           <Route path="/randomname" element={<RandomName />} />
          
          
        </Routes>
      </Router>
      

     
    
    </div>
  );
};

export default App;
