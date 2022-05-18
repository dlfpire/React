// https://reactjs.org/docs/state-and-lifecycle.html

import ReactDOM from 'react-dom'

export default function App() {
  function tick() {
    const element = (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    );
    // ReactDOM.render(element, document.getElementById('root') );
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(element);
  }

  setInterval(tick, 1000);
}
  
// 이 코드는 App.js 파일에서 실행됨
// useState를 사용하지 않고, DOM을 직접적으로 접근함 (getElementById 사용)
// 비록 React 환경을 이용하고 있으나, 컴포넌트의 구조를 제대로 갖추지 못함 (return 없음)