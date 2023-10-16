import { Table } from '@chakra-ui/react';
import { numberToText } from './util';

const Paises = [
  { Pais: 'Uruguay', Capital: 'Montevideo', habitantes: 4000000 },
  { Pais: 'Argentina', Capital: 'Buenos Aires', habitantes: 40000000 },
  { Pais: 'Peru', Capital: 'Lima', habitantes: 20000000 },
  { Pais: 'Brasil', Capital: 'Brasilia', habitantes: 200000000 },
  { Pais: 'Bolivia', Capital: 'La Paz', habitantes: 10000000 },
];

export const ListadoPaisesAsLi = () => (
  <ul style={{ backgroundColor: 'orange', padding: '20px', margin: '0px' }}>
    {Paises.map(current => (
      <li key={current.Pais}>
        Pais <strong style={{ color: 'blue' }}>{current.Pais}</strong> - Capital
        :<strong style={{ color: 'blue' }}>{current.Capital}</strong> -
        Habitantes:
        <strong style={{ color: 'blue' }}>{current.habitantes}</strong>
      </li>
    ))}
  </ul>
);

export const ListadoPaisesAsTable = () => {
  return (
    <div id="TableWrapper">
      <Table>
        <thead>
          <tr>
            <th>País</th>
            <th>Capital</th>
            <th>Habitantes</th>
          </tr>
        </thead>
        <tbody>
          {Paises.sort((a, b) => (a.habitantes < b.habitantes ? -1 : 1)).map(
            current => (
              <tr key={current.Pais}>
                <th>{current.Pais}</th>
                <td>{current.Capital}</td>
                <td>{numberToText(current.habitantes)}</td>
              </tr>
            )
          )}
        </tbody>
      </Table>
    </div>
  );
};
