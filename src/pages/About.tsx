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
import { useTranslation } from 'react-i18next'
import { useLang } from '../state/LangContext'



  const theme = extendTheme({
    fontSize: {
        heading: `40px`,
        body: `'20px`,
    }
  })



function About() {
  const { lang } = useLang();

  const { t } = useTranslation()  
 
  return (
    <>
    <ChakraProvider theme={theme}>
            <Container maxW='container.lg' mt={30} mb={30}>
            <Stack spacing={'20px'}>
                <Heading fontWeight={'bold'} fontSize={'7xl'}>                  {
                  lang === 'en' ? t('greeting') : t('greeting')
                  } <span className='handEmoji'
                >👋</span>
                </Heading>
                <Stack spacing={'10px'}>
                    <Text fontWeight='medium' id='About Me'>
                    {
                  lang === 'en' ? t('introOne') : t('introOne')
                  }
                    </Text>
                    <Text fontWeight='medium'>
                    {
                  lang === 'en' ? t('introTwo') : t('introTwo')
                  }
                    </Text>   
                    <Text fontWeight='medium'>
                    {
                  lang === 'en' ? t('introThree') : t('introThree')
                  }
                    </Text>
                    <Stack direction={'row'} mt={5} >
                      <Button colorScheme='blue' color='white'>
                        <a href={resume} target='_blank'>
                        {lang === 'en' ? t('dwnBtn') : t('dwnBtn')}
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