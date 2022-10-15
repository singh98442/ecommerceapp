import React from 'react'
import './Newsletter.scss'

const Newsletter = () => {
  return (
    <div className='newsletter'>
        <div className="wrapper">
            <h1 className='title1'>NEWSLETTER</h1>
            <h2 className='title2'>Lorem ipsum dolor sit amet consectetur adipisicing.</h2>
            <div className="search">
                <input className='responseemail' type="email" placeholder='email' />
                <button className='btn'>send</button>
            </div>
        </div>
      
    </div>
  )
}

export default Newsletter
