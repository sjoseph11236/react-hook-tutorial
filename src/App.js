import React, { useState } from 'react';
function Todo(props) {
  const { todo, index } = props;
}
function App() {
  // Create state
  // use state has two vairables: value of the state, function to update the state
  const [todos, setTodos] = useState([
    {
      text: 'learn about React',
      isCompleted: false
    },
    {
      text: 'Build really cool todo app',
      isCompleted: false
    },
    {
      text: 'Meet friend for lunch',
      isCompleted: false
    }
  ]);

  return(
    <div className="app">
      <div className="todo-list">
        {/* map through all the todos */}
        {todos.map((todo, index) => (
          <Todo ket={index} index={index} todo={todo} />
        ))}
      </div>
    </div>
  )
}
export default App;
