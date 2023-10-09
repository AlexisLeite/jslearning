# Vamos a hacer una agenda

Queremos crear una agenda, qué necesitamos?

- Agregar nuevos usuarios a la aplicación
- Editar usuarios existentes
- Listar los usuarios
- Buscar usuarios

Vistas necesarias:

- Listado de usuarios
- Agregado de usuarios

Por cada una de las vistas necesarias, crearemos una carpeta dentro de src/views. Entonces tendremos las siguientes vistas:

- src/App.jsx
- src/views/users/list/index.jsx
- src/views/users/add/index.jsx

En donde scr/App.jsx es la principal. Cualquier cambio que hagamos en App.jsx nos va a impactar directamente sobre la aplicación.

Empecemos con la vista views/users/list/index.jsx:

En esta vista queremos poder listar todos los usuarios disponibles.