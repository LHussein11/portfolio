import { useState } from 'react'

import {
    ChakraProvider,
    Stack,
    Container,
    Heading,
  } from '@chakra-ui/react'

  import Card from '../components/Card'
  import Button from '../components/Buttons'
  import data from '../data/tech.json'

  const searchItem = "m365";
  data.defaultData.filter(item => console.log(item.tech === searchItem))

  type Item = {
    id: number;
    title: string;
    img: string;
    tech: string;
  };

  type Data = {
    defaultData: Item[];
    alternateData: Item[];
  };
  

function Tech() {

  const [view, setView] = useState<'default' | 'alternate'>('default');
  const dataToShow = view === 'default' ? data.defaultData : data.alternateData

  const handleViewChange = (view: 'default' | 'alternate') => {
    setView(view);
  }

  return (
    <ChakraProvider>
        <Stack>
            <Container maxW='container.lg' mt={30} mb={30}>
                <Heading>
                    Tech Stack
                </Heading>
                <Stack direction={'row'} mt={30} mb={30}>
                  <Button input='M365' event={handleViewChange} info={'default'}/>
                  <Button input='Frontend' event={handleViewChange} info={'alternate'}/>
                </Stack>
                <Stack gap="4" direction="row" wrap="wrap" mt={30} mb={30}>
                {dataToShow.map(item => (
                  <Card dataCard={item}/>
    ))}
            </Stack>
            </Container>
        </Stack>
    </ChakraProvider>
  )
}

export default Tech