import React from 'react';

const JSX3 = () => {

  const tick = () => {
    var x = new Date().toLocaleTimeString();
    console.log(x);
    const element = (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {x}.</h2>
      </div>
    );
    return element;
  }
  return (
    <div>
      {setInterval(tick, 1000)}
    </div>
  );
};


export default JSX3;

/* 변수 값의 변화가 Rendering에 적용되지 않는 예
 - 이 예에서 변수 x 는 현재의 시간을 닮고 있고, 1초에 한 번씩
   바뀌지만, 이 값은 제대로 rendering되지 않고 있다.
- 이 값의 변화되는 모습은 console에서 확인할 수 있음. 
*/
