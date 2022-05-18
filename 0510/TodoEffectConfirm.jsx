import { useEffect, useState } from 'react';

export default function TodoEffectConfirm() {
  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useState([])
  const [deletetoggle,setDeletetoggle] = useState(false)
  // const [num,setNum] = useState(0)

  const handleInput = e => { setTodo(e.target.value) }

  const handleAdd = e => {
    e.preventDefault();
    if (todo === "") return;
    setTodos(prevTodos => {
      return [...prevTodos, { id: todos.length + 1, title: todo, completed: false }]
    })
    // setNum(todos.filter(todo => !todo.complete).length+1)
    setTodo('')
  }

  const handleDelete = () => setDeletetoggle(!deletetoggle)

  const toggleTodo = (id) => {
    const newTodos = [...todos]
    const done = newTodos.find(todo => todo.id === id) 
    done.complete = !done.complete
    setTodos(newTodos)
  }

  useEffect(() => {
      if((todos.filter(e => e.complete)).length === 0) return;
      if (window.confirm("선택항목을 삭제하겠습니까?") === true) {
        setTodos(todos.filter(todo => !todo.complete))
        // setNum(todos.filter(todo => !todo.complete).length)
      }
      else {
        // const newTodos = [...todos].forEach(td => td.complete = false)
        //항목 선택 지워짐
        setTodos(newTodo => [...todos].forEach(td => td.complete = false))
      }
    
  },[deletetoggle])

  return (
    <div>
      <h3>Todo List</h3>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <input value={todo} onChange={handleInput} />
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleDelete}>Delete</button>
      <div> Numbers : {todos.filter(todo => !todo.completed).length} </div>
    </div>
  );
}


function TodoList({ todos, toggleTodo }) {
  return (
    todos.map(todo => {
      return <Todo
        key={todo.id}
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