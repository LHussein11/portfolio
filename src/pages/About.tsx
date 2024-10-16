import {
    ChakraProvider,
    Stack,
    Container,
    Heading,
    Text
  } from '@chakra-ui/react'

import { extendTheme } from '@chakra-ui/react'
import '../App.css'

  const theme = extendTheme({
    fonts: {
        heading: `'Open Sans', sans-serif`,
        body: `'Raleway', sans-serif`,
    }
  })

function About() {
  return (
    <>
    <ChakraProvider theme={theme}>
        <Stack spacing={'100px'}>
            <Container maxW='container.lg' mt={30} mb={30}>
                <Heading fontWeight={'bold'} fontSize={'5xl'}>Welcome! <span className='handEmoji'
                >👋</span></Heading>
                <Text>I'm a passionate Microsoft 365 & Frontend Developer with a knack for transforming innovative ideas into reality. With expertise in SharePoint, Power Platform, and Teams, I specialize in creating seamless digital experiences that enhance productivity and collaboration. Driven by a love for technology and continuous learning, I aim to empower organizations to harness the full potential of Microsoft 365 solutions. Let's build the future together! 🚀</Text>
            </Container>
        </Stack>
    </ChakraProvider>
    </>
  )
}

export default About