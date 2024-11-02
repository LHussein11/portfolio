import { useState } from 'react';
import emailjs from '@emailjs/browser';


import {
    Container,
    Heading,
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Textarea,
    Button,
    VStack
  } from '@chakra-ui/react'
function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const serviceId = 'service_blk5dee';
        const templateId = 'template_uyzu31s';
        const publicKey = '01rwM7xNgUelw9r7j';

        const templateParams = {
            from_name: name,
            from_email: email,
            message: message
        }

        emailjs.send(serviceId, templateId, templateParams, publicKey)
        .then((response) => {
            console.log('Email sent successfully', response, email)
            console.log(templateParams)
            setName('');
            setEmail('');
            setMessage('');
        })
        .catch((error) => {
            console.log('Error sending email', error)
        })
    }
        

  return (
    <Container  maxW='container.lg' mt={30} mb={30}>
        <Heading id="Contact">Contact Me</Heading>
        <Flex width="full" mt={30} mb={30} direction={{ base: "column", md: "row" }}>
            <form onSubmit={handleSubmit}>
            <Box flex="1" maxW={500} minW={350}>
                <VStack spacing={5}>
                <FormControl isRequired>
                    <FormLabel>Name</FormLabel>
                    <Input 
                    type="text" 
                    name='userName'
                    placeholder="Your name"  
                    borderColor="blue.300"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>Email adress</FormLabel>
                    <Input 
                    type="email" 
                    name='userEmail'
                    placeholder="test@test.com" 
                    borderColor="blue.300"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </FormControl>
                <FormControl isRequired>

                </FormControl>
                <FormControl isRequired>
                <FormLabel>Message</FormLabel>
                    <Textarea 
                        name='message'
                        placeholder='Your Message'
                        rows={6}
                        resize="none"
                        borderColor="blue.300"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </FormControl>
                <Box width={'full'}>
                <Button colorScheme='blue' color={'white'}  mt={4} type="submit">
                    Send Message
                </Button>
                </Box>
                </VStack>
            </Box>
            </form>
        </Flex>
    </Container>
  )
}

export default Contact