import React, {useState} from 'react';

const Mid2 = () => {
    const [style, setStyle] = useState({color:"red",size:""})

    return (
        <div>
            <h3> CSS 스타일 동적 변경</h3>
            <hr />
            <p style={{ color: "blue" }} >이것은
                <span style={{color:style.color, fontSize:style.size}} >문장입니다.</span>
            </p>
            <button onClick={()=>setStyle({color:"green", size:"30px"})}>스타일변경</button>
        </div>
    )
}

export default Mid2;