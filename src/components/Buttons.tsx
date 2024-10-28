import {
    Button
  } from '@chakra-ui/react'

function Buttons({input, event, info}) {
  return (
    <Button onClick={() => event(info)} variant={'solid'}>
        {input}
    </Button>
  )
}

export default Buttons