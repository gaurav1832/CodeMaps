import React from 'react'
import { Stepper, Step, StepIndicator, StepIcon, StepNumber, Box, StepTitle, StepStatus, StepDescription, StepSeparator, Center } from '@chakra-ui/react'
import { useSteps } from '@chakra-ui/react'

const steps = [
    { title: 'Practice', description: 'By doing questions' },
    { title: 'Focus', description: 'Time mgmt.' },
    { title: 'Win', description: 'Your dream org,' },
  ]
  
function StepperElement() {
    const { activeStep } = useSteps({
      index: 1,
      count: steps.length,
    })
  
    return (
      <Center>
      <Stepper width={1000} size='lg' index={activeStep}>
        {steps.map((step, index) => (
          <Step key={index}>
            <StepIndicator>
              <StepStatus
                complete={<StepIcon />}
                incomplete={<StepNumber />}
                active={<StepNumber />}
              />
            </StepIndicator>
  
            <Box flexShrink='0'>
              <StepTitle>{step.title}</StepTitle>
              <StepDescription>{step.description}</StepDescription>
            </Box>
  
            <StepSeparator />
          </Step>
        ))}
      </Stepper>
      </Center>
    )
  }
  
export default StepperElement