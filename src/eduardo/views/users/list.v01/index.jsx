import { Box, Heading, Text } from '@chakra-ui/react';
import { ListadoPaisesAsLi, ListadoPaisesAsTable } from './ListadoPaises';
import { ListadoUsuarios, ListadoUsuariosButtons } from './listadoUsuarios';
import { ListadoCelulares } from './ListadoCelulares';
import { styles } from './styles';
import Compus from './Computadoras';
import { Listajuegos } from './Listajuegos';
import { ListadoPerros } from './ListaPerros';

/**
 * TAREAS PENDIENTES
 * 

# Listas
 
Crear una lista de perros con el nombre de su dueño, edad, color, raza y actividades favoritas.
Crear una lista de juegos de mesa con 

Cada lista deberá tener su cabezal correspondiente indicando de qué es la lista y una descripción.

# Cabezales y textos

Ya hiciste un texto para las computadoras, ahora hacé otro para otro tema.

# Estilos

Avergiuar cómo hacer para que cambien los estilos de un elemento cuando 
se le pasa el mouse por encima, cuando se hace click en él, y cuando recibe el foco.
Todos los cabezales de todas las listas, deberán implementar estilos p
ersonalizados para contemplar estas situaciones. Es decir, cuando yo pase el mouse por encima de un cabezal, 
deberá cambiar de fondo y color. Lo mismo cuando haga click sobre él.

Los estilos se darán siemrpe dentro de styles,js por el momento.

**RECORDAR** que cuando creamos un contenedor, podemos usar id="UN_NOMBRE_CUALQEUIREA"
y luego lo usamos dentro de styles como '#UN_NOMBRE_CUALQEUIREA': { ... }

Qué es padding 
Qué es margin
Qué es display flex con gap
Qué es display inline y display block.
La caja que contiene todas las listas, deberá tener los siguientes estilos:
- display: flex
- flex-direction: column

# Tareas con inputs

El elemento <Input> permite mostrar un campo de texto en el que el usuario puede escribir.
Mediante la propiedad onChange podemos escuchar los cambios en el input.
Hacer un formulario con al menos 5 campos de tipo <Input> y en cada uno de ellos poner:

onChange(ev => console.log(ev.target.value))

Abrir la consola del navegador y ver que se están imprimiendo los cambios hechos en los input
Investigar en internet:

Qué es el onChange de un campo de tipo input en React y cómo podemos manipular sus datos

Formatear todos los inputs dentro de una tabla: CAda input deberá estar en una celda, 
acompañado de su nombre en una celda contigua. Ejemplo:

| Nombre   | <INPUTDENOMBRE   /> |
----------------------------------
| Apellido | <INPUTDEAPELLIDO /> |
----------------------------------
| Edad     | <INPUTDEEDAD />     |
 */

export default function List() {
  return (
    <Box sx={styles} id="MyContent">
      <Heading as="h1">Listado de usuarios</Heading>
      <ListadoUsuarios />
      <Compus />
      <ListadoPerros />
      <Listajuegos />
    </Box>
  );
}

export function List2() {
  return (
    <Box sx={styles} id="MyContent">
      <Box id="Historiacompus">
        <Heading as="h1">¿Cómo funcionan los computadores?</Heading>
        <Text>
          Los computadores actuales no tienen en su interior mecanismos o ruedas
          con dientes, sino un laberinto de microscópicos transistores que
          reaccionan ante los impulsos eléctricos que pasan por sus circuitos y
          que tienen solo dos posiciones, que corresponden a las cifras
          empleadas por el sistema binario, ceros y unos. Si bien las
          instrucciones en las primeras máquinas debían ser ingresadas en ceros
          y unos, los computadores actuales son capaces de transformar las
          palabras, números e instrucciones que ingresamos a bits (dígitos
          binarios). Así, cada computador debe traducir uno o más lenguajes en
          código binario para poder funcionar. Los programas o softwares son el
          conjunto de instrucciones que le dicen al computadorTe qué debe hacer.
          Sin ellos, el computador es una máquina inútil. Hay diferentes clases
          de programas. Las dos principales categorías son los sistemas
          operativos y el software aplicativo o aplicaciones.
        </Text>

        <Heading as="h2">Sistema operativo de los computadores</Heading>

        <strong> La importancia de Procesador</strong>

        <Text>
          El sistema operativo es el programa más importante, porque controla el
          funcionamiento del computador y el de los demás programas. Los
          sistemas operativos más comunes son Windows, MacOS y Linux. Las
          aplicaciones son todos los programas que permiten al usuario realizar
          tareas: procesadores de palabras para escribir, juegos para
          divertirse, hojas de cálculo para trabajo financiero, browsers para
          navegar por la red. El sistema operativo establece las reglas y
          parámetros para que el software aplicativo interactúe con el
          computador, ya que en lugar de hablar directamente con el hardware
          (elementos físicos que componen el computador), las aplicaciones
          hablan con el sistema operativo y este actúa como su intérprete. Si no
          existiera el sistema operativo, cada empresa desarrolladora de
          softwares tendría que crear su propio método para que las aplicaciones
          graben archivos en el disco duro, desplegar textos y gráficos en la
          pantalla, enviar texto a la impresora e infinidad de funciones más.
          Los sistemas operativos se diseñan para que funcionen sobre una
          familia particular de computadores. Por ejemplo, el sistema operativo
          Windows trabajan en PC basados en procesadores de Intel, AMD, u otros.
          El sistema operativo de Mac (MacOS) corre solo en PC Macintosh, los
          cuales usan procesadores Power PC (anteriormente usaban Motorola
          680×0). Estos sistemas no son compatibles entre sí. Apple desde 2001
          comenzó a desarrollar y comercializar sus propios sistemas operativos
          gráficos. El sistema operativo es el software que controla y coordina
          el funcionamiento de todos los componentes del computador, incluyen
        </Text>

        <Heading as="h3">Aplicaciones</Heading>

        <Text>
          Aplicaciones Las aplicaciones deben corresponder al sistema operativo
          instalado para poder funcionar. Los sistemas operativos y las
          aplicaciones son los principales programas, pero no son los únicos.
          Existe otra categoría importante, el lenguaje de programación, que es
          el software que se usa para escribir los programas en el lenguaje de
          la máquina. Es el único que el procesador del computador entiende, el
          código binario. Los PC tienen cuatro elementos básicos: el teclado,
          para introducir la información; la memoria, que almacena la
          información y el programa; la unidad de proceso (CPU), que lleva a
          cabo las instrucciones contenidas en el programa; y una pantalla para
          ver los resultados del trabajo realizado. Los programas se instalan
          mediante compac disc (cd), pendrives o descargas directas de la web.
          Los datos pueden introducirse de la misma manera o bien a través de
          discos de almacenamiento (discos duros externos) o pendrives. Los
          resultados de estos procesos de ejecución y análisis de los datos se
          pueden observar en la pantalla. Ya sea en forma de palabras, números e
          imágenes, impresos en papel o como sonidos emitidos por un altavoz, y
          pueden almacenarse en el disco duro, pendrive o discos.
        </Text>

        <Heading as="h4">Memoria y almacenamiento de datos</Heading>
        <Text>
          La memoria del computador es donde se almacenan temporalmente los
          datos y programas que se están utilizando en ese momento. Hay dos
          tipos principales de memoria: la memoria RAM y la memoria ROM. Estas
          son sus diferencias: La RAM es la memoria de acceso aleatorio y es
          donde se almacenan los datos y programas que se están utilizando en
          ese momento. La ROM es la memoria de solo lectura y es donde se
          almacenan los programas y datos que son esenciales para el
          funcionamiento del computador. El almacenamiento de datos, por otro
          lado, se refiere a la capacidad del computador para guardar
          información de forma permanente. Esto se logra a través de
          dispositivos de almacenamiento, como discos duros, unidades flash USB
          y discos compactos
        </Text>
      </Box>

      <Heading as="h1" style={{ color: 'white', background: 'black' }}>
        Listado de celulares
      </Heading>
      <Text style={{ color: 'black' }} bg="white">
        Lista de celulares
      </Text>
      <ListadoCelulares />
      <Heading as="h1" style={{ color: 'black' }} bg="grey">
        Listado de usuarios
      </Heading>
      <Text style={{ color: 'black' }} bg="gray.400">
        Lista de usuarios
      </Text>
      <ListadoUsuariosButtons />
      <ListadoUsuarios />
      <Heading as="h1" style={{ color: 'blue' }} bg="green.400">
        Listado de Paises
      </Heading>
      <Heading
        as="h2"
        style={{ color: 'blue' }}
        bg="green.300"
        textAlign="center"
      >
        Lista de paises capitales y hab.
      </Heading>
      <ListadoPaisesAsTable />
      <ListadoPaisesAsLi />
    </Box>
  );
}
