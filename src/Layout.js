import { Container, Flex, Stack } from '@chakra-ui/react';
import Footer from './Footer';
import Header from './Header';

export function Layout({ children }){
  return(
    <Container
			maxW={'container.xl'}
			px={20}
      h='100vh'
			align='center'
		>
		<Flex flexDir={'column'}>
			<Flex flexDirection={'column'}>
			<Header/>
			<Flex display={{ md: 'flex' }} >
				<Stack
					align={{ base: 'center', md: 'stretch' }}
					textAlign={{ base: 'left', md: 'left' }}
				>
        {children}
        </Stack>
			</Flex>
      </Flex>
			<Footer/>
		</Flex>
    </Container>
  )
}