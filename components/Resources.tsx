import React from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'


const Resources = () => {
  return (
    <>
    <TableContainer>
  <Table size='md'>
    <Thead>
      <Tr>
        <Th>Name</Th>
        <Th>Best</Th>
        <Th>Average</Th>
        <Th>Worst</Th>
        <Th>Memory</Th>
        <Th>Stable</Th>
        <Th>Method</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>Selection Sort</Td>
        <Td>n^2</Td>
        <Td>n^2</Td>
        <Td>n^2</Td>
        <Td >1</Td>
        <Td>No</Td>
        <Td>Selection</Td>
      </Tr>
      <Tr>
        <Td>Bubble Sort</Td>
        <Td>n</Td>
        <Td>n^2</Td>
        <Td>n^2</Td>
        <Td >1</Td>
        <Td>Yes</Td>
        <Td>Exchanging</Td>
      </Tr>
      <Tr>
        <Td>Insertion Sort</Td>
        <Td>n</Td>
        <Td>n^2</Td>
        <Td>n^2</Td>
        <Td >1</Td>
        <Td>Yes</Td>
        <Td>Insertion</Td>
      </Tr>
      <Tr>
        <Td>Merge Sort</Td>
        <Td>n(logn)</Td>
        <Td>n(logn)</Td>
        <Td>n(logn)</Td>
        <Td>n</Td>
        <Td>Yes</Td>
        <Td>Merging/ Divide and Conquer</Td>
      </Tr>
      <Tr>
        <Td>Quick Sort</Td>
        <Td>n(logn)</Td>
        <Td>n(logn)</Td>
        <Td>n^2</Td>
        <Td>n</Td>
        <Td>Yes</Td>
        <Td>Partitioning</Td>
      </Tr>
      <Tr>
        <Td>Heap Sort</Td>
        <Td>n(logn)</Td>
        <Td>n(logn)</Td>
        <Td>n(logn)</Td>
        <Td>1</Td>
        <Td>No</Td>
        <Td>Selection</Td>
      </Tr>
      <Tr>
        <Td>Shell Sort</Td>
        <Td>n(logn)</Td>
        <Td>n^4/3</Td>
        <Td>n^3/2</Td>
        <Td>1</Td>
        <Td>No</Td>
        <Td>Insertion</Td>
      </Tr>
      
      <Tfoot>
        <tr>
            <a className='text-sm text-blue-500' href="https://www.geeksforgeeks.org/radix-sort/">For Radix Sort read this &nbsp; | &nbsp; </a>
            <a className='text-sm text-blue-500' href="https://www.geeksforgeeks.org/counting-sort/">For Counting Sort read this</a>
        </tr>
 
      </Tfoot>
 
 

    </Tbody>
 
  </Table>
</TableContainer></>
  )
}

export default Resources