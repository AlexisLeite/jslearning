import { Box } from '@chakra-ui/react';

/**
 * Este componente mostrará los detalles de un perro en particular.
 *
 * Acepta un objeto de propiedades llamado props que tiene dos propiedades: name y attribute
 */
export const DogDetails = props => {
  return (
    <Box className="cadaPerro" as="li">
      <Box as="span" className="underlined bold">
        {props.name}:
      </Box>{' '}
      Este es un perro{' '}
      <Box as="span" className="withHover withActive uppercased">
        {props.attribute}
      </Box>
    </Box>
  );
};
