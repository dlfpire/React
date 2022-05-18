import React from 'react'

const JSX2 = () => {
    
    const hong = {
        firstName: 'Hong',
        lastName: 'Gildong'
    }

    const formatName = (user) => user.firstName + ' ' + user.lastName

    const greeting = (user) => {
        (user)
          ? <h1>Hello, {formatName(user)}!</h1>
          : <h1>Hello, Stranger.</h1>
      }

    const element1 = (
        <h1 className="greeting">
            Hello, world!
        </h1>
    )

    const element2 = React.createElement(
        'h1',
        {className:'greeting'},
        'Hello, world!'
    )

    return(
        <div>
            {element1}
            {element2}
            {greeting(hong)}
        </div>
    )
}

export default JSX2