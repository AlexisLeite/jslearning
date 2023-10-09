import { Box, Heading, Text } from "@chakra-ui/react";
import './styles.css'

/**
 * EJERCICIO:
 * 
 * Entender lo que está pasando acá y lograr hacer lo mismo. Actualmente la función List que está más abajo está siendo exportada como default (dice: export default function List).
 * 
 * Para poder hacer el ejercicio, deberíamos quitar las palabras clave export default y crear una nueva función
 * con la sintaxis export default ListTuti como la que se muestra a continuación:
 * 
 * export default ListTuti() {
 *   ...Contenido de la vista que vos tenés que renderizar
 * }
 * 
 * En esta función, deberías primero lograr que se muestren los usuarios como hicimos al principio. Para ello
 * tu función debe retornar un contenido:
 * 
 * export default ListTuti() {
 *   return <Box>Hola mundo</Box>
 * }
 * 
 * Esta es la forma más elemental de retornar un contenido, solamente un Hola mundo. Mirando la función que yo hice,
 * deberías poder ir copiando de a una parte, hasta lograr mostrar nuevamente la lista.
 */

// Esto es un array de usuarios
/**
 * Un array está compuesto por muchos elementos, cada uno de algún tipo en específico. En este caso, cada elemento
 * es de la forma { name: string }, esto quiere decir que cada uno de los elementos de nuestra lista contiene un
 * objeto que a su vez contiene una propiedad name que es de tipo string: cadena de caracteres.
 */
const usuarios = [
  { name: 'Alexis', age: 32, phone: 1234 },
  { name: 'Eduardo', age: 35, phone: 6589 },
  { name: 'Pedro', age: 40, phone: 8795 },
  { name: 'Fernanda', age: 22, phone: 1478 },
  { name: 'Edu', age: 58, phone: 1456 }
];
// Mock data "Datos de prueba", sirve para poder trabajar
// sin preocuparnos por cómo obtener la información

/**
 * Arrow functions
 * 
 * En javascript la sintaxis () => { ... } es un arrow function. Esto es: una función anónima que se crea en el
 * momento en que es declarada para poder utilizarla.
 * 
 * En el caso de <Button onClick={() => { ... }} lo que estamos diciendo es que se llame a esa función cuando
 * el usuario haga click en el botón.
  */

// ul - Unordered list "Lista desordenada", es así porque en vez de números pone viñetas.
// ol - Ordered list "Lista ordenada", pone números

export default function List() {
  return <Box>
    <Heading as="h1">Listado de usuarios</Heading>
    <Text> A continuacion se listan todos los usuarios agregados</Text>

    {/* current significa "el elemento actual" */}
    <ul>
      {usuarios.map(current => <li key={current.name}> {current.name} tiene {current.age} años. su celular es: {current.phone}</li>)}
    </ul>
  </Box>


}