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
            <strong className="Dueño_etiqueta"> *Dueño: </strong>
            <strong className="Dueño">{current.Dueño} </strong>
            <strong className="Raza_etiqueta"> *Raza:</strong>{' '}
            <strong className="Raza">{current.Raza} </strong>{' '}
            <strong className="Color_etiqueta">*Color:</strong>{' '}
            <strong className="Color">{current.Color} </strong>{' '}
            <strong className="Edad_etiqueta">*Edad :</strong>{' '}
            <strong className="Edad">{current.Edad} </strong>
            <strong className="Actividad_etiqueta">*Actividad:</strong>{' '}
            <strong className="Actividad">{current.Actividad} </strong>
          </li>
        ))}
      </ol>
    </Box>
  );
}
