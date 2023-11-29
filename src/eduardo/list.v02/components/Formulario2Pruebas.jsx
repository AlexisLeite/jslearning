import { Box, Heading } from '@chakra-ui/react';

export const Formulario2Pruebas = () => {
  return (
    <Box className="Contenedor">
      <Heading as="h1" className="title">
        {' '}
        Formulario{' '}
      </Heading>
      <form className="form">
        <span>
          <label htmlFor=" Nombre">Nombre:</label>
        </span>{' '}
        {''}{' '}
        <input className="int" type="text" placeholder="Escribe tu Nombre" />{' '}
        <br />
        <span>
          <label htmlFor="">Edad:</label>{' '}
        </span>
        {''}
        <input
          className="int"
          type="number"
          id="Nombre"
          placeholder=" Escribe tu edad"
        />
        <br />
        <label htmlFor="Nombre">Telefono:</label>
        <input
          className="int"
          type="number"
          id="Nombre"
          placeholder=" Telefono"
        />
        <br />
        <label htmlFor=""> C.I.</label>
        <input className="int" type="text" placeholder="Escribe tu C.I." />
        <button className="btn">
          {' '}
          <strong>Enviar</strong>{' '}
        </button>
      </form>
    </Box>
  );
};
