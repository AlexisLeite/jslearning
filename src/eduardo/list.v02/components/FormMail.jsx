import { Box } from '@chakra-ui/react';

export const FormMail = () => {
  return (
    <Box className="caja">
      <form className="for">
        <label className="lab" htmlFor="name">
          Nombre:
        </label>
        <input className="ent" type="text" id="name" placeholder="Nombre" />
        <label className="lab" htmlFor="mail">
          <br /> Correo electronico:
        </label>
        <input className="ent" type="email" id="mail" placeholder=" Correo" />
        <br /> <br />
        <label className="lab" htmlFor="msg">
          Mensaje:
        </label>
        <input className="mnsj" type="textTarea" id="msg" autocomplete="off" />{' '}
        <br /> <br />
        <input type="submit" />
      </form>
    </Box>
  );
};
