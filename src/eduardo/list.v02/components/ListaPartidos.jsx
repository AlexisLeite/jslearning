import { Box, Heading } from '@chakra-ui/react';

const partidos = [
  {
    Hora: '15:30',
    Torneo: 'Copa Libertadores',
    team1: { name: 'Boca Jr', flag: '/images/argentina.png' },
    team2: { name: 'Fluminense', flag: '/images/brasil.png' },
  },
  {
    Hora: '20:00',
    Torneo: 'Brasileirao',
    team1: { name: 'Atletico Paranaense', flag: '/images/brasil.png' },
    team2: { name: 'Flamengo', flag: '/images/brasil.png' },
  },

  {
    Hora: '21:00',
    Torneo: 'Liga Española',
    team1: { name: 'Real Madrid', flag: '/images/españa.png' },
    team2: { name: 'Bacelona FC', flag: '/images/españa.png' },
  },
  {
    Hora: '17:00',
    Torneo: 'Torneo Uruguayo',
    team1: { name: 'Nacional de Mdeo', flag: '/images/uruguay.png' },
    team2: { name: 'Montevideo Torque', flag: '/images/uruguay.png' },
  },
];
export const ListaPartidos = () => {
  return (
    <Box id="ListaPartidos">
      <Heading As="h1">
        Partidos <br /> Viernes 10 de noviembre 2023
      </Heading>
      <table>
        {partidos.map(current => (
          <tr key={current.Hora}>
            <td className="game__hour">{current.Hora}</td>
            <td className="game__tournment">{current.Torneo}</td>
            <td className="game__team1__flag">
              <img src={current.team1.flag} alt="" />
            </td>
            <td className="game__team1__name">{current.team1.name}</td>
            <td className="game__team1__vs">vs</td>
            <td className="game__team2__name"> {current.team2.name}</td>
            <td className="game__team2__flag">
              <img src={current.team2.flag} alt="" />
            </td>
          </tr>
        ))}
      </table>
    </Box>
  );
};
