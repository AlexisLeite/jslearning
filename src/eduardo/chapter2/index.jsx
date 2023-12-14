import { Container } from '@chakra-ui/react';
import { chapter2Styles } from './styles.js';
import { NavBar } from './NavBar/index.jsx';
import { useCurrentPage } from '../common/useCurrentPage.js';
import { IncomingMessages } from './exercises/IncomingMessages/index.jsx';
import { Products } from './exercises/Products/index.jsx';
import { Counter } from './exercises/Counter/index.jsx';
import { Todo } from './exercises/Todo/index.jsx';
import { Timer } from './exercises/Timer/index.jsx';

export const Chapter2 = () => {
  const route = useCurrentPage({
    incomingMessages: /eduardo2\/incoming/,
    products: /eduardo2\/products/,
    counter: /eduardo2\/counter/,
    todo: /eduardo2\/todo/,
    timer: /eduardo2\/timer/,
  });

  return (
    <>
      <NavBar />
      <Container sx={chapter2Styles} id="Chapter2">
        {route === 'default' && <>Welcome!</>}
        {route === 'incomingMessages' && <IncomingMessages />}
        {route === 'products' && <Products />}
        {route === 'counter' && <Counter />}
        {route === 'todo' && <Todo />}
        {route === 'timer' && <Timer />}
      </Container>
    </>
  );
};
