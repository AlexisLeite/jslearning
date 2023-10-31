import {
  Box,
  Button,
  Heading,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Tr,
} from '@chakra-ui/react';
import { useState } from 'react';

const usuarios = [
  { name: 'Alexis', age: 32 },
  { name: 'Eduardo', age: 35 },
  { name: 'Pedro', age: 40 },
  { name: 'Fernanda', age: 22 },
];

export default function List() {
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 3,
        p: 6,
      }}
    >
      <Heading as="h1">Listado de usuarios</Heading>
      {currentUser && (
        <>
          <Table variant="simple">
            <Tbody>
              <Tr>
                <Th>Nombre</Th>
                <Td>{currentUser.name}</Td>
              </Tr>
              <Tr>
                <Th>Edad</Th>
                <Td>{currentUser.age}</Td>
              </Tr>
            </Tbody>
          </Table>
          <Button onClick={() => setCurrentUser(null)}>Cerrar</Button>
        </>
      )}
      <Text>
        A continuación se listan todos los usuarios agregados al sistema, haz
        click en alguno de ellos para ver los detalles:
      </Text>
      <ul>
        <li>Alexis</li>
        <li>Eduardo</li>
        <li>Pedro</li>
        <li>Fernanda</li>
      </ul>

      <ul>
        {usuarios.map(current => (
          <li key={current.name}>{current.name}</li>
        ))}
      </ul>
    </Box>
  );
}
