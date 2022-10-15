import React from 'react'
import Products from './Products'
import { productData } from '../../data/Data'
import './Product.scss'

const Product = () => {
  return (
    <div className='mainproduct'>
      <div className="options">
        <div className="left">
          <h2>Men's cloth</h2>
          <div className="filter">
            <p>Sort by</p>
            <select className='selectsize' name="" id="">
              <option value="" selected disabled>size</option>
              <option value="">XL</option>
              <option value="">2XL</option>
              <option value="">3XL</option>
            </select>
            <select className='selectsize' name="" id="">
              <option value="" selected disabled>color</option>
              <option value="">Red</option>
              <option value="">Green</option>
              <option value="">Blue</option>
            </select>
          </div>
        </div>
        <div className="right">
          <h4>Sort by </h4>
          <select className='selectsz' name="" id="">
            <option value="" selected disabled>Price (Asc)</option>
            <option value="">100-500</option>
            <option value="">500-1000</option>
            <option value="">1000-2000</option>
          </select>
        </div>
      </div>
      <div className="subproduct">
        {productData.map((item) => {
          return (
            <Products items={item} />
          )
        })}
      </div>
    </div>
  )
}

export default Product
