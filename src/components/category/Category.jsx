import React from 'react'
import { categories } from '../../data/Data'
import Categories from './Categories'

const Category = () => {
return(
    <div className="" style={{display : "flex"}}>
        {categories.map((items,index)=>{
            return(
                <Categories item = {items} key = {index}/>
            )
        })}
    </div>
)
}

export default Category
