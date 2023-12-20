import { Box, Button, Input } from '@chakra-ui/react';
import { useState } from 'react';

const styles = {
  borderRadius: '8px',
  background: 'rgb(221, 211, 211)',
  marginTop: '10px',
  border: '1px solid',
  width: '850px',
  display: 'flex',
  flexDirection: 'row',
  gap: 3,
  '.btnmaymen': { width: '400px' },
  '.int': { background: 'rgb(239, 237, 237)', textAlign: 'center' },
};

export const Counter = () => {
  const [count, setCount] = useState(0);
  const constatarValor = () => {
    const IntValue = Number.parseInt(count, 10);

    if (IntValue > 100) {
      alert('El numero es mayor a 100');
    } else if (IntValue < 100) {
      alert(' El numero es menor a 100');
    } else {
      alert('El numero es igual a 100');
    }
  };
  const generarValorAleatorio = () => {
    // Generar un número aleatorio entre 0 y 1 (Math.random())
    const nuevoValorAleatorio = Math.trunc(Math.random() * 1000);

    // Actualizar el estado con el nuevo valor aleatorio
    setCount(nuevoValorAleatorio);
  };

  return (
    <Box sx={styles}>
      <Input
        className="int"
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

      <Button onClick={() => setCount(current => current * 2)}> * 2</Button>

      <Button className="btnmaymen" onClick={constatarValor}>
        {' '}
        + - 100
      </Button>
      <Button className="btnmaymen" onClick={generarValorAleatorio}>
        {' '}
        Random
      </Button>
    </Box>
  );
};
