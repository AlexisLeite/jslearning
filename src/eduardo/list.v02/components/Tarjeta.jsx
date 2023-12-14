import { Box, Heading } from '@chakra-ui/react';

export const Tarjeta = ({ Titulo, subtitulo }) => {
  return (
    <Box className="Tarjeta">
      <Heading>{Titulo}</Heading>
      <h2>{subtitulo}</h2>
      <h1>
        Tarjeta del tuti <br /> Intento ser programador <br />
        Esta app es mia!
      </h1>
    </Box>
  );
};
