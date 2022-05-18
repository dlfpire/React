import React from 'react'
//
const StyeleChange = () => {
    return (
        <div>
            <h3>CSS 스타일 동적 변경</h3>
            <hr />
            <p style={{color:"blue"}}>이것은
                <span id="mySpan" style={{color:'red'}}>
                    문장입니다.
                </span>
            </p>
            
            <button>스타일변경</button>
        </div>
    );
}

export default StyeleChange