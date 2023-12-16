import { Box, Button, Input } from '@chakra-ui/react';
import { useState } from 'react';

const styles = {
  width: '350px',
  display: 'flex',
  flexDirection: 'row',
  gap: 5,
  '.int': { background: 'rgb(163, 160, 160)' },
};

export const Contador = () => {
  const [cont, setCont] = useState(2);

  return (
    <Box sx={styles}>
      <h1>Pedorrada</h1>
      <Input
        className="int"
        value={cont}
        onChange={ev => setCont(Number.parseInt(ev.target.value))}
      />

      <Button
        onClick={() => {
          setCont(current => current + 2);
        }}
      >
        + 2
      </Button>
      <Button onClick={() => setCont(current => (current = 0))}>0</Button>
    </Box>
  );
};
