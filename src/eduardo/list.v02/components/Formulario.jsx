import { Box, Heading } from '@chakra-ui/react';

export const Formulario = () => {
  return (
    <Box className="Container">
      <Heading as="h1" className="encabezado">
        {' '}
        Formulario{' '}
      </Heading>
      <form className="formulario">
        <span>
          <label htmlFor=" Nombre">Nombre:</label>
        </span>{' '}
        {''}{' '}
        <input
          className="entrada"
          id="nombre"
          type="text"
          placeholder="Escribe tu Nombre"
        />{' '}
        <br />
        <span>
          <label htmlFor="">Edad:</label>{' '}
        </span>
        {''}{' '}
        <input
          className="entrada"
          type="number"
          id="Nombre"
          placeholder=" Escribe tu edad"
        />
        <label htmlFor="Nombre">Telefono:</label>
        <input
          className="entrada"
          type="number"
          id="Nombre"
          placeholder=" Telefono"
        />
      </form>
    </Box>
  );
};
