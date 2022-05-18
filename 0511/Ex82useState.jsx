import { useReducer } from "react";

const initialState = { color: 'red'}

const reducer = (state, action) => {
    switch (action.type) {
        case 'spanStyle':
            return { color: "green", fontSize: "30px", display: "block", 
                width: "6em", border: "3px dotted magenta", margin: "20px" }
        default:
            throw new Error()
    }
}

const Ex82useState = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
      <h3> CSS 스타일 동적 변경</h3>
      <hr />
      <p style={{ color: "blue" }}>  이것은 <span style={state}> 문장입니다. </span> </p>
      <input type="button" value="스타일변경" onClick={() => dispatch({type: 'spanStyle'})} />
    </div>
  );
};

export default Ex82useState;