import React from 'react'

const Mailbox = () => {
    const messages = ['React', 'Re: React']
    return(
        <Mailbox1 unreadMessages={messages}/>
    )
}

const Mailbox1 = ({ unreadMessages }) => {
    return (
        <div>
            <hi>Hello!</hi>
            {unreadMessages.length > 0 &&
                <h2>
                    You have {unreadMessages.length} unread messages.
                </h2>
            }
        </div>
    )
}

export default Mailbox;