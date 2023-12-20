import { Box, Button } from '@chakra-ui/react';
const styles = {
  borderRadius: '8px',
  background: 'rgb(221, 211, 211)',
  marginTop: '10px',
  padding: '140px 80px',

  width: 'auto',
  display: 'flex',
  flexDirection: '',
  gap: 1,
};

export const Calculadora = () => {
  return (
    <Box sx={styles}>
      <Button>1</Button>
      <Button>2</Button>
      <Button>3</Button>
      <Button>4</Button>
      <Button>5</Button>
      <Button>6</Button>
      <Button>7</Button>
      <Button>8</Button>
      <Button>9</Button>
      <Button>0</Button>
    </Box>
  );
};
