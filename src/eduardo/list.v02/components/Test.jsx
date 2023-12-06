import { Heading } from '@chakra-ui/react';
const MyButton = () => (
  <button
    style={{
      color: 'black',
      backgroundColor: 'rgb(178, 178, 178)',
      padding: '10px 40px',
      borderRadius: '30px',
      border: '1px solid',
      margin: '20px 200px',
    }}
  >
    {' '}
    Boton
  </button>
);

export const Test = () => {
  return (
    <div>
      <Heading style={{ textAlign: 'center', backgroundColor: 'aqua' }}>
        Click en el Boton
      </Heading>
      <MyButton />
    </div>
  );
};
