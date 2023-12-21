import { Box, Button } from '@chakra-ui/react';
import { useState } from 'react';

const styles = {
  padding: '30',

  border: '1px solid',
};
export const Pruebas1 = () => {
  const [texto, setTexto] = useState('hola');

  return (
    <Box sx={styles}>
      {' '}
      {texto}
      <Button
        onClick={() => {
          setTexto('chau ');
        }}
      >
        CLick
      </Button>
    </Box>
  );
};
