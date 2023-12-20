import { Button } from '@chakra-ui/react';
import { useState } from 'react';

export const Counter = () => {
  const [Counter, setCounter] = useState(0);

  /*estado en que quermos que empiece a contar*/
  return (
    /**     /* Aca le decimos que cuando le hacemos click al boton el cambie el estado
    contanod de a 5 numeros, el que setea el estado es setState(al
      setstate* por convencion le ponemos el mismo nombre que la variable
      con el set por delante*/
    <>
      <Button
        className="btn"
        onClick={() => setCounter(current => current + 5)}
      >
        {' '}
        {Counter} Haz Click
      </Button>

      <Button
        className="btn"
        onClick={() => setCounter(current => (current = 0))}
      >
        {' '}
        Volver a 0
      </Button>
    </>
  );
};
