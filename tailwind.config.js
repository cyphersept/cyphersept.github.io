/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: ["./src/**/*.{html,js}", "index.html"],
  theme: {
    extend: {},
    /* https://lospec.com/palette-list/resurrect-64 */
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      zinc: colors.zinc,
      'white': '#ffffff',
      'brown': {
        5: '#2e222f',
        4: '#3e3546',
        3: '#625565',
        2: '#966c6c',
        1: '#ab947a'
      },
      'gray': {
        5: '#694f62',
        4: '#7f708a',
        3: '#9babb2',
        2: '#c7dcd0',
        1: '#ffffff'
      },
      'red': {
        4: '#6e2727',
        3: '#b33831',
        2: '#ea4f36',
        1: '#f57d4a'
      },
      'orange': {
        5: '#ae2334',
        4: '#e83b3b',
        3: '#fb6b1d',
        2: '#f79617',
        1: '#f9c22b'
      },
      'yellow': {
        5: '#7a3045',
        4: '#9e4539',
        3: '#cd683d',
        2: '#e6904e',
        1: '#fbb954'
      },
      'lime': {
        5: '#4c3e24',
        4: '#676633',
        3: '#a2a947',
        2: '#d5e04b',
        1: '#fbff86'
      },
      'green': {
        5: '#165a4c',
        4: '#239063',
        3: '#1ebc73',
        2: '#91db69',
        1: '#cddf6c'
      },
      'evergreen': {
        5: '#313638',
        4: '#374e4a',
        3: '#547e64',
        2: '#92a984',
        1: '#b2ba90'
      },
      'teal': {
        5: '#0b5e65',
        4: '#0b8a8f',
        3: '#0eaf9b',
        2: '#30e1b9',
        1: '#8ff8e2'
      },
      'blue': {
        5: '#323353',
        4: '#484a77',
        3: '#4d65b4',
        2: '#4d9be6',
        1: '#8fd3ff'
      },
      'purple': {
        5: '#45293f',
        4: '#6b3e75',
        3: '#905ea9',
        2: '#a884f3',
        1: '#eaaded'
      },
      'mauve': {
        4: '#753c54',
        3: '#a24b6f',
        2: '#cf657f',
        1: '#ed8099'
      },
      'pink': {
        6: '#831c5d',
        5: '#c32454',
        4: '#f04f78',
        3: '#f68181',
        2: '#fca790',
        1: '#fdcbb0',
      }
    }
  },
  plugins: [],
}

