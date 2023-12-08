# Objetivos de este nuevo capítulo:

- Estética básica de formularios
- Introducción a las funciones
- Comprender el manejo de estados
- Utilización de formularios para aplicaciones de complejidad media
  
Cada ejercicio que hagamos, se va a hacer dentro de su propia carpeta, dentro de /src/eduardo/chapter2/exercises

## Estética básica en formularios:

Los formularios se harán de acuerdo a lo establecido en los estándares de HTML que ya estuviste estudiando.
Como estamos usando la librería ChakraUI, podemos sacar provecho de varios componentes que ya están programados,
que nos permitirán poner estilos en forma rápida y muy estética. Ver la documentación de componentes disponibles
en el siguiente enlace:

https://chakra-ui.com/docs/components

La estética básica de un formulario hecha con ChakraUI es muy sencilla, solamente tenemos que asegurarnos
de dar despacios correctamente a los elementos para que no queden demasiado apretados. El resto viene de la mano
de la librería como se puede ver en DemoForm1.

## Introducción a las funciones
Las funciones en programación son muy importantes, son la base del trabajo en conjunto con otros elementos igual
de importantes como ser las variables, las clases o los módulos. Leer el siguiente documento:

https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Functions

Este documento es bastante extenso y pesado pero es importante entenderlo en su totalidad, ya que sin eso no se
puede trabajar. De todas formas, veamos algunos conceptos básicos:

Una función es un objeto que es invocado en el código y recibe (o no) parámetros (variables, valores) de entrada
y a cambio puede devolver (o no) valores de salida. Un ejemplo muy tonto es la siguiente función:

```ts
function sum(a, b) { return a + b; }
```

Esta función recibe los parámetros a y b, y devuelve la suma de ellos. Es importante empezar a observar que este
tipo de operaciones dan lugar a errores. Por ejemplo, esta función podría recibir por accidente variables que no
sean numéricas y la operación suma podría carecer de sentido. Para ello existen lenguajes con tipado como
Typescript, pero no es el caso del proyecto actual. Lo que podemos hacer para mitigar este tipo de situaciones es
llevar a cabo controles:

```ts
function sum(a, b) {
  if(typeof a !== 'number' || typeof b !== 'number')
    throw new Error("The sum parameters must be of type number");
  return a + b;
}
```

Aquí podemos observar que se realiza un control para determinar que el tipo de ambas variables sean de tipo
numérico, y en caso de que alguna de ellas no lo sea 'tira un error'. Esta sentencia 'throw' se usa en conjunto
con otras sentencias de tipo try/catch. Si bien estos conceptos son un poco más avanzados, podés pegarles una vichada:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch

### Siguiendo con funciones

Cada función tendrá un nombre, una lista de parámetros y un cuerpo. En el caso de la función sum, los parámetros
son a y b y el valor de retorno es una suma. El cuerpo de la función, en el caso de la segunda versión es el conjunto
de las tres líneas que componen el if, el throw y el return.

## Comprender el manejo de estados

Los estados de un componente son los que permiten controlar qué se muestra o de qué forma se muestra cada 
parte de un componente. En react, el manejo de estados se hace básciamente por medio del método useState:

https://react.dev/reference/react/useState

Esta función permite manejar estados de cualquier tipo, su estructura es siempre la misma:

```ts
  const [state, setState] = useState(initialState);
```

En este caso, initialState es una entidad externa que no importa de dónde salió. Lo que importa es que refleja
que cada estado puede tener un valor inicial.