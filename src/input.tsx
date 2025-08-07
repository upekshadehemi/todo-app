import React, { useState } from 'react';

const TodoApp = () => {
  
  const [todos, setTodos] = useState<string[]>([]);
  
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim() === '') return; 

    if(todos.length >= 3) {
        alert("todo list is full");
        return;
    }
  const updatedTodos = [...todos, newTodo.trim()];
    setTodos(updatedTodos);  

    setNewTodo(''); 
  };

  return (
    <div>
      <h1>Todo App </h1>
      <input 
        type="text" 
        placeholder="Enter todo" 
        value={newTodo} 
        onChange={e => setNewTodo(e.target.value)} 
      />
      <button onClick={addTodo}>Add</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>  
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
