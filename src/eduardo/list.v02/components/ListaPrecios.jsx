import { Box, Heading } from '@chakra-ui/react';

const precios = [
  { Nombre: 'Pizza c/Muzza', Cantidad: 'metro', Precio: ' $550' },
  { Nombre: 'Pizza c/salame', Cantidad: ' metro', Precio: '$500' },
  { Nombre: ' Pizza cuatro quesos', Cantidad: 'metro', Precio: '$600' },
  { Nombre: 'Pizzeta', Cantidad: ' unidad', Precio: '$300 ' },
  { Nombre: ' Empanadas criollas', Cantidad: ' unidad', Precio: ' $80' },
  { Nombre: 'Empanadas arabes', Cantidad: 'unidad', Precio: ' $90' },
  { Nombre: 'Empanadas salteñas', Cantidad: ' unidad', Precio: '$80' },
];

export const ListaPrecios = () => {
  return (
    <Box Id="ListaPrecios">
      <Heading As="h1">Comidas y Precios</Heading>
      <table>
        <thead>
          <tr>
            <th>Comida</th>
            <th>Porcion</th>
            <th>Precio</th>
          </tr>
        </thead>

        {precios.map(current => (
          <tr key={current.Nombre}>
            <td>{current.Nombre}</td>
            <td>{current.Cantidad}</td>
            <td>{current.Precio}</td>
          </tr>
        ))}
      </table>
    </Box>
  );
};
