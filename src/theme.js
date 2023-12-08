export const theme = {
  styles: {
    global: {
      'a.button.white': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: 3,

        '&:hover': {
          background: '#f8f8f8',
          textDecoration: 'none',
        },
      },

      '.fieldError': {
        color: '#cc0000',
        fontWeight: 'bold',
      },
    },
  },
};
