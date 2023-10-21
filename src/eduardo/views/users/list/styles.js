export const styles = {
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',

  '& > *': { padding: '0 20px' },
  '& h1, & h2, & h3': { padding: '24px' },

  ul: { marginLeft: '20px' },
  table: { border: '1px solid #999', borderCollapse: 'collapse' },
  'td, th': { border: '1px solid #aaa', textAlign: 'center' },
  '#TableWrapper': { padding: '20px' },
  h1: { color: 'blue', backgroundColor: '#999', textAlign: 'center' },
  h2: { color: 'blue', backgroundColor: '#999', textAlign: 'center' },
  h3: { color: 'blue', backgroundColor: '#999', textAlign: 'center' },
  'p strong': { color: 'green', textAlign: 'center', backgroundColor: 'aqua' },

  '#Computadoras': {
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',

    '& > *': { padding: '0 20px' },
    '& h1, & h2, & h3': { padding: '24px' },
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
