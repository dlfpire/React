import React from 'react';

const Ex810 = () => {
  return (
    <div>
      <CreateH3 />
      <CreateHr />
      <CreateP />
      <CreateA />
    </div>
  )
}

const CreateH3 = () => <h3>DIV 객체를 동적으로 생성, 삽입, 삭제하는 예제</h3>

const CreateHr = () => <hr />

const CreateP  = () => <p>DOM 트리에 동적으로 객체를 삽입할 수 있습니다. 
                        createElement(), appendChild(), removeChild() 메소드를 이용하여 
                        새로운 객체를 생성,삽입, 삭제하는 예제입니다.
                        </p>

const CreateA  = () => <a 
style={{color: 'blue', textDecoration: 'underline'}}
onClick={() => {
    var obj = document.getElementsByTagName("body")[0];
    var newDIV = document.createElement("div");
    newDIV.innerHTML = "새로 생성된 DIV입니다.";
    newDIV.setAttribute("id", "myDiv");
    newDIV.style.backgroundColor = "yellow";
    // newDIV.onclick = function () { var p = this.parentElement;  p.removeChild(this); };
    newDIV.onclick = (e) => { var p = e.currentTarget.parentElement; p.removeChild(e.currentTarget); };
    obj.appendChild(newDIV);
  }
}
>DIV 생성</a>

export default Ex810;

// Anchor 에서 "javascript:createDiv()" 가 제대로 작동되지 않아서
// onclick 이벤트와 style.color 및 style.textDecoration 를 이용함.
// onClick 을 람다 함수로 표현할 때, this을 사용하지 못하므로 event 파라메터를 사용하고
// this 대신 e.currentTarget 으로 표현함.

