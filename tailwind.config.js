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
      'r-brown': {
        1: '#2e222f',
        2: '#3e3546',
        3: '#625565',
        4: '#966c6c',
        5: '#ab947a'
      },
      'r-gray': {
        1: '#694f62',
        2: '#7f708a',
        3: '#9babb2',
        4: '#c7dcd0',
        5: '#ffffff'
      },
      'r-red': {
        1: '#6e2727',
        2: '#b33831',
        3: '#ea4f36',
        4: '#f57d4a'
      },
      'r-orange': {
        1: '#ae2334',
        2: '#e83b3b',
        3: '#fb6b1d',
        4: '#f79617',
        5: '#f9c22b'
      },
      'r-yellow': {
        1: '#7a3045',
        2: '#9e4539',
        3: '#cd683d',
        4: '#e6904e',
        5: '#fbb954'
      },
      'r-lime': {
        1: '#4c3e24',
        2: '#676633',
        3: '#a2a947',
        4: '#d5e04b',
        5: '#fbff86'
      },
      'r-green': {
        1: '#165a4c',
        2: '#239063',
        3: '#1ebc73',
        4: '#91db69',
        5: '#cddf6c'
      },
      'r-evergreen': {
        1: '#313638',
        2: '#374e4a',
        3: '#547e64',
        4: '#92a984',
        5: '#b2ba90'
      },
      'r-teal': {
        1: '#0b5e65',
        2: '#0b8a8f',
        3: '#0eaf9b',
        4: '#30e1b9',
        5: '#8ff8e2'
      },
      'r-blue': {
        1: '#323353',
        2: '#484a77',
        3: '#4d65b4',
        4: '#4d9be6',
        5: '#8fd3ff'
      },
      'r-purple': {
        1: '#45293f',
        2: '#6b3e75',
        3: '#905ea9',
        4: '#a884f3',
        5: '#eaaded'
      },
      'r-mauve': {
        1: '#753c54',
        2: '#a24b6f',
        3: '#cf657f',
        4: '#ed8099'
      },
      'r-pink': {
        1: '#831c5d',
        2: '#c32454',
        3: '#f04f78',
        4: '#f68181',
        5: '#fca790',
        6: '#fdcbb0',
      }
    }
  },
  plugins: [],
}

