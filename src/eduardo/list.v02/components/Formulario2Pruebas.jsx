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
          <label className="label" htmlFor="name">
            Nombre:
          </label>
        </span>{' '}
        {''}{' '}
        <input
          className="int"
          type="text"
          id="name"
          placeholder="Escribe tu Nombre"
        />{' '}
        <br />
        <span>
          <label className="label" htmlFor="edad">
            Edad:
          </label>{' '}
        </span>
        {''}
        <input
          className="int"
          type="number"
          id="edad"
          placeholder=" Escribe tu edad"
        />
        <br />
        <label className="label" htmlFor="phone">
          Telefono:
        </label>
        <input
          className="int"
          type="number"
          id="phone"
          placeholder=" Telefono"
        />
        <br />
        <label className="label" htmlFor="doc">
          {' '}
          C.I.
        </label>
        <input
          className="int"
          type="text"
          id="doc"
          placeholder="Escribe tu C.I."
        />
        <button className="btn">
          {' '}
          <strong>Enviar</strong>{' '}
        </button>
      </form>
    </Box>
  );
};
