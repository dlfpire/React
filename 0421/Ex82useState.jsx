import React, {useState} from 'react';

const Ex82useState = () => {
    const [spanstyle, setSpanstyle] = useState({color:'red'})
    const newStyle = { color: "green", fontSize: "30px", display: "block", width: "6em", border: "3px dotted magenta", margin: "20px" }
    return (
        <div>
            <h3>CSS 스타일 동적 변경</h3>
            <hr/>
            <p style={{color:"blue"}}>이것은
                <span style={spanstyle}> 문장입니다.</span>
            </p>
            <input type={"button"} value="스타일변경" onClick={()=>setSpanstyle(newStyle)}/>
        </div>
    );
};

export default Ex82useState;