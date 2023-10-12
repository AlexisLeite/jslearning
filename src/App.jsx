import React from 'react';
import { ChakraProvider, Container, theme } from '@chakra-ui/react';
import './styles.css';
import List from './views/users/list/index.jsx';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Container id="MainContainer">
        <List />
      </Container>
    </ChakraProvider>
  );
}

export default App;
