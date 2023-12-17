import React, { useState } from 'react'
import {Outlet} from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

const HomeLayout = () => {
    const [search,setSearch]=useState('');
  return (
    <div>
       
        <Header  />
            <div className='homeContainer'>
            <Outlet />
            </div>
        <Footer />
    </div>
  )
}

export default HomeLayout