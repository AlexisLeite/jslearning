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

  '#ListaEventos': {
    h2: {
      background: '#494',
      color: 'white',
      padding: '1',
      textAlign: 'center',
    },

    table: {
      background: '#eee' /* 
      borderCollapse: 'separate',
      borderSpacing: '10px', */,
    },

    td: {
      border: '1px solid #ccc',
      padding: '5px 10px',

      '&:hover': { background: '#ffe' },
    },

    '.game__team1__flag, .game__team2__flag': {
      width: '50px',
      height: '33px',
    },

    '[class^=game__team]': {
      background: 'white',
    },
  },
  '#ListaPartidos': {
    h2: {
      background: '#fb6464',
      color: 'white',
      padding: '1',
      textAlign: 'center',
    },
    table: {
      background: '#f5f5f5',
      color: 'blue',
    },
    td: {
      border: '1px solid #ccc',
      padding: '5px 10px',
      '&:hover': { background: '#927f7f' },
    },

    '[class^=game__hour]': {
      background: '#dddddd',
      color: 'black',
    },
    '[class^=game__tournment]': {
      background: '#dddddd',
      color: 'black',
    },
    '.game__team1__flag,.game__team2__flag': { width: '50px', height: '33px' },
  },
  '#ListaPoli': {
    h2: {
      textDecoration: 'underline',
      background: '#a8a3a3',
      color: '#363535',
      padding: '8',
      textAlign: 'center',
    },
    table: { background: ' #e3e3e3' },

    th: {
      '&:hover': {
        background: 'white',
        color: 'darkred',
        transform: 'translateX(20px)',
      },
      border: '1px solid #605b5b',
      borderTop: '2px solid#858484',
      borderBottom: '2px solid#858484 ',
      background: '#bfbfbf',
      fontWeight: 'bold',
      textAlign: 'center',
      padding: '5',
    },

    td: {
      color: 'black',
      textAlign: 'center',
      border: '1px solid #605b5b ',
      padding: '5px 10px',
      height: '20',
      width: '60',
    },
  },
};
