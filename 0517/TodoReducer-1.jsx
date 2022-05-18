import { useReducer } from 'react';

// 입력 : handleInput, handleAdd
// 처리 완료 : togggleTodo, handleDoneTodo
//  toggleTodo에서 todos가 사용되므로, toggleTodo를 Todo 컴포넌트에 넣을 수 없음
//  toggleTodo 은 top-level에서 정의되어, TodoList -> Todo 로 패스됨
// 삭제 : handleDelete

const initialState = { todo: "", todos: [] }

const reducer = (state, action) => {
  switch (action.type) {
      case "Add" :
          if(action.value === "")
            return state
          return {
            ...state,
            todos: [...state.todos, {id: state.todos.length + 1, title: state.todo, completed: false }]
          }
      
      case "Input":
        return { 
          ...state,
          todo: action.value 
        }

      case "Delete" :
          return {
            ...state,
            todos: state.todos.filter(todo => !todo.completed)
          }

      case "Toggle":
          return {
            ...state,
            todos: state.todos.map((p) => {
              if(p.id === action.value) {
                return {
                  ...p,
                  completed: !p.completed
                }
              }
              else {
                return p
              }
            })
           
          }
      default:
          throw state
  }
}

export default function TodoComplete() {

  const [state, dispatch] = useReducer(reducer, initialState)
  
  const handleInput = e => { dispatch({type: "Input", value: e.target.value}) }

  const handleAdd = e => {
    e.preventDefault();
    dispatch({type: "Add"})
    dispatch({type: "Input", value: ""})
  }

  const toggleTodo = (id) => { dispatch({type:"Toggle", value: id}) }

  return (
    <div>
      <h3>Todo List</h3>
      <TodoList todos={state.todos} toggleTodo={toggleTodo} />
      <input value={state.todo} onChange={handleInput} />
      <button onClick={handleAdd}>Add</button>
      <button onClick={()=>dispatch({type: "Delete"})}>Delete</button>
      <div> Numbers : {state.todos.filter(todo => !todo.complete).length}</div>
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