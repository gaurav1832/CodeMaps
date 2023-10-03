"use client"
import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Cards from '@/components/Cards'
import CardGrid from '@/components/CardGrid'
import Chart from '../../chart/App'
import JsonDataDisplay from '@/components/dataTable'
import { ChakraProvider } from '@chakra-ui/react'
import StepperElement from '@/components/StepperElement'
import Tab from '@/components/Tab'
import Table from '@/components/Table/index'

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ChakraProvider>
    <Navbar/>
    <Chart/>
     {children}
    
    <section className="nav-padding w-full">
         <StepperElement/>
      </section>

     <section className="nav-padding w-full">
        <div className="flex-center relative min-h-[274px] w-full flex-col rounded-xl bg-banner bg-cover bg-center text-center">
          <h1 className="sm:heading1 heading2 mb-6 text-center text-white">KickStart your learnings</h1>
        </div>
      {/* <CardGrid/> */}
      </section>

      {/* <JsonDataDisplay/> */}
      <Tab/>
      
      <h1>Some aspects are on maintainance... Check later</h1>

      {/* <Table/> */}
      <Footer/>

    </ChakraProvider>
  )
}


export default layout