/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      height: {
        screen: '100dvh',
      },
      minHeight: {
        screen: '100dvh',
      },
      maxHeight: {
        screen: '100dvh',
      },
    },
    screens: {
      //breakpoints
      sm: '37.5em',
      md: '56.25em',
      lg: '75em',
      xl: '112.5em',
    },
    fontSize: {
      xs: ['1.12rem', '1.456rem'],
      sm: ['1.36rem', '1.768rem'],
      base: ['1.6rem', '2.08rem'],
      md: ['1.6rem', '2.08rem'],
      lg: ['1.84rem', '2.392rem'],
      xl: ['2.16rem', '2.808rem'],
      '2xl': ['2.48rem', '1'],
      '3xl': ['2.8rem', '1'],
      '4xl': ['3.2rem', '1'],
      '5xl': ['3.68rem', '1'],
    },
  },
  plugins: [],
};
