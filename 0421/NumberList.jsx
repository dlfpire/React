const NumberList = () => <NumberListMap numbers={[1,2,3,4,5]}/>

const NumberListMap = ({numbers}) => numbers.map(number => <li>{number}</li>)

export default NumberList