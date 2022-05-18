import { useEffect, useState } from 'react';

export default function TodoEffect() {
  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useState([])
  const [deletetoggle, setDeletetoggle] = useState(false)
  const [num, setNum] = useState(0)
  
  const handleInput = e => {
    setTodo(e.target.value)
  }

  const handleAdd = e => {
    e.preventDefault();
    if (todo === "") return;
    setTodos(prevTodos => {
      return [...prevTodos, { id: todos.length + 1, title: todo, completed: false }]
    })
    setTodo('')
  }

  const handleDelete = () => {
    
    setDeletetoggle(!deletetoggle)
  }

  const toggleTodo = (id) => {
    const newTodos = [...todos]
    const done = newTodos.find(todo => todo.id === id) // done is an object. reference type
    done.complete = !done.complete
    setTodos(newTodos)
  }
  
  useEffect( ()=> {
    if(deletetoggle === true) {
      if(window.confirm("선택 항목을 삭제하겠습니까?") === true) {
        const newTodos = todos.filter(todo => !todo.complete)
        setTodos(newTodos)
        setDeletetoggle(!deletetoggle)
        setNum(todos.filter(todo => !todo.complete).length)
      }
      else {
        const newTodos = [...todos]
        newTodos.forEach(td => td.complete = false)
        setTodos(newTodos)
        setDeletetoggle(!deletetoggle)
      }
    }
    else{}
  }, [deletetoggle])
  return (
    <div>
      <h3>Todo List</h3>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <input value={todo} onChange={handleInput} />
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleDelete}>Delete</button>
      <div> Numbers : {todos.filter(todo => !todo.complete).length}</div>
    </div>
  );
}


function TodoList({ todos, toggleTodo }) {
  return (
    todos.map(todo => {
      return <Todo
        key={todo.id} // Child가 여러 개이므로, 각 Todo 에 id가 주어짐
        todo={todo} toggleTodo={toggleTodo} />
    })
  )
}


function Todo({ todo, toggleTodo }) {
  const handleDoneClick = () => {
    toggleTodo(todo.id)
  }
  return (
    <div>
      <label>
        <input type="checkbox"
          checked={todo.complete}
          onChange={handleDoneClick} />
        {todo.title}
      </label>
    </div>
  )
}