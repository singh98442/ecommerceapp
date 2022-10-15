import React from 'react'
import './Products.scss'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const Products = ({items}) => {
    return (
        <div className='product'>
            <div className="wrapper">
                <div className="productContent">
                    <img className="productImage" src={items.imgs} alt="" />
                    <div className="icons">
                        <div className="cart">
                            <ShoppingCartOutlinedIcon style={{"font-size" : "2rem"}} />
                        </div>
                        <div className="cart">
                            <FavoriteOutlinedIcon style={{"font-size" : "2rem"}} />
                        </div>
                        <div className="cart">
                            <SearchOutlinedIcon style={{"font-size" : "2rem"}}/>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Products
