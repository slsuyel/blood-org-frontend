import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../home/Footer'


export default function WithOutnavbar() {
  return (
    <>
      <Header />
 
        <Outlet />

      <Footer />
    </>
  )
}
