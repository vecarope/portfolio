module.exports = {
  content: [
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      'yellow-light': '#f2ed76',
      'yellow-medium': '#f7e166',
      'yellow-dark': '#f2ca48',
      'purple': '#534173',
      'pink': '##f0b9c7',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
    },
    fontFamily: {
      sans: [ 'Graphik', 'sans-serif' ],
      serif: [ 'Merriweather', 'serif' ],
    },
    opacity: {
      '0': '0',
      '20': '0.2',
      '40': '0.4',
      '60': '0.6',
      '80': '0.8',
      '100': '1',
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  plugins: [
    require('flowbite/plugin'), 
    require('tw-elements/dist/plugin'),
    require('@tailwindcss/forms')
  ]
}