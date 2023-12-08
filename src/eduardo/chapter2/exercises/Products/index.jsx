import { Box, Heading, Text } from '@chakra-ui/react';
import { AddNewProduct } from './AddNewProduct';

export const Products = () => {
  return (
    <Box className="ProductsPage">
      <Heading as="h2">Add new Product</Heading>
      <AddNewProduct
        onCreate={newProduct => {
          console.log(newProduct);
        }}
      />
      <Heading as="h2">Current products</Heading>
      <Text color="red.500">
        Aquí se debe mostrar un listado de todos los productos agregados. Para
        ello, se deberá mantener un estado en el que se guardarán los distintos
        productos que se vayan agregando en el formulario anterior.
      </Text>
      <Text color="red.500">
        Para poder validar nuestro formulario, podríamos hacer uso del método{' '}
        <strong>validateForm</strong> que hicimos para el formulario de
        contacto. Intentar copiar la forma en que se crean los elementos en ese
        formulario.
      </Text>
      <Text color="red.500">
        La diferencia principal que encontraremos, es que aquí no tendremos
        ningún store al cual llamar para agregar los productos (todavía). En
        cambio, deberemos agregarlos directamente a un estado.
      </Text>
      <Text color="red.500">
        Ante cualquier duda acerca de cómo manejar estados, buscamos en google{' '}
        <strong>Crear una lista en React</strong>
      </Text>
      <Heading as="h2">Products brands</Heading>
      <Text color="red.500">
        Aquí crearemos una lista de todas las marcas de todos los productos.
        Deberemos utilizar un enfoque similar al utilizado en{' '}
        <strong>find5Emitters</strong> que se encuentra en el archivo
        IncomingMessages/index.jsx.
      </Text>
      <Text color="red.500">
        Esencialmente, lo que se debe hacer es: recorrer la lista desde el final
        hasta el principio chequeando la propiedad brand del producto (Esto
        todavía no existe, tenés que crearlo cuando armes la lista). Si el brand
        de un producto todavía no fue agregado a la colección de brands
        existentes, se agrega, y sino no se hace nada. Opcionalmente, se puede
        decidir interrumpir el bucle al alcanzar una cantidad X de brands. En el
        de emitters, lo hace al encontrar 5.
      </Text>
    </Box>
  );
};
