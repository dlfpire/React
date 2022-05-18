import React from 'react';

const JSX2 = () => {

  const hong = {
    firstName: 'Gildong',
    lastName: 'Hong'
  }

  const formatName = (user) => user.firstName + ' ' + user.lastName

  const greeting = (user) =>
    (user)
      ? <h1>Hello, {formatName(user)}!</h1>
      : <h1>Hello, Stranger.</h1>

  const element1 = (
    <h1 className="greeting">
      Hello, world!
    </h1>
  )

  const element2 = React.createElement(
    'h1',
    { className: 'greeting' },
    'Hello, world!'
  )

  return (
    <div>
      {element1}
      {element2}
      {greeting(hong)}
    </div>
  )
};

export default JSX2;

/*  Element 생성
 - greeting에서 JSX 는 일반 표현식과 동일한 형태로 사용된다.  
 - const1과 const2는 동일하다. 
  두번째 방법은 버그를 체크에 더 도움이 될 수 있다. 
 - element1에서 JSX의 속성을 정의할 때는 " " 을 사용한다. 
*/