import React from 'react'
import './Navbar.scss'
import SearchIcon from '@mui/icons-material/Search';
// import BadgeIcon from '@mui/icons-material/Badge';
// import Badge from '@mui/icons-material/Badge';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingCartOutlined from '@mui/icons-material/ShoppingCartOutlined';
// import { CardTravelOutlined, ShoppingCartOutlined } from '@mui/icons-material';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="left">
          <span className='english'>EN</span>
          <div className="search">
            <input className='searchInput' type="text" placeholder='search' />
            <SearchIcon className='searchIcon' />
          </div>
        </div>
        <div className="middle">
          <div className="mwrapper">
            BEST DEALS STANDS UP!
          </div>
        </div>
        <div className="right">
          <div className="register">Register</div>
          <div className="login">Login</div>
          <div className="cart">
            <ShoppingCartOutlined/>
            
          </div>
        </div>
      </div>

    </div>
  )
}

export default Navbar
