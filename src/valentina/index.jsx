/**
 * Tareas para la próxima:
 *  - Buscar qué es un lenguaje de programación.
 *  - Buscar qué hace diferente a javascript de otros lenguajes.
 *
 * En este "curso" vamos a trabajar con javascript y React
 *
 * React es un framework
 *  - Buscar qué es un framework
 *  - Buscar qué es React
 *
 * Cuando queremos mostrar información o interactuar con el usuario, lo hacemos
 * a través de la manipulación de "estados". Un estado es un conjunto de variables
 * que tienen un determinado valor en el tiempo.
 *
 * Un ejemplo tonto de esto sería:
 *
 * Si yo quiero que el usuario ingrese su nombre, el primer estado es tener un input
 * vacío. Y el segundo estado podría ser el mismo input con su nombre adentro.
 *
 * ¿Qué está pasando en el listado de usuarios?
 *
 * La varible usuarios es una variable de tipo array. Los arrays son un conjunto de datos.
 *  - Buscar en internet qué es un array.
 *
 * En este caso, cada uno de los elementos del array es un objeto que representa a un usuario.
 *  - Buscar en internet qué es un objeto en javascript.
 *  - Buscar qué es una propiedad de un objeto en javascript.
 *
 * Las propiedades de un objeto en forma sencilla son campos que almacenan valores. En este caso
 * cada usuario tiene 3 campos: name, age y phone, en donde almacenan su nombre, edad y teléfono.
 *
 * La expresión *usuarios.map* toma cada uno de los elementos del array de usuarios y nos permite
 * convertirlo en otra cosa. En este caso, cada elemento del array se está convirtiendo en un
 * elemento <li>
 *
 * Los elementos <ul> y <li> en HTML son utilizados para definir listas. Es por ello que en el browser
 * vemos un listado.
 */

import { Box } from '@chakra-ui/react';

const usuarios = [
  { name: 'Alexis', age: 32, phone: 323145 },
  { name: 'Jorge', age: 55, phone: 213659 },
  { name: 'Fernanda', age: 28, phone: 259874 },
  { name: 'Joaquin', age: 39, phone: 46987 },
  { name: 'Augusto', age: 22, phone: 74568 },
  { name: 'Valentina', age: 20, phone: 23423 },
];

export const PaginaValentina = () => {
  return (
    <Box>
      <strong>[Este listado se hace a mano]</strong> A continuación, un listado
      de países:
      <ul>
        <li>Uruguay</li>
        <li>Argentina</li>
        <li>Brasil</li>
      </ul>
      <strong>[Este listado se hace automáticamente]</strong> Hola Valentina, a
      continuación tenés un listado de usuarios:
      <ul>
        {usuarios.map(current => (
          <li key={current.name}>
            {current.name} tiene {current.age} años.
          </li>
        ))}
      </ul>
    </Box>
  );
};
