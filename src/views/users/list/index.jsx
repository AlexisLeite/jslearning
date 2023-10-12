
import { Box, Center, Heading, Text, background, color } from "@chakra-ui/react";


alert('Ojo: EL TUTI construyendo app :D')



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

  
  



  const usuarios= [
  {name:'Alexis', age:32, Phone: 323145},
  {name:'Jorge',  age:55, Phone: 213659},
  {name:'Fernanda',age:28,Phone: 259874},
  {name:'Joaquin', age:39, Phone: 46987},
  {name:'Augusto',age: 22, Phone: 74568},

];

  

const Paises = [
  {Pais: 'Uruguay', Capital: 'Montevideo', habitantes: '4.000.000' },
  {Pais: 'Argentina', Capital: 'Buenos Aires', habitantes:'40.000.000' },
  {Pais: 'Peru', Capital: 'Lima', habitantes: '20.000.000' },
  {Pais: 'Brasil', Capital: 'Brasilia', habitantes: '200.000.000' },
  {Pais: 'Bolivia',Capital:'La Paz', habitantes:  '10.000.000' }
];

const Celulares= [
{marca:'Motrola', modelo: 'J345', precio:'$5.000'},
{marca:'Samnsung',modelo: 'S520', precio:'$4.500'},
{marca:'Iphone',  modelo: '11200',precio:'$54.000'},
{marca:'Samsung', modelo: 'Z52' , precio:'$8.000'},
{marca:'Motrola', modelo: '5d23', precio:'$7.000'},

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
  console.log(Paises)
    console.log(Paises.length)
      console.log(Paises.map(current=>current.Capital +5))
  return <Box>
    
  
  <Heading as="h1" style= {{ color: 'balck' }} bg= 'grey'> Listado de usuarios</Heading>
  <Text style= {{color: 'black'}}bg= 'gray.400'> Lista de usuarios</Text>

  
  
  <ul style={{backgroundColor: 'cyan',padding:'20px',margin:'0px'}}>
    
      {usuarios.map(current=> <li key={current.name}> 
        Nombre <strong style= {{color:'red'}}>{current.name} </strong> -
          Edad: <strong style={{color:'red'}}>{current.age}</strong> años - 
      Telefono:  <strong style={{color:'red'}}>{current.Phone}</strong> </li>)}
      
 
 </ul>
  
    {/* current significa "el elemento actual" */}
    
  <Heading as="h1" style= {{color: "blue"}} bg= 'green.400'> Listado de Paises</Heading>

    <Heading as='h2' style= {{color: "blue"}} bg= 'green.300'textAlign='center' > 
      Lista de paises capitales y hab. </Heading>
      


  <ul style={{ backgroundColor: 'orange', padding:'20px', margin:'0px' }}>
      {Paises.map(current => <li key={current.Pais}> 
        Pais <strong style= {{color:"blue"}}>{current.Pais}</strong> - 
         Capital : <strong style={{color:'blue'}}>{current.Capital}</strong> -
      Habitantes: <strong style= {{color:'blue'}}>{current.habitantes}</strong> </li>)}
      
  </ul>
   
   <Heading as= 'h1'style= {{color:'white', background:'black'}}> Listado de celulares</Heading>
   <Text style={{color:'black'}} bg= 'white'> Lista de celulares </Text>
   
   
   <ul style={{backgroundColor:'grey',padding:'20px', margin:'0px'}}>
    
      {Celulares.map(current=><li key={current.marca}>  
        Marca: <strong style= {{color:"orange"}}>{current.marca} </strong> - 
          modelo: <strong style={{color:"orange"}}>{current.modelo}</strong>  - 
      Precio: <strong style={{color:"orange"}}>{current.precio}</strong> </li>)}

   </ul>
   
  </Box>
    

}