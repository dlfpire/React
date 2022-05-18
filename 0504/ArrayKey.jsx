const ArrayKey = () => {
    const arr = [
        {id: 1, name: 'kim'},
        {id: 2, name: 'lee'}
    ]
    const lis = arr.map(ele => <li key={ele.id}>{ele.name}</li>)
    const arr2 = [<li key={1}>{10+10}</li>]
}