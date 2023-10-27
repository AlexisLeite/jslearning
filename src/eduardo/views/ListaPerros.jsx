import { Box, Heading } from '@chakra-ui/react';
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
    Dueño: 'Alexis',
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
    <Box id="Perros">
      <Heading As="h1"> Lista de Perros- Razas</Heading>
      <ol>
        {perros.map(current => (
          <li key={current.Dueño}>
            {' '}
            <strong style={{ color: 'black' }}>*Dueño: </strong>
            <strong style={{ color: 'blue' }}>{current.Dueño} </strong>
            <strong style={{ color: 'black' }}>*Raza:</strong>{' '}
            <strong style={{ color: 'blue' }}>{current.Raza} </strong>{' '}
            <strong style={{ color: 'black' }}>*Color:</strong>{' '}
            <strong style={{ color: 'blue' }}>{current.Color} </strong>{' '}
            <strong style={{ color: 'black' }}>*Edad :</strong>{' '}
            <strong style={{ color: 'blue' }}>{current.Edad} </strong>
            <strong style={{ color: 'black' }}>*Actividad:</strong>{' '}
            <strong style={{ color: 'blue' }}>{current.Actividad} </strong>
          </li>
        ))}
      </ol>
    </Box>
  );
}
