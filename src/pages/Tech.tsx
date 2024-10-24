import {
    ChakraProvider,
    Stack,
    Container,
    Heading,
  } from '@chakra-ui/react'

  import Card from '../components/Card'
  import Button from '../components/Buttons'
  import data from '../data/tech.json'

function Tech() {
  return (
    <ChakraProvider>
        <Stack>
            <Container maxW='container.lg' mt={30} mb={30}>
                <Heading>
                    Tech Stack
                </Heading>
                <Stack direction={'row'} mt={30} mb={30}>
                  <Button input='M365'/>
                  <Button input='Frontend'/>
                </Stack>
                <Stack gap="4" direction="row" wrap="wrap" mt={30} mb={30}>
                {data.data.map(item => (
                  <Card dataCard={item}/>
    ))}
            </Stack>
            </Container>
        </Stack>
    </ChakraProvider>
  )
}

export default Tech