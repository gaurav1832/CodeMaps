"use client"
import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Cards from '@/components/Cards'
import Chart from '../../chart/App'
const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
    <Navbar/>
    <Chart/>
     {children}
      <Cards/>
     <Footer/>
    </>
  )
}


export default layout