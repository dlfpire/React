import { useEffect, useState } from 'react';

export default function TodoEffectConfirm() {
  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useState([])
  const [toggle,setToggle] = useState(false)

  useEffect(() => {
    if((todos.filter(e => e.completed)).length === 0) return;
    (window.confirm("선택 항목을 삭제하겠습니까?"))
        ? setTodos(todos.filter(todo => !todo.completed))
        : setTodos(prev => [...prev].map(e => ({...e, completed: false})))
        //e: 객체 e의 요소를 다 받아와서 completed 다시 정의
  }, [toggle])

  const handleInput = e => { setTodo(e.target.value) }

  const handleAdd = e => {
    e.preventDefault();
    if (todo === "") return;
    setTodos(prevTodos => {
      return [...prevTodos, { id: todos.length + 1, title: todo, completed: false }]
    })
    setTodo('')
  }

  const handleDelete = () => setToggle(!toggle)

  const toggleTodo = (id) => {
    const newTodos = [...todos]
    const done = newTodos.find(todo => todo.id === id) 
    done.completed = !done.completed
    setTodos(newTodos)
  }

  return (
    <div>
      <h3>Todo List</h3>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <input value={todo} onChange={handleInput} />
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleDelete}>Delete</button>
      <div> Numbers : {todos.filter(todo => !todo.completed).length}</div>
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
            checked={todo.completed}
            onChange={handleDoneClick} />
          {todo.title}
        </label>
      </div>
    )
  }