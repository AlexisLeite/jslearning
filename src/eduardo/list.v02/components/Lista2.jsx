import { Box, Heading } from '@chakra-ui/react';

const Lista = [
  { nombre: 'Jose', apellido: 'Ramos' },
  { nombre: 'Pepe', apellido: 'Vazquez' },
];

export const Lista2 = () => {
  return (
    <Box className="container">
      <Heading as="h1" className="Estilosh1 ">
        Lista 2
      </Heading>
      <ul>
        {Lista.map(current => (
          <li className="lista" key={current.nombre}>
            <span className="nombre"> Nombre: </span>
            {current.nombre} <br />
            <span className="apellido"> Apellido:</span> {current.apellido}
          </li>
        ))}
      </ul>
    </Box>
  );
};
