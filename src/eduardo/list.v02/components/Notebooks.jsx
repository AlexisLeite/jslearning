import { Box, Heading } from '@chakra-ui/react';

const equipos = [
  {
    Producto: 'Notebook',

    Marca: 'Sony',
    Modelo: 'P 321',
    Procesador: 'Intel Core i5',
    Memoria: '8Gb ddr3',
    Pantalla: '18 pulgadas',
  },
  {
    Producto: 'Notebook',

    Marca: 'Sony',
    Modelo: 'P 321',
    Procesador: 'Intel Core i5',
    Memoria: '8Gb ddr3',
    Pantalla: '18 pulgadas',
  },
  {
    Producto: 'Notebook',

    Marca: 'Sony',
    Modelo: 'P 321',
    Procesador: 'Intel Core i5',
    Memoria: '8Gb ddr3',
    Pantalla: '18 pulgadas',
  },
  {
    Producto: 'Notebook',

    Marca: 'Sony',
    Modelo: 'P 321',
    Procesador: 'Intel Core i5',
    Memoria: '8Gb ddr3',
    Pantalla: '18 pulgadas',
  },
];

export const Notebooks = () => {
  return (
    <Box className="Notebooks">
      <Heading as="h1" className="estilo">
        {' '}
        Productos Informaticos
      </Heading>
      <table>
        <thead>
          <tr>
            <th>Produccto</th>
            {''}
            <th>Modelo</th>
            <th>CPU</th>
            <th>Memoria del sistema</th>
            <th>Display</th>
          </tr>
        </thead>
        <tbody>
          {equipos.map(current => (
            <tr key={current.Producto}>
              <td>{current.Producto}</td>
              <td>{current.Modelo}</td>
              <td>{current.Procesador}</td>
              <td>{current.Memoria}</td>
              <td>{current.Pantalla}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Box>
  );
};
