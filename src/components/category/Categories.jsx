import React from 'react'
import './Categories.scss'

const Categories = ({item, key}) => {
  return (
    <div className='categories'key={key}>
        <div className="wrapper">
            <div className="items">
                <img className='catimg' src={item.img} alt="" />
                <h2 className='title'>{item.title}</h2>
                <button className='btn'>see more</button>
            </div>
        </div>
      
    </div>
  )
}

export default Categories
