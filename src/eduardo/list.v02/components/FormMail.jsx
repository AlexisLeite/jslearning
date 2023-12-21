import { Box } from '@chakra-ui/react';

export const FormMail = () => {
  return (
    <Box className="caja">
      <form className="for">
        <label className="lab" htmlFor="name">
          Nombre:
          <input className="ent" type="text" id="name" placeholder="Nombre" />
        </label>
        <label className="lab" htmlFor="mail">
          <br /> Correo electronico:
          <input className="ent" type="email" id="mail" placeholder=" Correo" />
        </label>
        <br /> <br />
        <label className="lab" htmlFor="msg">
          Mensaje:
          <input
            className="mnsj"
            type="textTarea"
            id="msg"
            autocomplete="off"
          />{' '}
        </label>
        <label>
          <br /> <br />
          <input type="submit" />
        </label>
      </form>
    </Box>
  );
};
