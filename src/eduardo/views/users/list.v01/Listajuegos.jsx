import { Box, Heading } from '@chakra-ui/react';

const Juegos = [
  {
    Juego: 'Jungle speed',
    Descripcion: 'Juego de verano',
    Edad: ' 7 años en adelante',
    jugadores: ' 10 ',
  },
  {
    Juego: 'Ludo',
    Descripcion: 'Juego de mesa ',
    Edad: ' 8 años en adelante',
    jugadores: '4',
  },
  {
    Juego: ' Dama',
    Descripcion: 'Estrategia',
    Edad: '  6 años en adelante',
    jugadores: '2',
  },

  {
    Juego: 'Ajedrez ',
    Descripcion: ' Estrategia pensar',
    Edad: ' 7 años en adelante ',
    jugadores: '2',
  },
];
export function Listajuegos() {
  return (
    <Box id="Juegos">
      <Heading As="h1">Lista de juegos de mesa</Heading>

      <ul>
        {Juegos.map(current => (
          <li key={current.Juego}>
            <strong className=" Juego_etiqueta"> *Juego:</strong>{' '}
            <span className="Juego">{current.Juego}</span>{' '}
            <strong className="Descripcion_etiqueta"> *Descripcion:</strong>{' '}
            <span className="Descripcion">{current.Descripcion}</span>
            <strong className="Edad_etiqueta"> *Edad:</strong>{' '}
            <span className="Edad">{current.Edad}</span>{' '}
            <strong className="Jugadores_etiqueta">
              {' '}
              * Cantidad jugadores:
            </strong>{' '}
            <span className="jugadores">{current.jugadores}</span>
          </li>
        ))}
      </ul>
    </Box>
  );
}
