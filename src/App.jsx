import React from 'react';
import {
  Box,
  ChakraProvider,
  Container,
  Heading,
  Link,
  theme,
} from '@chakra-ui/react';
import './styles.css';
import List from './eduardo/views/users/list/index.jsx';
import { PaginaValentina } from './valentina';
import { Ejemplos } from './ejemplos';
import { useCurrentPage } from './ejemplos/useCurrentPage';

function App() {
  const route = useCurrentPage({
    valentina: /valentina/,
    eduardo: /eduardo/,
    ejemplos: /ejemplos/,
  });

  return (
    <ChakraProvider theme={theme}>
      <Container id="MainContainer">
        <Heading
          as="h1"
          sx={{
            position: 'fixed',
            bottom: 0,
            right: 0,
          }}
        >
          <Link href="/">Volver al inicio</Link>
        </Heading>
        {route === 'valentina' && <PaginaValentina />}
        {route === 'eduardo' && <List />}
        {route === 'ejemplos' && <Ejemplos />}
        {route === '' && (
          <Box as="ul">
            <li>
              <Link href="/eduardo">Eduardo</Link>
            </li>
            <li>
              <Link href="/valentina">Valentina</Link>
            </li>
            <li>
              <Link href="/ejemplos">Ejemplos</Link>
            </li>
          </Box>
        )}
      </Container>
    </ChakraProvider>
  );
}

export default App;
