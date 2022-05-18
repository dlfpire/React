import React from 'react';

const JSX1 = () => {

  // function formatName(user) {
  //   return user.firstName + ' ' + user.lastName;
  // }

  const formatName = (user) => user.firstName + ' ' + user.lastName

  const user = {
    firstName: 'Harper',
    lastName: 'Perez'
  }

  const element = (
    <h1>
      Hello, {formatName(user)}!
    </h1>
  )

  return (
    <div>
      {element}
    </div>
  )
};

export default JSX1;

/*  JSX 기본
 - JSX(jsxexp)는 JavaScript의 확장된 표현식(expression) 으로서, 
   기존 JS expression과 더불어 HTML 형태의 태그를 사용할 수 있다. 
 - JSX는 반드시 전체가 태그로 감싸진 형태를 표현하며, 그 안에 {jxsexp} 형태의
   표현이 사용되느데, 이는 eval(jsxexp) 의 값을 의미한다.
- jsxexp 의 태그는 내부적으로 javascript의 객체로 번역된다. 
  즉, jsxexp의 태그는 본질적으로 JS 객체로서, 단지 표현을 바꾼 것이다. 

*/