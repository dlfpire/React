import {useState} from 'react';

const Mount = () => {
    const [toggle, setToggle] = useState(true)
    
    return(
        <div>
            {toggle && <Comp1/>}
            <Comp2/>
            <button onClick={setToggle(!toggle)}>
                { toggle? "Unmount Comp1":"Mount Comp1" }</button>
        </div>
    )
    
}

const Comp1 = () => <h3>Comp1 is mounted</h3>
const Comp2 = () => <h3>Comp2 is mounted</h3>

export default Mount;





// const [btn, setbtn] = useState("Unmount Comp1")
// const handleClick = () => {
//     setToggle(!toggle)
//     toggle ? setbtn("Unmount Comp1") : setbtn("Mount Comp1")
// }
/* <button value={btn} onClick={handleClick}/> */