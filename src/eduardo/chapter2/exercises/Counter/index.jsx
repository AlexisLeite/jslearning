import { Box, Button, Input } from '@chakra-ui/react';
import { useState } from 'react';

const styles = {
  width: '500px',
  display: 'flex',
  flexDirection: 'row',
  gap: 3,
};

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <Box sx={styles}>
      <Input
        value={count}
        onChange={ev =>
          /**
           * Este formato de setState es:
           *
           * No me importa qué valor había antes, yo digo qué valor va a haber ahora
           *
           * Acá estoy pasando un valor
           */
          setCount(Number.parseInt(ev.target.value))
        }
      />
      <Button
        onClick={() => {
          /**
           * Este formato de setState es:
           *
           * Dame primero el valor actual, y luego yo te
           * devuelvo un nuevo valor calculado a partir del anterior
           *
           * Acá estoy pasando una función
           */
          setCount(current => current - 1);
        }}
      >
        -
      </Button>
      <Button
        onClick={() => {
          setCount(current => current - 10);
        }}
      >
        - 10
      </Button>
      <Button
        onClick={() => {
          setCount(current => current + 1);
        }}
      >
        +
      </Button>
      <Button
        onClick={() => {
          setCount(current => current + 10);
        }}
      >
        + 10
      </Button>
      <Button onClick={() => setCount(current => (current = 0))}>0</Button>

      <Button onClick={() => setCount(current => (current = 100))}>
        {' '}
        100{' '}
      </Button>
    </Box>
  );
};
