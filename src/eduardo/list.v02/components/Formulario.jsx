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
          <label htmlFor="nombre">Nombre:</label>
        </span>{' '}
        {''}{' '}
        <input
          autoComplete="off"
          className="entrada"
          type="text"
          id="nombre"
          placeholder="Escribe tu Nombre"
        />{' '}
        <br />
        <span>
          <label htmlFor="ledad">Edad:</label>{' '}
        </span>
        {''}{' '}
        <input
          autoComplete="off"
          className="entrada"
          type="number"
          id="ledad"
          placeholder=" Escribe tu edad"
        />
        <br />
        <label htmlFor="ltel">Telefono:</label>
        <input
          className="entrada"
          type="tel"
          id="ltel"
          placeholder=" Telefono"
        />
        <button className="boton">
          {' '}
          <strong>Enviar</strong>{' '}
        </button>
      </form>
    </Box>
  );
};
