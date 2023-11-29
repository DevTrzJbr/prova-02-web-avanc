'use client'

import {
  Container,
  Heading,
  Stack,
  Text,
  Button,
} from '@chakra-ui/react'


export default function Home() {
  return (
    <Container w='100%'>
      <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}>
        <Heading
          fontWeight={600}
          fontSize={{ base: '3xl', sm: '3xl', md: '3xl' }}
          lineHeight={'110%'}>
          Programação Avançada para Web Prova 2º Bimestre
        </Heading>
        <Text color={'gray.500'} maxW={'3xl'}>
          O Projeto foi deselvolvido com Next.js, Chakra UI e Typescript.
        </Text>

        <Stack spacing={6} direction={'row'}>
          <Button as='a'
            href='https://github.com/DevTrzJbr/SimWebAvanc02'
            rounded={'full'}
            px={6}
            colorScheme={'orange'}
            _hover={{ bg: 'brand.800' }}>
            Repositório GitHub
          </Button>

        </Stack>
        <Stack spacing={6} direction={'row'}>
          <Button as='a'
            href='/login'
            rounded={'6'}
            px={6}
            colorScheme={'blue'}
            _hover={{ bg: 'brand.800' }}>
            Login
          </Button>
          <Button as='a'
            href='/registro'
            rounded={'6'}
            px={6}
            colorScheme={'red'}
            _hover={{ bg: 'red.800' }}>
            Criar Conta
          </Button>

        </Stack>

      </Stack>
    </Container>
  )
}
