import React from 'react';
import {
  Box,
  ChakraProvider,
  Container,
  Heading,
  Link,
  extendTheme,
} from '@chakra-ui/react';
import './styles.css';
import { PaginaValentina } from './valentina';
import { Ejemplos } from './ejemplos';
import { useCurrentPage } from './eduardo/common/useCurrentPage';
import { List02 } from './eduardo/list.v02';
import { Chapter2 } from './eduardo/chapter2';
import { theme } from './theme';

function App() {
  const route = useCurrentPage({
    valentina: /valentina/,
    eduardo2: /eduardo2/,
    eduardo: /eduardo/,
    ejemplos: /ejemplos/,
  });

  return (
    <ChakraProvider theme={extendTheme(theme)}>
      <Container
        sx={
          !['eduardo2'].includes(route)
            ? {
                background: 'white',
                width: '550px',
                margin: '24px auto',
                border: '1px solid #999',
                boxShadow: '3px 3px 3px rgba(0,0,0,0.2)',
                padding: '0',
              }
            : { width: '100vw', margin: 0, maxWidth: 'auto' }
        }
        id="MainContainer"
      >
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
        {route === 'eduardo' && <List02 />}
        {route === 'eduardo2' && <Chapter2 />}
        {route === 'ejemplos' && <Ejemplos />}
        {route === 'default' && (
          <Box as="ul">
            <li>
              <Link href="/eduardo">Eduardo</Link>
            </li>
            <li>
              <Link href="/eduardo2">Eduardo, capítulo 2</Link>
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
