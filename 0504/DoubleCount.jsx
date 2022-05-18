import { useState, useEffect } from "react";

const DoubleCount = () => {
    const [count, setCount] = useState(0);
    const [calculation, setCalculation] = useState(0);

    useEffect(()=> {
        setCalculation(()=> count*2);
    }, []);

    return(
        <>
            <p>Count:{count}</p>
            <button onClick={()=> setCount((c)=>c+1)}>+</button>
            <p>Calculation: {calculation}</p>
        </>
    )
}

export default DoubleCount