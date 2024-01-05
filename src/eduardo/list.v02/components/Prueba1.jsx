import { Box, Button } from '@chakra-ui/react';
import { useState } from 'react';

const styles = {
  padding: '30',

  border: '1px solid',
};
/*export const Pruebas1 = () => {
  const [texto, setTexto] = useState('hola');
  const cambiarTexto = () => {
    const nuevoTexto =  texto === 'hola' ?  'chau': 'hola';
    setTexto(nuevoTexto);
  };
  return (
    <Box sx={styles}>
      {' '}
      {texto}
      <Button onClick={cambiarTexto}></Button>
    </Box>
  );
};
*/
export const Pruebas1 = () => {
  const [texto, setTexto] = useState('hola');

  return (
    <Box sx={styles}>
      {' '}
      {texto}
      <Button
        onClick={() => {
          setTexto('chau');
        }}
      ></Button>
    </Box>
  );
};
