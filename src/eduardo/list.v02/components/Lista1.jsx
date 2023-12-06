import { Box, Heading } from '@chakra-ui/react';
/* arreglo*/
const Lista = [
  { nombre: 'Edu', apellido: 'Lacroix' },
  { nombre: 'Alexis', apellido: 'Leite' },
];
/* Para que el arreglo lista se trasnforem en arreglo de elemento 'li' dbemos poner en el componente,
a funcion.map*/
export const Lista1 = () => {
  return (
    <Box className="container">
      <Heading as="h1" className="Estilosh1">
        Lista 1
      </Heading>
      <ul>
        {Lista.map(current => (
          <li className="lista" key={current.nombre}>
            {' '}
            <span className="nombre"> Nombre:</span> {''}
            {current.nombre} <br />
            {'  '} <span className="apellido"> Apellido:</span>{' '}
            {current.apellido}
          </li>
        ))}
      </ul>
    </Box>
  );
};
