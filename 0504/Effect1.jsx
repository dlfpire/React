import { useState, useEffect } from "react";

const Effect1 = () => {
    const [count, setCount] = useState(0)

    useEffect(()=> {
        console.log("count = ", count)
        document.title = `${count} times in title`
    })

    return(
        <div>
            {console.log('in return')}
            <p>You clicked {count} times</p>
            <button onClick={()=>setCount(count+1)}>Click me</button>
        </div>
    )
}
export default Effect1