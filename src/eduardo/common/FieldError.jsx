import { Box } from '@chakra-ui/react';

export const FieldError = ({ error }) => {
  if (!error) return null;

  return (
    <Box as="span" className="fieldError">
      {error}
    </Box>
  );
};
