import { Heading } from '@chakra-ui/react';

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
    <box id="Juegos">
      <Heading As="h1">Lista de juegos de mesa</Heading>

      <ul>
        {Juegos.map(current => (
          <li key={current.Juego}>
            Nombre Juego: {current.Juego} - Descripcion: {current.Descripcion} -
            Edad: {current.Edad} - Cantidad jugadores: {current.jugadores}
          </li>
        ))}
      </ul>
    </box>
  );
}
