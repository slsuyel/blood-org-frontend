import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../home/Footer'


export default function WithOutnavbar() {
  return (
    <>
      <Header />
      <div className='my-5 pt-5'>
        <Outlet />
      </div>
      <Footer />
    </>
  )
}
