import { useState } from 'react';

const TodoComplete2 = () => {
  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useState([])

  const handleInput = e => setTodo(e.target.value)  // String
  
  const handleAdd = e => {
    e.preventDefault();
    if (todo === "") return;
    // todo(스트링)를 object 형태(id, title, isDone)로 todos 배열에 저장 
    setTodos(prevTodos => 
      [...prevTodos, { id: todos.length + 1, title: todo, isDone: false }])
    setTodo('')
  }
  
  // 현 todos 원소 중 complete 되지 않은 것만을 선택 (delete 기능 구현)
  const handleDelete = () => setTodos(todos.filter(todo => !todo.isDone))
  
  const toggleTodo = (id) => {
    const newTodos = [...todos]
    const done = newTodos.find(todo => todo.id === id) // done is an object
    done.isDone = !done.isDone
    setTodos(newTodos)
  }

  return (
    <div>
      <h3>Todo List</h3>
      <TodoList todos={todos} toggleTodo={toggleTodo} /> {/* an array of <li> s */}
      <input value={todo} onChange={handleInput} />
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleDelete}>Delete</button>
      <div> Numbers : {todos.length}</div>
    </div>
  );
}

const TodoList = ({ todos, toggleTodo }) =>
// To make an array with <li> 
  todos.map((el,i) => 
    <li style={{listStyle: "none"}} key={el.title+i}>    {/* no bullet */}
        <input type="checkbox" checked={el.isDone} onChange={()=>toggleTodo(el.id)} />
        {el.title}
    </li>)

export default TodoComplete2; 

// TodoComplete를 수정
// Number 수를 todos의 길이로 표현함
// 단순한 표현을 위해서, 함수 정의에 return 등을 사용하지 않음.
// unique 한 key 값을 위해서 입력된 스트링(el.title)에 배열 index를 합쳐서 값으로 정함

// TodoList의 return 값은 <li> 태그로 감싸진 원소들의 배열 
// 배열을 처리할 때는  [...todos] 등으로 복사하여 새로운 배열을 만드는 것에 유의할 것.
// <input>의 "checkbox"에서 체크가 되었는 지의 여부는 checked 값 (Boolean) 으로 표현됨

// 두 상태 변수의 타입 :
//   todo는 String
//   todos는 객체(id, title, isDone)들의 배열
