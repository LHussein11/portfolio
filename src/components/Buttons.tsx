import {
    Button
  } from '@chakra-ui/react'

function Buttons({input}) {
  return (
    <Button variant={'solid'}>
        {input}
    </Button>
  )
}

export default Buttons