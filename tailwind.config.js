/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    borderRadius: {
      'xl': '10px'
    },
    extend: {
      colors: {
        'primary-dark-purple': '#240D57',
        'primary-purple': '#501FC1',
        'primary-light-purple': '#8456EC',
        'primary-pink': '#E87Bf8',
        'secondary-light-purple': '#CCB6FF',
        'secondary-lighter-purple': '#EDE5FF',
        'secondary-lightest-purple': '#F6F2FF',
        'darkest-grey': '#4F4F4F',
        'darker-grey': '#828282',
        'grey': '#BDBDBD',
        'lighter-grey': '#E0E0E0',
        'white': '#BDBDBD',
      },
      fontSize: {
        xl_landing: ['64px', '64px'],
        lg_landing: ['36px', '36px'],
        sm_landing: ['24px', '28px'],
        xs_landing: ['16px', '18px']
      },
    },
  },
  plugins: [],
}
