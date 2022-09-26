module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.svelte'],
  theme: {
    // fontFamily: {
    //   'sans': ['Roboto']
    // },
    // fontWeight: {
    //   hairline: 100,
    //   'extra-light': 100,
    //   thin: 200,
    //   light: 300,
    //   normal: 400,
    //   medium: 500,
    //   semibold: 600,
    //   bold: 700,
    //   extrabold: 800,
    //   'extra-bold': 800,
    //   black: 900,
    // },

    extend: {
      colors: {
        daoblue: '#0030C9',
        daogreen: '#D1EFCB',
        daodarkgreen: '#071E26',
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'reno': ['RenoMono', 'mono'],
        'neue': ['NeueMachina', 'sans'],
      },
    }
  }
}
