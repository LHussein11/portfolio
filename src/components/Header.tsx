'use client'

import { useEffect } from 'react'

import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  Menu,
  useDisclosure,
  useColorModeValue,
  useColorMode,
  Stack,
  WrapItem,
  Text
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { Avatar } from '@chakra-ui/react'
import { Container } from '@chakra-ui/react'
import { Link } from 'react-scroll'
import { SE, GB } from 'country-flag-icons/react/3x2'
import { useLang } from '../state/LangContext'
import { useTranslation } from 'react-i18next'


import { changeLanguage } from 'i18next'

interface Props {
  children: React.ReactNode
}

//const Links = ['About Me', 'Tech Stack', 'Contact']
const Links = [
  { name: 'About Me', nameSv: 'Om Mig', id: 1 },
  { name: 'Tech Stack', nameSv: 'Tech Stack', id: 2 },
  { name: 'Contact', nameSv: 'Kontakt', id: 3 }
];




export const NavLink = (props: Props) => {
  const { children } = props

  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
      href={'#'}>
      {children}
    </Box>
  )
}


export default function Simple() {
  const { colorMode, toggleColorMode } = useColorMode()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { t } = useTranslation()  
 
  const { lang, setLang } = useLang();
  function changeLang(){
    setLang(prevLang => prevLang === 'en' ? 'sv' : 'en');
  }

  useEffect(() => {
    changeLanguage(lang)
  }, [lang])

  return (
    <>
    
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Container maxW='container.lg'>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>  
              <WrapItem>
                <Avatar name='Liban Hussein' src='avataaars.png' />
              </WrapItem>
            </Box>
            <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link.id}>
                  <Link  to={link.name}> 
                    <Text fontWeight='bold'>
                    {lang === 'en' ? t(link.name) : t(link.nameSv)}
                      </Text>
                  </Link>
                </NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <HStack spacing={4}>
            <Menu>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Menu>
            <Button colorScheme='none' onClick={changeLang}>
            {
            lang === 'en' ? 
            <GB title='English' width={20} height={20}/> : 
            <SE title='Swedish' width={20} height={20}/>
            }
            </Button>
            </HStack>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link.id}>
                  <Link to={link.name}>
                    <Text fontWeight='bold'>
                    {lang === 'en' ? t(link.name) : t(link.nameSv)}
                      </Text>
                  </Link>
                </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
        </Container>
      </Box>

      {/*<Box p={4}>Main Content Here</Box>*/}
    </>
  )
}
