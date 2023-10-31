export const styles = {
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  border: '2px solid lime',

  '& > *': { padding: '0 20px' },
  '& h1, & h2, & h3': { padding: '24px' },

  /**listado usuarios*/

  table: { border: '1px solid #999', borderCollapse: 'collapse' },
  'td, th': { border: '1px solid #aaa', textAlign: 'center' },
  '#TableWrapper': { padding: '20px' },
  h1: { color: 'blue', backgroundColor: '#999', textAlign: 'center' },
  h2: { color: 'blue', backgroundColor: '#999', textAlign: 'center' },
  h3: { color: 'blue', backgroundColor: '#999', textAlign: 'center' },
  h4: { color: 'blue', backgroundColor: '#999', textAlign: 'center' },

  '#Computadoras': {
    padding: ' 0px',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    '& > *': { padding: ' 0 20px' },
    '& h1, & h1 & h2, & h3': { padding: '24px' },
    'p ': { backgroundColor: 'aqua' },
    strong: { textAlign: 'center', color: 'black', backgroundColor: '#999' },
  },

  '#Perros': {
    display: 'flex',
    flexDirection: 'row',
    gap: 0,
    ol: { padding: '20px' },
    h2: { borderBottom: '0px solid white', color: 'black' },

    padding: '0px',

    backgroundColor: 'aqua',
    'strong.Dueño': { color: 'purple' },
    'strong.Raza': { color: 'purple' },
    'strong.Color': { color: 'purple' },
    'strong.Edad': { color: 'purple' },
    'strong.Actividad': { color: 'purple' },
  },
  '#Juegos': {
    display: 'flex',
    flexDirection: 'row',
    gap: 0,
    padding: '0px',
    ul: { padding: '20px' },
    h2: { borderBottom: '0px solid white', color: 'black' },
    backgroundColor: 'aqua',

    'span.Juego': { color: 'blue' },
    'strong.Juego_etiqueta': { color: 'grey' },
    'span.Descripcion': { color: 'blue' },
    'span.Edad': { color: 'blue' },
    'span.jugadores': { color: 'blue' },
    'strong.Edad_etiqueta': { color: 'grey' },
    'strong.Descripcion_etiqueta': { color: 'grey' },
    'strong.Jugadores_etiqueta': { color: 'grey' },
  },

  '#ListaCelulares': {
    backgroundColor: 'grey',
    padding: '20px',
    margin: '0px',
    color: '#ccffcc',
    '& strong': { color: 'orange' },
    '& strong.marca': { color: 'lime' },
    '& span.marca__etiqueta': { color: 'white' },
  },

  '#ListaUsuarios': {
    backgroundColor: 'cyan',
    padding: '20px',
    margin: '0px',
    '& strong': { color: 'red' },
  },
};
