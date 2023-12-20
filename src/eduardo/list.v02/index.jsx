/**- **git add .** // Agrega todos los archivos al "Staging tree"
- **git commit -m "UN MENSAJE CUALQUIERA"** // Crea un "commit" con el mensaje indicado, generalmente el mensaje debe ser descriptivo de la tarea realizada.
- **git push** // Sube las cosas a la nube

## Antes de empezar a trabajar cada día

Antes de empezar a trabajar cada día deberíamos ejecutar el comando **git pull**.

 # Modularización:
 
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
      <Heading>Cabecera</Heading>
      <Box as="ul">
        <li>Item 1</li>
        <li>Item 2</li>
      </Box>
    </Box>
 }

 Leer la siguiente documentación
 https://lenguajejs.com/javascript/modulos/que-es-esm/


 # Qué es un componente en React

 Los componentes van muy bien de la mano con la modularización ya que cada uno de ellos podría
 pensarse como un módulo en sí. Lo que nos permiten los componentes es aislar porciones de código
 para facilitar la construcción de bloques más grandes.

 Imaginemos el caso en que queremos construir una página de bienvenida con un login, sería más sencillo
 tener algunos grandes bloque preconstruidos:

 - El formulario de login
 - El formulario de registro
 - El formulario de recuperación de contraseña

 En realidad, esos tres componentes son un ejemplo muy válido pero muchas veces queremos construir 
 componentes incluso mucho más pequeños, como por ejemplo el input de usuario bien podría ser un 
 componente en sí mismo. Supongamos que al introduciro su nombre el usuario, el sistema deba
 consultar contra un servidor si el nombre de usuario que se está introduciendo es válido. Podríamos
 hacer que al usuario escribir, preguntara y si el server devuelve una sugerencia mostrarla inmediatamente.
 
 Entonces, el campo input podría bien aislar este comportamiento para evitar que se mezclen cosas de 
 distintas partes de la vista.

 Otro ejemplo de componentes podría ser, si pensamos en una calculadora, podríamos tener varios componentes:
 los botones serían componentes y el visor de resultado sería otro. Además, habría un componente global qué
 sería la calculadora que dentro tendría los botones y el visualizador. Podríamos también tener un historial
 de las acciones del usuario. Este historial sería una componente y cada una de las entradas del historial
 sería también un componente.

 Como podemos ver, en React los componentes se usan para todo!
 
 Leer la siguiente documentación:
 https://es.react.dev/learn/describing-the-ui

 # Cómo organizar los distintos elementos de una vista para ahorrar esfuerzo a la hora de dar estilos

 Cada vez que estamos armando una vista nueva, en el caso de lo que has venido haciendo hasta ahora sería
 la vista de los listados por ejemplo; nuestro trabajo principal consiste en idear una forma en la que
 los distintos elementos coexistan bajo una estructrua definida y armóninca, de forma que sea barato para
 nosotros desde un punto de vista de esfuerzo mental entender qué es lo que está pasando y cómo debemos
 hacer para poder dar estilos y estrctura a los distintos elementos que queremos mostrar.

 Como ejemplo de esto, digamos que tenemos la misma situación de antes: queremos mostrar varios listados
 en forma consecutiva y cada uno de ellos tendrá un título. Además, sabemos que es posible que haya varios
 elementos que estén remarcados en negrita o con alguna decoración como ser underline o color diferente
 que el resto. Incluso podríamos pensar en elementos a los que al pasarles el mouse por encima cambien de
 color.

 Lo primero es identificar cuáles son las estructuras princpales:

 En nuestro caso, el elemento de mayor jerarquía de todos será el contenedor, que será además el que tenga
 el objeto global de estilos importado desde el archivo styles.js.

 Luego, le siguen cada uno de los encabezados y cada una de las listas. Sabemos que cada encabezado y acada
 lista deberá ser hijo directo de nuestro contenedor. Con esto definimos dos niveles hasta ahora.

 El tercer nivel, será interno a cada uno de los elementos antes mencionados. Por ejemplo, es posible que 
 queramos remarcar algunas palabras en un elemento de la lista, para ello contaremos con algunos elementos
 de tipo span o strong.

 Una vez que tenemos las estructura principales identificadas, podemos proceder a nombrarlas, incluso mucho
 antes de escribir ni una sola línea de código, hagamos el ejercicio a continuación:

 Quiero escribir 3 listas, una de perros, otra de usuarios y otra de juegos de mesa. 
 Como mencioné anteriormente, voy a tener un contenedor al que le voy a llamar por su id="Container".

 Cada una de las listas tendrá a su vez un identificador también, por lo que tendré id="ListaJuegos",
 id="ListaPerros" e id="ListaUsuarios".

 Preveo que voy a necesitar al menos 3 tipos diferentes de clases que me permitan señalar elementos de forma
 que resalten. Para ello me voy a valer de los siguientes elementos:

 .underlined:   Permitirá poner subrayado a un elemento
 .bold:         Permitirá poner negrita a un elemento
 .uppercased:   Permitirá poner todo en mayúsculas un elemento
 .withHover:    Permitirá hacer un efecto al pasar el mouse por encima
 .withPadding1: Permitirá darle padding de tamaño 1 a un elemento   
 .withPadding2: Permitirá darle padding de tamaño 2 a un elemento   
 .withPadding3: Permitirá darle padding de tamaño 3 a un elemento 

 Ahora que tengo estas definiciones, ya puedo hacer mi hoja de estilos

 # Estructurado de objeto de estilos

 Estudiar el siguiente enlace para saber qué son los objetos en javascript

 https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Working_with_objects

 En nuestra modalidad de trabajo usaremos la propuesta de Chakra UI (https://chakra-ui.com/) para dar estilos
 a nuestra aplicación. Chakra UI propone muchas formas para hacerlo pero nos interesa particularmente una, es 
 la que define todos los estilos en una propiedad sx. Nosotros le estamos dando una 'vuelta de tuerca' a este
 concepto y estamos utilizando esta propiedad en conjunto con la importación de un objeto desde el archivo
 styles.js, lo que nos permite trabajar desde un archivo de estilos como si estuviéramos dentro de la propiedad
 sx. Este enfoque nos permite mantener los estilos separados del resto de la aplicación sin perder la capacidad
 de la propiedad sx.

 La propiedad sx es especialmente útil en algunas situaciones como por ejemplo, en las pseudo-clases de CSS
 cuando queremos dar estilos diferente a algo si se le pasa el mouse por encima. Para ello nos facilita un operador
 &. El operador & nos da la capacidad de declarar estilos particulares para una variante diferente del elemento
 en el que está contenido. Para esto podemos tener varios ejemplo: uno de ellos son las pseudo cases hover y active
 (https://www.w3schools.com/css/css_pseudo_classes.asp). Este no es el único ejemplo interesante, también podemos
 por ejemplo querer dar estilos a una elemento solamente cuando tiene dos clases al mismo tiempo. Veamos algunos
 ejemplos:

 '.dogName': {
   fontWeight: bold;

   '&:hover': {
     color: 'red'
   },

   '&.bigBoy': {
     textTransform: 'uppercase'
   }
 }

 En este ejemplo tenemos una clase llamada dogName (que la utilizaremos con el attribute className="dogName") en
 la que le estamos dando negrita al nombre del perro. Además, cuando el mouse se pasa por encima el color cambia
 a rojo. Y también, si se le agrega una segunda clase bigBoy, el nombre aparecerá todo en mayúsculas 
 (className="dogName bigBoy").

 Es importante ver que el '&:hover' hace referencia a '.dogName:hover' y que '&.bigBoy' hace referencia a
 '.dogName.bigBoy' que es exactamente como usaríamos los selectores en CSS plano (https://developer.mozilla.org/es/docs/Web/CSS/CSS_selectors).


 # Ejercicios para la semana


 Hice un listado de perros, hacer otros 4 listados que te parezcan interesantes. Procurar que la estrctura de carpetas
 y estilos se mantenga prolija, igual que como está ahora. Si en algún momento detectás que la estrctura se está
 desordenando, es preferible que inviertas algunas horas en volver a ordenarla y no que sigas avanzando, ya que sino
 luego el daño va a ser irreversible.


 Investigar sobre formularios en HTML (https://developer.mozilla.org/es/docs/Learn/Forms/Your_first_form).


 */

import { Box, Button, Heading } from '@chakra-ui/react';

import { styles } from './styles';
import { DogsList } from './components/ListaPerros/DogsList';
import { Listaeventos } from './components/Listaeventos';
import { ListaPartidos } from './components/ListaPartidos';
import { ListaPoli } from './components/LitsaPoli';
import { ListaPrecios } from './components/ListaPrecios';
import { Tarjeta } from './components/Tarjeta';
import { Pruebas } from './components/Pruebas';
import { Notebooks } from './components/Notebooks';
import { Lista1 } from './components/Lista1';
import { Lista2 } from './components/Lista2';
import { Formulario } from './components/Formulario';
import { FormMail } from './components/FormMail';
import { OtraPrueba } from './components/Pruebas';
import { Test } from './components/Test';
import { MyButton } from './components/MyButton';
import { ChakraProvider } from '@chakra-ui/react';
import { Maraca } from './components/app';
import { Counter } from './components/Estados/Counter';
import { Card } from './components/Card';
import { Contador } from './components/Contador';
import { Calculadora } from './components/Calculadora';

export const List02 = () => {
  return (
    <Box sx={styles}>
      <Calculadora />
      <Card />
      <Counter />
      <Tarjeta titulo="Meti una Props" subtitulo="Ypa" />
      <Heading as="h1" className="withPadding1 withHover uppercased">
        Ejercicios de la semana 2
      </Heading>
      <MyButton />
      <DogsList />
      <Listaeventos />
      <ListaPartidos />
      <ListaPoli />
      <ListaPrecios />
      <Notebooks />
      <Lista1 />
      <Lista2 />
      <Pruebas />
      <OtraPrueba />
      <Formulario />
      <FormMail />
      <Test />
      <ChakraProvider />
      <Maraca />
      <Button />
      <Contador />
    </Box>
  );
};
