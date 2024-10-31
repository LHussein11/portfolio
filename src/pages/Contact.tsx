import { useState, useEffect } from 'react';
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
            console.log('Email sent successfully', response)
            setName('');
            setEmail('');
            setMessage('');
        })
        .catch((error) => {
            console.log('Error sending email', error)
        })
    }

    const [windowWidth, setWindowWidth] = useState(window.innerWidth - 150)
    useEffect(() => {
      const handleResize = () => {
        setWindowWidth(window.innerWidth - 150);
      };
  
      // Attach the event listener
      window.addEventListener('resize', handleResize);
  
      // Cleanup the event listener on component unmount
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []); //Empty dependency array - effect runs once after the initial render
        


  return (
    <Container  maxW='container.lg' mt={30} mb={30}>
        <Heading>Contact Me</Heading>
        <Flex width="full" mt={30} mb={30}>
            <form onSubmit={handleSubmit}>
            <Box width={windowWidth}>
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