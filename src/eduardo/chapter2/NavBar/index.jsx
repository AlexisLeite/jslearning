import { Box, Heading, Link } from '@chakra-ui/react';
import { navBarStyles } from './styles';
import { Pages } from './Pages';
import { ContactForm } from '../exercises/ContactForm';

export const NavBar = () => {
  return (
    <Box sx={navBarStyles}>
      <Heading as="h1" className="Logo">
        <Link href="/eduardo2">Home</Link>
      </Heading>
      <Pages />
      <Box className="rightButtons">
        <ContactForm />
      </Box>
    </Box>
  );
};
