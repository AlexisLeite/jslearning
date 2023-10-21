import { Box, Button } from '@chakra-ui/react';

const usuarios = [
  { name: 'Alexis', age: 32, Phone: 323145 },
  { name: 'Jorge', age: 55, Phone: 213659 },
  { name: 'Fernanda', age: 28, Phone: 259874 },
  { name: 'Joaquin', age: 39, Phone: 46987 },
  { name: 'Augusto', age: 22, Phone: 74568 },
];

export const ListadoUsuariosButtons = () => (
  <Box>
    {usuarios.map(current => (
      <Button
        key={current.name}
        onClick={() => alert(`${current.name} tiene edad ${current.age}`)}
      >
        {current.name}
      </Button>
    ))}
  </Box>
);

export const ListadoUsuarios = () => (
  <ul id="ListaUsuarios">
    {usuarios.map(current => (
      <li key={current.name}>
        Nombre <strong>{current.name} </strong> - Edad:
        <strong>{current.age}</strong> años - Telefono:{' '}
        <strong>{current.Phone}</strong>
      </li>
    ))}
  </ul>
);
