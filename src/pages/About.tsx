import {
    ChakraProvider,
    Stack,
    Container,
    Heading,
    Text,
    Button
  } from '@chakra-ui/react'

import { extendTheme } from '@chakra-ui/react'
import '../App.css'
import resume from '../../public/My Resume.pdf'
//import Button from '../components/Buttons' 

  const theme = extendTheme({
    fontSize: {
        heading: `40px`,
        body: `'20px`,
    }
  })



function About() {
  return (
    <>
    <ChakraProvider theme={theme}>
            <Container maxW='container.lg' mt={30} mb={30}>
            <Stack spacing={'20px'}>
                <Heading fontWeight={'bold'} fontSize={'5xl'}>Welcome! <span className='handEmoji'
                >👋</span>
                </Heading>
                <Stack spacing={'10px'}>
                    <Text id='About Me'>I'm a passionate Microsoft 365 & Frontend Developer with a knack for transforming innovative ideas into reality. With expertise in SharePoint, Power Platform, and Teams, 
                    </Text>
                    <Text>
                    I specialize in creating seamless digital experiences that enhance productivity and collaboration.    
                    </Text>   
                    <Text>
                    Driven by a love for technology and continuous learning, I aim to empower organizations to harness the full potential of Microsoft 365 solutions. Let's build the future together! 
                    </Text>
                    <Stack direction={'row'} mt={5} >
                      <Button>
                        <a href={resume} target='_blank'>
                        Download CV
                        </a>
                      </Button>
                    </Stack>
                    </Stack>
            </Stack>
            </Container>
    </ChakraProvider>
    </>
  )
}

export default About