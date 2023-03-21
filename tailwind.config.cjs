/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'
  ],
  theme: {
    extend: {
      colors: {
        'viking-yellow': '#E5AA33',
        'viking-grey-background': '#F7F7F7',
        'viking-grey-textBox': '#DFE0DF',
        'viking-yellow-trans': '#e5aa33a1'
      },
      borderWidth: {
        xl: '20px',
        medium: '15px',
        small: '7px'
      }

    }
  },
  darkMode: 'class'
}
