import { 
    Card as Cards,
    CardBody,
    Heading,
    Container,
    Text
} from '@chakra-ui/react' 

import { useTranslation } from 'react-i18next'
import { useLang } from '../state/LangContext'
import background from '../data/background.json'

type Experience = { id: number; title: string; company: string; date: string; }; type Education = { id: number; title: string; school: string; date: string; }; type Data = { exp: Experience[]; edu: Education[]; };

function Experience() {
    const { lang } = useLang();
    const { t } = useTranslation()  

    const expData: Data = background;
  return (
    <Container maxW='container.lg' mt={30} mb={30}>
    <Heading fontWeight={'bold'}>
        <Text textDecoration={"underline"} textDecorationColor={"#90cdf4"}>{lang === 'en' ? t('edu') : t('edu')}</Text>
    </Heading>
    {expData.edu.map(item => (
        <Cards 
    width={400} 
    height={90}
    direction={{base: 'row', sm: 'row'}}
    variant='outline'
    borderColor='#90cdf4'
    mt={30} 
    mb={30}
    >
        <CardBody>
            <Text>
            {item.title} @{item.school}
            </Text>
            <Text>
            {item.date}
            </Text>
        </CardBody>
    </Cards>
    ))}
    </Container>
  )
}

export default Experience