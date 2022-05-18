import {useState} from 'react';

const Conditional = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <div>  
      {1+2}                    {/* display 됨 */} <br />
      {toggle}                 {/* boolean 값은 그 자체로는 display 되지 않음 */}
      {toggle.toString()}      {/* display 됨 */}
      {toggle && <p>hello</p>} {/* if - then 형태 */}
      {toggle || <p>안녕</p>}   {/* if - then 형태 */}
      {toggle ? <p>hello</p> : <p>안녕</p>}  {/* if - then - else 형태 */}
      <button onClick={() => setToggle(!toggle)}> True/False 변경 </button>
    </div>
  );
};

export default Conditional;

// JSX 에서만 통용되는 표현식의 의미
// 1. {number} : 정상적으로 display 됨
// 2. {boolean} : display 되지 않음
//   boolean 값을 display하고 싶을 때는 boolValue.toString() 처럼 string으로 변환하여 표현

// and(&&) 와 or(||) 는  if-then 의 의미로 사용될 수 있음 

// {toggle && <p>hello</p>} 의 값은 true/false 이지만, 이 값으로 디스플레이되지 않음
// 다음과 같은 형태로 display 됨
// if (toggle is true) then <p>hello</p> 

// {toggle || <p>안녕</p>} 
// if (toggle is false) then <p>안녕</p> 

// {toggle ? <p>hello</p> : <p>안녕</p>}
// if (toggle is true) then <p>hello</p> else <p>안녕</p>} 

// JSX 내에서 if-then, if-then-else 형태로 디스플레이할 때 사용할 수 있음
