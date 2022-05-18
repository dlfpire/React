import React from "react";

const people = [
    {name: 'Kim', age: 13},
    {name: 'lee', age: 24},
    {name: 'park', age: 22}
]
const Test = () => {
    return(
        <div>
            <h3>20세 이상인 사람의 이름을 번호를 붙여 디스플레이</h3>
            <ol>
               {people
               .filter(p=>p.age>=20)
               .map((p,id) => <li key={id}>{p.name}</li>)}
            </ol>
        </div>
    )
}

export default Test;