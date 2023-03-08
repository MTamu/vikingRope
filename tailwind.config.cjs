/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}',
    './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
  ],
  theme: {
    extend: {
      colors: {
        'viking-yellow': '#E5AA33',
        'viking-grey-background': '#F7F7F7',
        'viking-grey-textBox': '#DFE0DF'
      },
      borderWidth: {
        xl: '20px',
        medium: '15px',
        small: '7px'
      }

    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
  darkMode: 'class'
}
