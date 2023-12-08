import { Container } from '@chakra-ui/react';
import { chapter2Styles } from './styles.js';
import { NavBar } from './NavBar/index.jsx';
import { useCurrentPage } from '../common/useCurrentPage.js';
import { IncomingMessages } from './exercises/IncomingMessages/index.jsx';

export const Chapter2 = () => {
  const route = useCurrentPage({
    incomingMessages: /eduardo2\/incoming/,
  });

  return (
    <>
      <NavBar />
      <Container sx={chapter2Styles} id="Chapter2">
        {route === 'default' && <>Welcome!</>}
        {route === 'incomingMessages' && <IncomingMessages />}
      </Container>
    </>
  );
};
