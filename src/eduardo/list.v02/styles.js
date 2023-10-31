/**
 .underlined:   Permitirá poner subrayado a un elemento
 .bold:         Permitirá poner negrita a un elemento
 .uppercased:   Permitirá poner todo en mayúsculas un elemento
 .withHover:    Permitirá hacer un efecto al pasar el mouse por encima
 .withPadding1: Permitirá darle padding de tamaño 1 a un elemento   
 .withPadding2: Permitirá darle padding de tamaño 2 a un elemento   
 .withPadding3: Permitirá darle padding de tamaño 3 a un elemento   

 
*/

export const styles = {
  '#ListaJuegos': {
    h2: {
      background: 'green',
      color: 'white',
    },
  },

  '#ListaPerros': {
    h2: {
      background: 'red',
      color: 'white',
    },
  },

  '#ListaUsuarios': {
    h2: {
      backgorund: 'blue',
      color: 'white',
    },
  },

  '.underlined': {
    textDecoration: 'underline',
  },

  '.bold': {
    fontWeight: 'bold',
  },

  '.uppercased': {
    textTransform: 'uppercase',
  },

  '.withHover': {
    '&:hover': {
      background: '#ccf',
      textDecoration: 'underline',
    },
  },

  '.withActive': {
    '&:active': {
      background: '#cfc',
      textDecoration: 'underline',
    },
  },

  '.withPadding1': {
    padding: 3,
  },

  '.withPadding2': {
    padding: 5,
  },

  '.withPadding3': {
    padding: 7,
  },
};
