import React, { useState } from 'react';
import './App.css';

function Todo({todo, index}) {
  return(
    <div className="todo">{todo.text}</div>
  )
}

// A form component
function TodoForm({ addTodo }) {
  const [value, setValue ] = useState('');

  const handleSubmit = e => {
    e.prventDefault();
    if(!value) return;
    addTodo(value);
    //Clears the form
    setValue('');
  }

  return(
    <Form onSubmit={handleSubmit}>
      <input type="text" className='input' value={value} onChange={e => setValue(e.target.value)}/>
    </Form>
  )
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

  const addTodo = text => { 
    const newTodos = [...todos, { text }]
    setTodos(newTodos);
  }

  return(
    <div className="app">
      <div className="todo-list">
        {/* map through all the todos */}
        {todos.map((todo, index) => (
          <Todo ket={index} index={index} todo={todo} />
        ))}
        <TodoForm addTodo={addTodo}/>
      </div>
    </div>
  )
}
export default App;
