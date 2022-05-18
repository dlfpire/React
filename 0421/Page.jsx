import React, { useState } from 'react'

const Page = () => {
    const [show, setShow] = useState({showWarning: true})
    const handleToggleClick = () => setShow({showWarning: !show.showWarning})

    return(
        <div>
            <WarningBanner warn={show.showWarning}/>
            <button onClick={handleToggleClick}>
                {show.showWarning ? 'Hide' : 'Show'}
            </button>
        </div>
    )
}

const WarningBanner = ({ warn }) => warn
    ? null
    : <div style={{backgroundColor: 'red', textAlign: 'center', fontSize: '14px'}}>
       &nbsp;
    </div>
    
export default Page