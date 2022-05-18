const NumberList2 = () => <NumberListKey numbers={[10,20,30,40,50]}/>

const NumberListKey = ({numbers}) => numbers.map(
    (number) => <ListItem key={number.toString()} value={number}/>
)

const ListItem = ({value}) => <li>{value}</li>

export default NumberList2