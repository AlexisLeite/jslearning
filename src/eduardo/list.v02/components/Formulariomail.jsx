import { Box, Heading } from '@chakra-ui/react';

export const Formulariomail = () => {
  return (
    <Box>
      <Heading
        as="h1
      "
        className="title"
      >
        {' '}
        Envianos tu comentario
      </Heading>

      <form className="for">
        <label className="lab" htmlFor="name">
          Nombre:
        </label>
        <input className="entrada" type="text" id="name" placeholder="Nombre" />
        <label className="lab" htmlFor="mail">
          {' '}
          Correo Electronico
        </label>
        <input
          className="entrada"
          type="email"
          id="mail"
          placeholder=" Correo"
        />
        <label className="lab" htmlFor="msg">
          Mensaje
        </label>
        <input className="entrada" type="textTarea" id="msg" />
      </form>
    </Box>
  );
};
