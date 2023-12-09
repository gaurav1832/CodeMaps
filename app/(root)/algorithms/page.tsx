import React from 'react'
import Algorithms from "./AlgorithmComponents/algorithms"
import { ChakraProvider } from '@chakra-ui/react'
const page = () => {
  return (
    <ChakraProvider>
    <main className="flex flex-col items-center px-4">
      <Algorithms/>
    </main>
    </ChakraProvider>
  )
}

export default page