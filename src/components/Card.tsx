import { 
    Card as Cards,
    CardBody,
    CardHeader ,
    Heading,
    Center
} from '@chakra-ui/react'

function Card({dataCard}) {

  return (
    <Cards 
    width={300} 
    height={100}
    direction={{base: 'row', sm: 'row'}}
    variant='outline'
    >
      <Center>
      <CardBody>
        <img src={dataCard.img} className='cardImg'/>
      </CardBody>
      <CardHeader>
        <Center>
        <Heading size='md' >
        {dataCard.title}
        </Heading>
        </Center>
      </CardHeader>
      </Center>
    </Cards>
  )
}

export default Card