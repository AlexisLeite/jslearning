import React from 'react';
import { ChakraProvider, Container, theme } from '@chakra-ui/react';
import './styles.css';
import List from './eduardo/views/users/list/index.jsx';
import { PaginaValentina } from './valentina';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Container id="MainContainer">
        {window.location.href.match(/valentina/) ? (
          <PaginaValentina />
        ) : (
          <List />
        )}
      </Container>
    </ChakraProvider>
  );
}

export default App;
