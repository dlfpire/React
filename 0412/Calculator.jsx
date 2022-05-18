import React, {useState} from 'react';

document.title = "Document";

const Calculator = () => {
    
    const [num, setNum] = useState({x:0, y:0, result:0})

    const xonChange = (e) => { setNum({...num, x: e.target.value}) }
    const yonChange = (e) => { setNum({...num, y: e.target.value}) }
    const numResult = (e) => { setNum({...num, result: parseInt(num.x) + parseInt(num.y)}) }

    return (
        <div>
            <h3>계산기 프로그램</h3>
            <p>더 하기</p>
            <hr/>
            <div>
                <input value={num.x} dir="rtl" onChange={xonChange} />
                &nbsp;+&nbsp;
                <input value={num.y} dir="rtl" onChange={yonChange} />
                &nbsp;
                <input type={'button'} value="=" onClick={numResult}/>
                &nbsp;
                <input value={num.result} readonly dir="rtl" />
            </div>
        </div>
    )
}

export default Calculator;