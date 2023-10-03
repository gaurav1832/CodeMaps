import React from 'react'
import {ChakraProvider, Heading, SimpleGrid, Card, CardHeader, CardBody, Text, CardFooter, Button, Center } from '@chakra-ui/react'
const Cards = () => {
  return (
    <ChakraProvider>
    <Center>
        <SimpleGrid columns={[1, 1, 4]} px={300} py={50}  spacing={10}>
            <Card>
                <CardHeader>
                <Heading size='md'>Sliding Window</Heading>
                </CardHeader>
                <CardBody>
                <Text>lorem ipsum dolar </Text>
                </CardBody>
                <CardFooter>
                <Button>View here</Button>
                </CardFooter>
            </Card>
            <Card>
                <CardHeader>
                <Heading size='md'>Graphs</Heading>
                </CardHeader>
                <CardBody>
                <Text>lorem ipsum dolar </Text>
                </CardBody>
                <CardFooter>
                <Button>View here</Button>
                </CardFooter>
            </Card>
            <Card>
                <CardHeader>
                <Heading size='md'>Trees</Heading>
                </CardHeader>
                <CardBody>
                <Text>lorem ipsum dolar </Text>
                </CardBody>
                <CardFooter>
                <Button>View here</Button>
                </CardFooter>
            </Card>
            <Card>
                <CardHeader>
                <Heading size='md'>Binary Search</Heading>
                </CardHeader>
                <CardBody>
                <Text>Low High Butterfly</Text>
                </CardBody>
                <CardFooter>
                <Button>View here</Button>
                </CardFooter>
            </Card>
            

             
            
    </SimpleGrid>
</Center>
</ChakraProvider>
  )
}

export default Cards


