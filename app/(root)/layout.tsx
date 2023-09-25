"use client"
import React from 'react'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

import Chart from '../../chart/App'
const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
    <Navbar/>
    <Chart/>
     {children}
    <Footer/>
    </>
  )
}


export default layout