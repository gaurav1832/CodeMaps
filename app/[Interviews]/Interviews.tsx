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
    <Center>  
    <Input 
       className="bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20"
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
      <Box>
        <Icon viewBox="0 0 40 35" mt={14} boxSize={10} color={'purple.400'}>
          <path
            fill={'currentColor'}
            d="M10.7964 5.04553e-07C8.66112 -0.000123335 6.57374 0.632971 4.79827 1.81922C3.0228 3.00547 1.63898 4.69158 0.82182 6.66433C0.00466116 8.63708 -0.209132 10.8079 0.207477 12.9021C0.624087 14.9964 1.65239 16.9201 3.16233 18.4299L19.1153 34.3828C19.2395 34.5074 19.3871 34.6062 19.5496 34.6736C19.7121 34.741 19.8863 34.7757 20.0622 34.7757C20.2381 34.7757 20.4123 34.741 20.5748 34.6736C20.7373 34.6062 20.8848 34.5074 21.0091 34.3828L36.962 18.4272C38.9319 16.3917 40.0228 13.6636 39.9996 10.8311C39.9764 7.99858 38.8409 5.28867 36.838 3.28573C34.835 1.28279 32.1251 0.147283 29.2926 0.124081C26.4601 0.100879 23.732 1.19184 21.6965 3.1617L20.0622 4.79337L18.4305 3.1617C17.4276 2.15892 16.237 1.36356 14.9267 0.821064C13.6163 0.278568 12.2119 -0.000433066 10.7937 5.04553e-07H10.7964Z"
          />
        </Icon>
      </Box>
    </Flex>
    </ChakraProvider>
  )
}