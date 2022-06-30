import React from "react";
import UsersList from "./UsersList";
import TodoList from "./TodoList";

function App() {
  return (
    <>
    <div>
    <h2>Higher Order Component</h2>
      <div className="section">
        <div><UsersList/></div>
        <div><TodoList/></div>
      </div>
    </div>
    
    </>
  );
}

export default App;
