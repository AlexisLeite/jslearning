import React from 'react';
import { Heading, Text } from '@chakra-ui/react';

const Paises = [
  { Pais: 'Uruguay', Capital: 'Montevideo', habitantes: 4000000 },
  { Pais: 'Argentina', Capital: 'Buenos Aires', habitantes: 40000000 },
  { Pais: 'Peru', Capital: 'Lima', habitantes: 20000000 },
  { Pais: 'Brasil', Capital: 'Brasilia', habitantes: 200000000 },
  { Pais: 'Bolivia', Capital: 'La Paz', habitantes: 10000000 },
];

export const ListadoPaises = () => (
  <box id="ListadoPaises">
    <Heading as="h1">Listado de Paises</Heading>
    <Text>Lista de paises capitales y hab</Text>
    <ul style={{ backgroundColor: 'orange', padding: '20px', margin: '0px' }}>
      {Paises.map(current => (
        <li key={current.Pais}>
          Pais <strong style={{ color: 'blue' }}>{current.Pais}</strong> -
          Capital :<strong style={{ color: 'blue' }}>{current.Capital}</strong>{' '}
          - Habitantes:
          <strong style={{ color: 'blue' }}>{current.habitantes}</strong>
        </li>
      ))}
    </ul>
  </box>
);
