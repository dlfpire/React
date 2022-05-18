const NumberList3 = () => <NumberListMain numbers={[6,7,8,9,10]} />

const NumberListMain = ({numbers}) =>
    <ul>
        {numbers.map((number) => <ListItem key={number.toString()} value={number} /> )}
    </ul>

const ListItem = ({value}) => <li> {value} </li>

export default NumberList3