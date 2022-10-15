import React from 'react'
import Announcement from '../../components/announcement/Announcement'
import Category from '../../components/category/Category'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import Newsletter from '../../components/newsletter/Newsletter'
import Product from '../../components/product/Product'
import Slide from '../../components/slide/Slide'
import './home.scss'

const Home = () => {
  return (
    <div className='home'>
      <Announcement/>
      <Navbar/>
      <Slide/>
      <Category/>
      <Product/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default Home
