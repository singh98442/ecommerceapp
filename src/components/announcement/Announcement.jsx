import React, { useState } from 'react'
import './Announcement.scss'
import CloseIcon from '@mui/icons-material/Close';

const Announcement = () => {

    const [display, setDisplay] = useState(true)

    const displayHandle=()=>{
        setDisplay(false)
    }
  return (
    <div className="announcement">
        <div className="wrapper">
            <div className={display?"announceDisplay":"displayOff"}>
                <h2 className='offer'>Hey, Buddy, Its 40% off today, Hurry Up?</h2>
                <span onClick={displayHandle}><CloseIcon className='cross'/></span>

            </div>
        </div>
      
    </div>
  )
}

export default Announcement
