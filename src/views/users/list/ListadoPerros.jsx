import React from 'react';
import './styles.css';
import { Box, Heading, Text } from '@chakra-ui/react';

//* de esta forma hice una lista con jsx*/
const perros = [
  { dueño: 'Esteban', raza: 'Caniche', color: 'blanco', actividad: 'correr' },
  {
    dueño: 'Juan',
    raza: 'Pastor aleman',
    color: 'marron',
    actividad: 'disco planeante',
  },
  {
    dueño: 'Pedro',
    raza: 'Dogo de Burdeos',
    color: 'marron',
    actividad: 'pelota',
  },
  {
    dueño: 'Alexis',
    raza: 'bulldog frances',
    color: 'negro',
    actividad: 'pasear',
  },
  { dueño: 'Jazmin', raza: 'labrador', color: 'beige', actividad: 'caminar' },
];
//* Esta parte la exportamos  adonde la necesitamos,
//*aca ya tenemos un estilo hecho para destacar alguna parte de la lista */

/**
 * Los componentes en React son en realidad funciones.
 *
 * Una función en javascript puede devolver o no un valor.
 *
 * Ejemplo:
 * La función console.log muestra un contenido en la consola, pero no devuelve ningún valor.
 * La función Math.random() devuelve un número aleatorio.
 *
 * React declara los componentes como funciones que DEVUELVEN un JSX.
 *
 * En nuestro caso, el ul es un Elemento JSX, devuelto por la función ListadoPerros, y eso
 * es lo que permite usarlo como componente en el index.jsx
 *
 * Los dos formatos son equivalentes:
 * const Component1 = () => (<div>Hola mundo</div>)
 * const Component2 = () => { return <div>Hola mundo</div> }
 *
 * La diferencia que hay, es que en el segundo formato, se pueden hacer declaraciones adicionales
 * dentro del cuerpo de la función:
 *
 * const Component3 = () => {
 *   const nombre = 'El pepe'; // Se declara una variable dentro de la función
 *   return <div>{nombre}</div>
 * }
 */
export const ListadoPerros = () => {
  return (
    <Box id="ListadoPerros">
      <Heading as="h1">Lista de perros razas y dueños</Heading>
      <Text>A continuación se muestra una lista de perros:</Text>
      <ul>
        {perros.map(current => (
          <li key={current.raza}>
            <strong style={{ color: 'black' }}> Dueño</strong>
            <strong> * {current.dueño}</strong>
            <strong style={{ color: 'black' }}> Raza</strong>
            <strong> * {current.raza}</strong>
            <strong style={{ color: 'black' }}> Color</strong>
            <strong> * {current.color} </strong>
            <strong style={{ color: 'black' }}> Act.</strong>
            <strong> *{current.actividad}</strong>
          </li>
        ))}
      </ul>
    </Box>
  );
};
