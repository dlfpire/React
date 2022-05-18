import { useReducer } from 'react';

// 입력 : handleInput, handleAdd
// 처리 완료 : togggleTodo, handleDoneTodo
//  toggleTodo에서 todos가 사용되므로, toggleTodo를 Todo 컴포넌트에 넣을 수 없음
//  toggleTodo 은 top-level에서 정의되어, TodoList -> Todo 로 패스됨
// 삭제 : handleDelete

const initialStateTodo = { todo: "" }
const initialStateTodos = { todos: [] }

const reducerTodo = (stateTodo, action) => {
    switch (action.type) {
        case "Input":
            return { todo: action.value}
        
        default:
            throw stateTodo
    }
}

const reducerTodos = (stateTodos, action) => {
    switch (action.type) {
        case "Add":
            if(action.value === "")
            return stateTodos
            return {
            todos: [...stateTodos.todos, {id: stateTodos.todos.length + 1, title: action.value, completed: false }]
            }

        case "Delete" :
            return {
            todos: stateTodos.todos.filter(todo => !todo.completed)
            }

        case "Toggle":
            return {
            todos: stateTodos.todos.map((p) => {
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
            throw stateTodos
    }
}

export default function TodoComplete() {
    
    const [stateTodo, dispatchTodo] = useReducer(reducerTodo, initialStateTodo)
    const [stateTodos, dispatchTodos] = useReducer(reducerTodos, initialStateTodos)

    const handleInput = e => { dispatchTodo({type: "Input", value: e.target.value}) }

    const handleAdd = e => {
        e.preventDefault();
        dispatchTodos({type: "Add", value: stateTodo.todo})
        dispatchTodo({type: "Input", value: ""})
    }

    const toggleTodo = (id) => { dispatchTodos({type:"Toggle", value: id}) }

    return (
        <div>
        <h3>Todo List</h3>
        <TodoList todos={stateTodos.todos} toggleTodo={toggleTodo} />
        <input value={stateTodo.todo} onChange={handleInput} />
        <button onClick={handleAdd}>Add</button>
        <button onClick={()=>dispatchTodos({type: "Delete"})}>Delete</button>
        <div> Numbers : {stateTodos.todos.filter(todo => !todo.complete).length}</div>
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