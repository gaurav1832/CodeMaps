import React from 'react'
import { Grid, GridItem } from '@chakra-ui/react'
const CardGrid = () => {
  return (
    <Grid
  h='200px'
  templateRows='repeat(2, 1fr)'
  templateColumns='repeat(5, 1fr)'
  gap={2}
  padding={10}
>
  <GridItem rowSpan={2} colSpan={1} bg='gray.400' />
  <GridItem colSpan={2} bg='gray.500' />
  <GridItem colSpan={2} bg='gray.600' />
  <GridItem colSpan={4} bg='gray.700' />
</Grid>
  )
}

export default CardGrid