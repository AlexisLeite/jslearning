import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import { listStyles } from './listStyles';

const comidas = [
  {
    titulo: 'Pizza Margherita',
    descripcion:
      'Una deliciosa pizza con salsa de tomate, mozzarella fresca y albahaca. Un clásico italiano que nunca pasa de moda.',
  },
  {
    titulo: 'Sushi de Salmón',
    descripcion:
      'Sushi fresco con finas lonjas de salmón sobre arroz y envuelto en alga nori. Una delicia japonesa.',
  },
  {
    titulo: 'Tacos al Pastor',
    descripcion:
      'Tacos mexicanos con carne de cerdo adobada, cebolla, piña y cilantro. ¡Sabrosos y picantes!',
  },
  {
    titulo: 'Ensalada César',
    descripcion:
      'Una ensalada clásica con lechuga romana, aderezo César, crutones y queso parmesano. Saludable y sabrosa.',
  },
  {
    titulo: 'Sopa de Tomate',
    descripcion:
      'Sopa caliente y reconfortante, hecha con tomates maduros, hierbas y un toque de crema. Perfecta en un día frío.',
  },
  {
    titulo: 'Hamburguesa con Queso',
    descripcion:
      'Una jugosa hamburguesa de carne con queso cheddar, lechuga, tomate y cebolla en un pan recién horneado.',
  },
  {
    titulo: 'Pad Thai',
    descripcion:
      'Un plato tailandés con fideos de arroz, camarones, tofu o pollo, cacahuetes y una salsa agridulce. Un equilibrio perfecto de sabores.',
  },
  {
    titulo: 'Helado de Chocolate',
    descripcion:
      'Un postre clásico: cremoso helado de chocolate con trozos de chocolate. Perfecto para satisfacer tus antojos de dulce.',
  },
];

export function Listado() {
  return (
    <Box sx={listStyles}>
      <Heading
        sx={{
          textAlign: 'left',
        }}
        as="h2"
      >
        Listado de comidas
      </Heading>
      {comidas.map((comida, index) => (
        <Box className="item">
          <Text fontSize="xl" fontWeight="bold">
            {comida.titulo}
          </Text>
          <Text>{comida.descripcion}</Text>
        </Box>
      ))}
    </Box>
  );
}
