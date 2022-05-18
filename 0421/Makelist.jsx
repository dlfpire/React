import React from 'react';

const MakeList = ({items}) => {
    //컴포넌트의 리턴값은 jsx
    // var x = items.map((num) => num)
    const lis = items.map((el, index) => <li key={index} >{el}</li>)
    return(
        <div>
            <h3>Elements</h3>
            <ol>
                {/* <li>{x[0]}</li>
                <li>{x[1]}</li>
                <li>{x[2]}</li> */}
                {lis}
            </ol>
        </div>
    )
}

export default MakeList;