import { Text } from '@chakra-ui/react';

export const AddNewProduct = ({ onCreate }) => {
  return (
    <>
      <Text color="red.500">
        Crear aquí un formulario que permita agregar un producto nuevo con los
        campos: nombre, descripción, cantidad, colores disponibles, marca, peso,
        tamaño.
      </Text>
      <Text color="red.500">
        Si observamos bien, el componente AddNewProduct tiene una propiedad
        llamada onCreate. Esta propiedad es usada en Products/index.jsx para
        hacer un console.log. Este comportamiento lo modificaremos.
      </Text>
      <Text color="red.500">
        Es necesario entender que este componente AddNewProduct solamente tiene
        el objetivo de mostrar el formulario y hacer las validaciones
        correspondientes, pero no de ejecutar ninguna lógica. Para comparación,
        digamos que el método onCreate es igualito que el método
        messagesStore.addMessage que está en ContactForm/index.jsx en el método
        onSubmit.
      </Text>
      <Text color="red.500">
        De esta forma, una vez que el formulario validó correctamente, podemos
        llamar a este método y en el archivo Products/index.jsx, podremos
        realizar la acción que nos convenga con el nuevo producto. En este
        primer ejemplo, deberemos colocar el resultado en un estado que almacene
        un array. Para entender este mecanismo, buscar **Crear una lista TODO en
        React**
      </Text>
      <Text color="red.500">
        Por las características de este formulario, es posible que resulte
        complejo ya que tiene muchas propiedades. Sin embargo, una vez que
        entendamos cómo mantener una lista común en React, manetener una lista
        de productos es exactamente igual.{' '}
        <strong>Una sugerencia muy fuerte</strong> es que te hagas un archivo
        nuevo dentro de Products y le pongas TODOList.jsx y allí practiques los
        conceptos que estamos discutiendo aquí.
      </Text>
      <Text color="red.500">
        Una vez que entiendas cómo funciona una lista común, deberías tener una
        intuición de cómo usar el newProduct en Products/index.jsx para generar
        el estado que necesitás.
      </Text>
    </>
  );
};
