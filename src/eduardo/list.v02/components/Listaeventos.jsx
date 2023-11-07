import { Box, Heading } from '@chakra-ui/react';

const eventos = [
  {
    Hora: '17:00',
    Torneo: 'Copa Libertadores',
    Encuentro: 'Fluminense vs Boca Jr:',
  },

  {
    Hora: '18:30',
    Torneo: 'Brasileirao',
    Encuentro: ' Atletico Mineiro vs America Mineiro',
  },

  {
    Hora: '19:00',
    Torneo: 'Campeonato Panamericano',
    Encuentro: ' Chile vs Brasil',
  },

  {
    Hora: '19:30',
    Torneo: 'Campeonato Uruguayo',
    Encuentro: 'Nacional vs River',
  },

  { Hora: '19:45', Torneo: 'Laliga', Encuentro: 'Barcelona vs Rayo Vallecano' },
];

export const Listaeventos = () => {
  return (
    <Box>
      <Heading As="h1" className="Title1">
        {' '}
        Eventos - Sábado 4 de noviembre de 2023{' '}
      </Heading>
      <img src="" alt="" />
      <ul className="ul">
        {eventos.map(current => (
          <li key={current.Hora} className="Lista1 ">
            {' '}
            -{current.Hora}-{current.Torneo}-{current.Encuentro}
          </li>
        ))}
      </ul>
    </Box>
  );
};
