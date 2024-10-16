import {
    ChakraProvider,
    Stack,
    Container,
    Heading,
    chakra
  } from '@chakra-ui/react'

function Tech() {
  return (
    <ChakraProvider>
        <Stack>
            <Container maxW='container.lg' mt={30} mb={30}>
                <Heading>
                    Tech Stack
                </Heading>
                <chakra.svg>
                    <path d="src\assets\PowerFx_scalable.svg"/>
                </chakra.svg>
            </Container>
        </Stack>
    </ChakraProvider>
  )
}

export default Tech