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
      textAlign: 'center',
    },
    ul: { marginBottom: '6px' },
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
    padding: 5,
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
      background: '#eee',
      marginBottom: '6px',
      /* 
      borderCollapse: 'separate',
      borderSpacing: '10px', */
    },
    td: {
      '&:hover': {
        background: '#ffe',
        color: '#490000',
      },
      border: '1px solid #ccc',
      padding: '5px 10px',
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
      textAlign: 'center',
    },
    table: {
      background: '#f5f5f5',
      color: 'blue',
      marginBottom: '6px',
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
      '&:hover': {
        textTransform: 'uppercase',
        textDecoration: 'underline',

        background: '#537acf',
        color: '#fdf904',
        transform: 'translateY(6px)',
      },

      background: '#a8a3a3',
      color: '#363535',
      padding: '8',
      textAlign: 'center',
    },
    table: { background: ' #e3e3e3', marginBottom: '6px' },

    th: {
      '&:hover': {
        textDecoration: 'underline',
        textTransform: 'uppercase',
        background: '#537acf',
        color: '#fdf904',
        transform: 'translateY(8px)',
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
  '.ListaPrecios': {
    h2: {
      fontSize: 'xxlarge',
      '&:hover': {
        background: '#faf4f4',
        color: 'black',
        textTransform: 'uppercase',
        transform: 'translateY(10px)',
      },
      borderBottom: '1px solid black',
      padding: '30px',
      background: '#292929',
      color: '#ffffff',
      textAlign: 'center',
    },
    table: { marginBottom: '6px', background: '#edd3d3' },
    th: {
      '&:hover': {
        background: '#c9c8c8',
        color: 'red',
        transform: 'translateY(10px)',
        textTransform: 'uppercase',
      },

      border: '1px solid #787676',
      padding: '5',
    },
    td: {
      '&:hover': {
        background: '#c9c8c8',
        color: 'Black',
        transform: 'translateY(20px)',
        textTransform: 'uppercase',
      },
      borderBottom: '1px solid #2d2c2c ',
      textAlign: 'center',
      height: '20',
      width: '60',
      color: 'blue',
      padding: '10px 30px',
    },
  },

  '.Tarjeta': {
    fontSize: 'xxLarge',
    borderRadius: '30px',
    padding: '8',
    textAlign: 'center',
    background: 'rgb(224, 220, 248)',
    fontWeight: 'bold',
    color: 'red',
    margin: '10',
    border: '2px  solid rgb(21, 18, 18)',
    '&:hover': {
      color: 'Black',
      background: 'aqua',
      transform: 'translateY(10px)',
      textTransform: 'uppercase',
    },
  },

  '.Notebooks': {
    h1: {
      '&:hover': { color: 'rgb(16, 13, 13)', background: 'rgb(169, 156, 156)' },
      borderTop: '6px ',
      background: 'black',
      color: 'white',
      textAlign: 'center',
      padding: '20px',
    },
    table: { marginBottom: '6px', background: 'rgb(194, 196, 196)' },
    th: { border: '2px solid', padding: 3, background: '#e1e0e0' },
    td: {
      '&:hover': {
        color: 'rgb(244, 129, 129)',
        background: 'rgb(130, 124, 124)',
        trasnform: 'translateX(8px)',
      },
      border: '1px solid',
      textAlign: 'center',
      width: '60',
      height: '20',
    },
  },
  /*Lista1y2*/
  '.container': {
    marginBottom: '6px',
    display: 'flex',
    flexDirection: 'column',
    background: 'rgb(40, 244, 121)',
  },
  '.Estilosh1': {
    color: 'green',
    textAlign: 'center',
    background: 'hsl(0, 56.40%, 80.20%)',
    padding: '5',
  },
  '.lista': {
    textAlign: 'center',
    listStyleType: 'none',
    margin: '3',

    background: '#eec3c3',
    padding: '20px',
    border: '1px solid rgb(164, 16, 16)',
  },
  ul: { margin: '0' },
  '.nombre': {
    fontWeight: 'bold',
  },
  '.apellido': { fontWeight: 'bold' },

  '.Pruebas': {
    textAlign: 'center',
    background: 'aqua',
  },
  /*Formulario*/
  '.Container': {
    border: '2px solid rgb(143, 143, 126) ',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    padding: '30',
    background: 'rgb(248, 212, 212)',
    marginBottom: '6px',
  },

  '.encabezado': { textAlign: 'center', marginBottom: '18' },

  '.formulario': {
    width: '100%',
    height: '300px',
    border: '1px solid ',
    borderRadius: '2em',
    textAlign: 'center',
    padding: '30px',
    display: 'flex',
    flexDirection: 'column',
  },
  '.entrada': { border: '1px solid ', textAlign: 'center' },

  '.boton': {
    borderRadius: '30px',
    margin: '20px 140px',
    padding: '2',
    color: 'rgb(39, 33, 30)',
    background: 'rgb(186, 156, 156)',
  },
  /*formemail*/
  '.caja': {
    width: '100%',
    padding: '30',
    display: 'flex',
    flexDirection: 'column',
  },
  '.for': {
    margin: '0 auto',
    width: '400px',

    padding: '1em',
    border: '1px solid #ccc',
    borderRadius: '1e',
  },
  '.lab': { padding: '5px', margin: '10' },
  '.ent': { border: '1px solid' },
  '.mnsj': { border: '1px solid', height: '100', width: '300px' },
  /*radio*/
  '.div': {
    background: 'aqua',
    textAlign: 'center',
    whidh: 'auto',
    height: '100',
    border: '0.5px solid',
    marginBottom: '6px',

    flexDirection: 'inlineBlock',
  },
  '#tit': {
    '&:hover': {
      color: 'rrgb(17, 3, 3)',
      textDecoration: 'underline',
      fontWeight: 'bold',
    },
    color: 'blue',

    fontSize: 'large',
  },
};
