import { Box, Heading, Link } from '@chakra-ui/react';
import { Listado } from './Listado';
import { useCurrentPage } from '../eduardo/common/useCurrentPage';

export const Ejemplos = () => {
  const route = useCurrentPage({
    listado: /listado/,
  });

  return (
    <Box
      sx={{
        padding: 6,
        display: 'flex',
        flexDirection: 'column',
        gap: 5,
      }}
    >
      <Box
        sx={{
          padding: 6,
          border: '1px solid #999',
          display: 'flex',
          flexDirection: 'column',
          gap: 5,

          a: {
            textDecoration: 'underline',
          },
          backgroundColor: '#f8f8ff',
        }}
      >
        <Heading as="h5">Algunos ejemplos</Heading>
        <Box as="ul">
          <li>
            <Link href="/ejemplos/listado">Listado</Link>
          </li>
        </Box>
      </Box>
      {route === 'listado' && <Listado />}
    </Box>
  );
};
