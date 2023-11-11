import { Box, Heading } from '@chakra-ui/react';

const policlinica = [
  {
    Usuario: 'Alexis Leiton',
    Consulta: 'Medicina Gral',
    Diagnostico: 'Lumbalgia',
    Fecha: '10/9/2023',
  },
  {
    Usuario: 'Yoana Perez',
    Consulta: 'Ginecologo',
    Diagnostico: 'Embarazo',
    Fecha: '12./10/2023',
  },
  {
    Usuario: 'Jose Fernandez',
    Consulta: 'Fisioterapia',
    Diagnostico: 'Esguince pie',
    Fecha: '20/10/2023',
  },
  {
    Usuario: 'Valentin Miller',
    Consulta: 'Cardiologo',
    Diagnostico: 'Cardiopatia',
    Fecha: '5/11/2023',
  },
];
export const ListaPoli = () => {
  return (
    <Box id="ListaPoli">
      <Heading As="h2">Consultas Policlinica</Heading>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Consulta</th>
            <th>Diagnóstico</th>
            <th>Fecha</th>
          </tr>
        </thead>
        <tbody>
          {policlinica.map(current => (
            <tr key={current.Usuario}>
              <td>{current.Usuario}</td>
              <td>{current.Consulta}</td>
              <td>{current.Diagnostico}</td> <td>{current.Fecha}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Box>
  );
};
