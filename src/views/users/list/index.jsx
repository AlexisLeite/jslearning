import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import { ListadoPaises } from './ListadoPaises';
import { ListadoUsuarios } from './listadoUsuarios';
import { ListadoCelulares } from './ListadoCelulares';
import { ListadoPerros } from './ListadoPerros';

/**
 * TAREAS PENDIENTES
 * 

# Listas
 
Crear una lista de perros con el nombre de su dueño, edad, color, raza y actividades favoritas.
Crear una lista de juegos de mesa con nombre, descripción, edad para jugar, cantidad de jugadores.

Cada lista deberá tener su cabezal correspondiente indicando de qué es la lista y una descripción.

Investigar en internet cómo podemos hacer para dar estilos a la aplicación, cambiar colores, espaciados. 
Buscar una lista en internet que te guste e intentar hacer que los estilos se parezcan a los de la lista. 
Deberá proveer de una imágen de cómo querés que queden tus listados y los estilos hechos para que quede lindo.

# Cabezales y textos

Tenemos el elemento <Heading as="h1"> que fue el usado en el ejercicio, 
pero también podemos usar elementos de tipo <Heading as="h2"> <Heading as="h3"> <Heading as="h4">. 
Realizar un documento de mínimo 15 párrafos con al menos 4 tipos distintos de heading, 
que explique algún tema que te guste. 
El contenido puede ser sacado de internet pero la estructura html tenés que hacerla vos. 

Aplicar estilos necesarios para que quede bonito, buscar en internet cómo hacer para que los espaciados queden bien.

# Estilos

Hay 3 formas al menos de dar estilos a los elementos: Usando la propiedad style, 
usando la propiedad sx o usando el archivo styles.css. Encontrar la diferencia entre las distintas dinámicas. 
Averiguar en internet qué es sx y para qué se usa. **** En qué se diferencian sx de style !!!MUY IMPORTANTE ****

Unificar todos los estilos en línea dentro del mismo formato, o bien están todos como sx o bien están todos como style. 
No debe haber mezcolanza.

Qué es padding 
Qué es margin
Qué es display flex con gap
La caja que contiene todas las listas, deberá tener los siguientes estilos:
- display: flex
- flex-direction: column
Investigar por qué, qué cambia poner esto y qué hace cada propiedad. 
Buscar documentaciones oficiales y cualquier ayuda adicional que parezca conveniente.
Avergiuar cómo hacer para que cambien los estilos de un elemento cuando se le pasa el mouse por encima, 
cuando se hace click en él, y cuando recibe el foco.
Todos los cabezales de todas las listas, deberán implementar estilos personalizados para contemplar estas situaciones.
 Es decir, cuando yo pase el mouse por encima de un cabezal, deberá cambiar de fondo y color. 
 Lo mismo cuando haga click sobre él.

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

export default function list() {
  return (
    <Box>
      <ListadoCelulares />

      <Heading as="h1" style={{ color: 'black' }} bg="grey">
        Listado de usuarios
      </Heading>
      <Text style={{ color: 'black' }} bg="gray.400">
        Lista de usuarios
      </Text>
      <ListadoUsuarios />

      <ListadoPaises />

      <Heading
        as="h1"
        styel={{ color: 'cyan' }}
        bg="grey"
        textAlign="center"
      ></Heading>

      <ListadoPerros />
    </Box>
  );
}
