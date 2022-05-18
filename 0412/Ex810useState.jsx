import {useState} from 'react';

const Ex810 = () => {
  const [newDiv, setNewdiv] = useState(<div></div>)
  // const addedDiv = <div style="backgroundColor: yellow" onClick={() => useState('')}>새로 생성된 DIV 입니다.</div>
  
  const addedDiv = <div style={{backgroundColor: 'yellow'}}>새로 생성된 DIV 입니다.</div>
  
  // const addedDiv = <div style={{backgroundColor: 'yellow'}} 
  // onClick = {function () { this.parentElement.removeChild(this) }}>
  //   새로 생성된 DIV 입니다.</div>

  return (
    <div>
      <h3>DIV 객체를 동적으로 생성, 삽입, 삭제하는 예제</h3>
      <hr />
      <p>DOM 트리에 동적으로 객체를 삽입할 수 있습니다. 
         createElement(), appendChild(), removeChild() 메소드를 이용하여 
        새로운 객체를 생성,삽입, 삭제하는 예제입니다.</p>
      <a style={{color: 'blue', textDecoration: 'underline'}} 
        //  onClick={setNewdiv(addedDiv)} 
         onClick={() => setNewdiv(pre => <div> <div>{addedDiv}</div> {pre} </div>)} 
      >DIV 생성</a>

      {newDiv}

    </div>

  )
}

export default Ex810;

// 타입을 맞출것
// newDIv에 대한  onclick 핸들로 아직 구현 못함
// div로 둘러싼 것을 패턴 매칭으로 꺼낼 수 있나? 

