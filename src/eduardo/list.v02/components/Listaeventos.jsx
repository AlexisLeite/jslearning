import { Box, Heading } from '@chakra-ui/react';

const eventos = [
  {
    Hora: '17:00',
    Torneo: 'Copa Libertadores',
    team1: { name: 'Fluminense', flag: '/images/brasil.png' },
    team2: { name: 'Boca Jr', flag: '/images/brasil.png' },
  },

  {
    Hora: '18:30',
    Torneo: 'Brasileirao',
    team1: { name: 'Atletico Mineiro', flag: '/images/brasil.png' },
    team2: { name: 'America Mineiro', flag: '/images/brasil.png' },
  },

  {
    Hora: '19:00',
    Torneo: 'Campeonato Panamericano',
    team1: { name: 'Chile', flag: '/images/brasil.png' },
    team2: { name: 'Brasil', flag: '/images/brasil.png' },
  },

  {
    Hora: '19:30',
    Torneo: 'Campeonato Uruguayo',
    team1: { name: 'Nacional', flag: '/images/brasil.png' },
    team2: { name: 'River', flag: '/images/brasil.png' },
  },

  {
    Hora: '19:45',
    Torneo: 'Laliga',
    team1: { name: 'Barcelona', flag: '/images/brasil.png' },
    team2: { name: 'Rayo Vallecano', flag: '/images/brasil.png' },
  },
];

/**
 * Ejercicio
 *
 * IMPORTANTE, PRIMERO QUE TODO LO DEMÁS
 *
 * Hacer otro listado IDÉNTICO a este, en OTRO ARCHIVO
 * CON OTRO ID en el Box.
 */

export const Listaeventos = () => {
  return (
    <Box id="ListaEventos">
      <Heading as="h2">
        Eventos
        <br />
        Sábado 4 de noviembre de 2023
      </Heading>
      <table>
        {eventos.map(current => (
          <tr key={current.Hora}>
            <td className="game__hour">{current.Hora}</td>
            <td className="game__tournment">{current.Torneo}</td>
            <td className="game__team1__flag">
              <img src={current.team1.flag} alt="" />
            </td>
            <td className="game__team1__name">{current.team1.name}</td>
            <td className="game__team1__vs">vs</td>
            <td className="game__team2__name">{current.team2.name}</td>
            <td className="game__team2__flag">
              <img src={current.team2.flag} alt="" />
            </td>
          </tr>
        ))}
      </table>
    </Box>
  );
};
