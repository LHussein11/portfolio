import { useState } from 'react';
//import { RiMicrosoftFill } from "@remixicon/react";

import {
    ChakraProvider,
    Stack,
    Container,
    Heading,
  } from '@chakra-ui/react'

  import Card from '../components/Card'
  import Button from '../components/Buttons'
  import data from '../data/tech.json'
  import { useTranslation } from 'react-i18next'
  import { useLang } from '../state/LangContext'

  const searchItem = "m365";
  data.defaultData.filter(item => console.log(item.tech === searchItem))

  export type Item = {
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
  const { lang } = useLang();
  const { t } = useTranslation()  

  const techData: Data = data;

  const [view, setView] = useState<'default' | 'alternate'>('default');
  const dataToShow: Item[] = view === 'default' ? techData.defaultData : techData.alternateData

  const handleViewChange = (info:string) => {
    setView(info === 'default' ? 'default' : 'alternate');
  }

  return (
    <ChakraProvider>
        <Stack>
            <Container maxW='container.lg' mt={30} mb={30}>
                <Heading textDecoration={"underline"} textDecorationColor={"#90cdf4"} id='Tech Stack'>
                    {lang === 'en' ? t('stack') : t('stack')}
                </Heading>
                <Stack direction={'row'} mt={30} mb={30}>
                  <Button input='M365' event={handleViewChange} info={'default'} />
                  <Button  input='Frontend' event={handleViewChange} info={'alternate'}/>
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