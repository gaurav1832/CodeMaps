'use client'
import React from 'react'
import { useState } from 'react'
import {
  Avatar,
  Box,
  chakra,
  ChakraProvider,
  Container,
  Flex,
  Icon,
  SimpleGrid,
  useColorModeValue,
  Input,
  Center
} from '@chakra-ui/react'

import {Interviews} from '@/lib/data'


interface TestimonialCardProps {
  name: string
  role: string
  content: string
  avatar: string
  index: number
}

function TestimonialCard(props: TestimonialCardProps) {
  const { name, role, content, avatar, index } = props
  return (
    <Flex
    className="bg-gray-100 max-w-[22rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20"
      boxShadow={'lg'}
      maxW={'640px'}
      direction={{ base: 'column-reverse', md: 'row' }}
      width={'full'}
      rounded={'xl'}
      p={10}
      justifyContent={'space-between'}
      position={'relative'}
      bg={useColorModeValue('white', 'gray.800')}
      _after={{
        content: '""',
        position: 'absolute',
        height: '21px',
        width: '29px',
        left: '35px',
        top: '-10px',
        backgroundSize: 'cover',
       }}
      _before={{
        content: '""',
        position: 'absolute',
        zIndex: '-1',
        height: 'full',
        maxW: '640px',
        width: 'full',
        filter: 'blur(40px)',
        transform: 'scale(0.98)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        top: 0,
        left: 0,
       }}>
      <Flex direction={'column'} textAlign={'left'} justifyContent={'space-between'}>
        <chakra.p fontFamily={'Inter'} fontWeight={'medium'} fontSize={'20px'} pb={4}>
          {content}
        </chakra.p>
        <chakra.p fontFamily={'Work Sans'} fontWeight={'bold'} fontSize={14}>
          {name}
          <chakra.span fontFamily={'Inter'} fontWeight={'medium'} color={'gray.500'}>
            {' '}
            - {role}
          </chakra.span>
        </chakra.p>
      </Flex>
      <Avatar
        src={avatar}
        height={'80px'}
        width={'80px'}
        alignSelf={'center'}
        m={{ base: '0 0 35px 0', md: '0 0 0 50px' }}
      />
    </Flex>
  )
}

export default function GridBlurredBackdrop() {

const [query, setquery] = useState("")
 

  return (
    <ChakraProvider> 
    <Center id='interviews'>  
    <Input 
      className="bg-gray-100 border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20"
      h={14}
      fontWeight={700}
      fontSize={20}
      onChange={(e) => setquery(e.target.value)}
      mt={50}
      placeholder='Search for company or role ...'
      ></Input>
      </Center>
    <Flex
      textAlign={'center'}
      pt={10}
      justifyContent={'center'}
      direction={'column'}
      width={'full'}
      overflow={'hidden'}>
 
      <SimpleGrid columns={{ base: 1, xl: 2 }} spacing={'10'} mt={10} mb={10} mx={'auto'}>
        {Interviews.filter((it) => 
        it.name.toLowerCase().includes(query) || 
        it.role.toLowerCase().includes(query) 
        ).map((cardInfo, index) => (
          <TestimonialCard key={index} {...cardInfo} index={index} />
        ))}
      </SimpleGrid>
 
    </Flex>
    </ChakraProvider>
  )
}