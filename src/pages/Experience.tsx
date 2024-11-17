import { 
    Card as Cards,
    CardBody,
    Heading,
    Container,
    Text,
    Flex,
    Box
} from '@chakra-ui/react'; 

import { useTranslation } from 'react-i18next';
import { useLang } from '../state/LangContext';
import background from '../data/background.json';

type Experience = { id: number; title: string; company: string; date: string; }; 
type Education = { id: number; title: string; school: string; date: string; }; 
type Data = { exp: Experience[]; edu: Education[]; };

function Experience() {
    const { lang } = useLang();
    const { t } = useTranslation();  

    const expData: Data = background;
    return (
        <Container 
            maxW="container.lg"
            mt={30} 
            mb={30} 
        >
            <Heading textDecoration={"underline"} textDecorationColor={"#90cdf4"} fontWeight={'bold'}>
                {lang === 'en' ? t('edu') : t('edu')}
            </Heading>
            <Flex width="full" mt={30} mb={30} justifyContent="flex-start">
                <Box width={{ base: "90%", md: "60%" }} pl="0">
                    {expData.edu.map(item => (
                        <Cards 
                            key={item.id}
                            width="100%" 
                            height="auto"
                            direction={{base: 'column', sm: 'row'}}
                            variant='outline'
                            borderColor='#90cdf4'
                            mt={5} 
                            mb={5}
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
                </Box>
            </Flex>
        </Container>
    );
}

export default Experience;
