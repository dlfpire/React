// clock1.jsx 에서 useState를 이용하도록 수정됨.
// Clock 컴포넌트 내에서 setInterval의 수행과 업데이트가 모두 처리되도록 캡슐화 됨. 
// 완벽한 모습의 컴포넌트.

import {useState} from 'react';

const Clock2 = () => {
  const [now, setNow] = useState(new Date().toLocaleTimeString())
  setInterval(() => setNow(new Date().toLocaleTimeString()), 1000)
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {now}</h2>
    </div>
    );
};

export default Clock2;