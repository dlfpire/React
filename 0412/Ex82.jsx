import React from 'react';

const Ex82 = () => {

  const change = () => {
    var span = document.getElementById("mySpan");
    span.style.color = "green";
    span.style.fontSize = "30px";
    span.style.display = "block";
    span.style.width = "6em";
    span.style.border = "3px dotted magenta";
    span.style.margin = "20px";
  }

  return (
    <div>
      <h3> CSS 스타일 동적 변경</h3>
      <hr />
      <p style={{ color: "blue" }} >
        이것은
        <span id="mySpan" style={{ color: "red" }} >
          문장입니다.</span>
      </p>
      <input type="button" value="스타일변경" onClick={change} />
    </div>
  )
}

export default Ex82;