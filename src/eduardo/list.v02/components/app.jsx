import { Box, Heading } from '@chakra-ui/react';
const Button = () => (
  <Box as="button" borderRadius="md" bg="tomato" color="white" px={4} h={8}>
    CLick
  </Box>
);

export const Maraca = () => {
  return (
    <Box
      bg="green.400"
      w="100%"
      p={20}
      color="white"
      mt="1"
      fontWeight="semibold"
      as="h4"
      lineHeight="tight"
      noOfLines={1}
      textTransform="uppercase"
      textAlign="center"
      borderBottom="0"
    >
      <Heading> Hola Mundo!!</Heading>
      <Button />
    </Box>
  );
};
