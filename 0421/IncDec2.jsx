import React, {useState} from 'react'

const IncDec2 = () => {
    const [num, setNum] = useState(0)
    console.log("[App] num = ", num);
    return (
        <div style={{textAlign:'center'}}>
            <div>{num}</div>
            <button onClick={() => setNum(num+1)}>더하기</button>
            &nbsp;
            <button onClick={() => setNum(num-1)}>빼기</button>
        </div>
    )
}

export default IncDec2