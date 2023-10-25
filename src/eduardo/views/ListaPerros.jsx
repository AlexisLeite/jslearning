import { Heading } from '@chakra-ui/react';

const perros = [
  {
    Dueño: 'Juan',
    Raza: 'Pastor  Aleman',
    Color: 'Manto negro',
    Edad: '2 años',
    Actividad: 'Correr',
  },
  {
    Dueño: 'Roberto',
    Raza: 'Colie',
    Color: 'beige/blanco',
    Edad: '4 años',
    Actividad: 'disco planeante',
  },
  {
    Dueño: 'Aexis',
    Raza: 'Labrador',
    Color: 'Beige',
    Edad: '3 años',
    Actividad: 'jugar pelota',
  },
  {
    Dueño: 'Edu',
    Raza: 'Bulldog frances',
    Color: 'negro',
    Edad: '5 años',
    Actividad: 'Pasear',
  },
  {
    Dueño: ' Ramon',
    Raza: 'Dogo',
    Color: 'Blanco',
    Edad: '1 año',
    Actividad: '',
  },
];
export function ListadoPerros() {
  return (
    <box>
      <Heading As="h1"> Lista de Perros- Razas</Heading>
      <ul>
        {perros.map(current => (
          <li key={current.Dueño}>
            {' '}
            Dueño: {current.Dueño} * Raza: {current.Raza} * Color:{' '}
            {current.Color} * Edad: {current.Edad} * Actividad:{' '}
            {current.Actividad}
          </li>
        ))}
      </ul>
    </box>
  );
}
