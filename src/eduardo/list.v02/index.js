import { Box } from '@chakra-ui/react';
import { styles } from './styles';´

/**

 Modularización:
 Es la capacidad de "encapsular" el código en distintos archivos, generalmente cada archivo cumple un rol distinto y entre todos
 conforman un bloque mayor. En nuestro ejemplo vamos a hacer varios módulos, cada uno de ellos representará una lista o unidad
 de información dentro de la aplicación.

 Para crear un módulo, alcanza con crear un nuevo archivo y desde él deberemos uttilizar la notación propia del lenguaje:

 // Exporta una variable llamada nombreVar con el texto 'Hola mundo'
 export const nombreVar = 'Hola mundo';

 // Exporta una función llamada sum que devuelve la suma de dos números
 export function sum(a,b) {
   return a+b; 
 }

 // Exporta un componente llamado List que muestra un heading y un listado
 export const List = () => {
    return <Box>
    </Box>
 }


 */

export const List02 = () => {
  return <Box sx={styles}>Hola mundo</Box>;
};
