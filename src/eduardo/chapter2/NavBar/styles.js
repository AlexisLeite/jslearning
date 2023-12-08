export const navBarStyles = {
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'space-between',

  background: 'white',
  borderBottom: '1px solid',
  borderBottomColor: '#ccc',

  inset: '0 0 auto 0',
  position: 'fixed',

  height: '60px',
  width: '100%',

  '.Logo': {
    p: 4,
  },

  '.Pages': {
    display: 'flex',
    listStyle: 'none',

    margin: 0,
    px: 6,

    height: '100%',
    width: '100%',

    a: {
      height: '100%',
    },
  },

  '.rightButtons': {
    p: 4,
  },
};
