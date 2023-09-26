import React from 'react'
import {ChakraProvider, Heading, SimpleGrid, Card, CardHeader, CardBody, Text, CardFooter, Button, Center } from '@chakra-ui/react'
const Cards = () => {
  return (
    <ChakraProvider>
    <Center>
        <SimpleGrid columns={[3, 3, 4]} px={300} py={50}  spacing={10}>
            <Card>
                <CardHeader>
                <Heading size='md'> Customer dashboard</Heading>
                </CardHeader>
                <CardBody>
                <Text>View a summary of all your customers over the last month.</Text>
                </CardBody>
                <CardFooter>
                <Button>View here</Button>
                </CardFooter>
            </Card>
            <Card>
                <CardHeader>
                <Heading size='md'> Customer dashboard</Heading>
                </CardHeader>
                <CardBody>
                <Text>View a summary of all your customers over the last month.</Text>
                </CardBody>
                <CardFooter>
                <Button>View here</Button>
                </CardFooter>
            </Card>
            <Card>
                <CardHeader>
                <Heading size='md'> Customer dashboard</Heading>
                </CardHeader>
                <CardBody>
                <Text>View a summary of all your customers over the last month.</Text>
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