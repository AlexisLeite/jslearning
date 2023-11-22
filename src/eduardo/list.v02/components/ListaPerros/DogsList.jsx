import { Box, Heading } from '@chakra-ui/react';
import { DogDetails } from './DogDetails';

const dogs = [
  { name: 'Dog1', attribute: 'Muy lindo' },
  { name: 'Dog2', attribute: 'Muy loco' },
  { name: 'Dog3', attribute: 'Grandote' },
];

export const DogsList = () => {
  return (
    <Box id="ListaPerros">
      <Heading as="h2" className="withPadding1 ">
        Lista de perros
      </Heading>
      <Box as="ul" className="withPadding1">
        {dogs.map(current => (
          <DogDetails
            name={current.name}
            attribute={current.attribute}
            key={current.name}
          />
        ))}
      </Box>
    </Box>
  );
};
