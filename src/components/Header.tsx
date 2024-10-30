'use client'

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
  WrapItem
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { Avatar } from '@chakra-ui/react'
import { Container } from '@chakra-ui/react'
import { Link } from 'react-scroll'

interface Props {
  children: React.ReactNode
}

const Links = ['About Me', 'Tech Stack', 'Contact']

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
                <Avatar name='Liban Hussein' src='public\avataaars.png' />
              </WrapItem>
            </Box>
            <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link}>
                  <Link to={link}> {link}</Link>
                </NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Menu>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>
                  {link}
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
