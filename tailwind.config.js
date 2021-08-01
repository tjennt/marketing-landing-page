module.exports = {
    mode: 'jit',
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {},
      container: {
        center: true,
      },
      colors: {
        primary: {
          light: "#ffa999",
          DEFAULT: "#fa5738",
          dark: "#c44d37"
        },
        secondary: {
          light: "#aaa3d9",
          DEFAULT: '#4b4573',
          dark: "#37325c"
        },
        while: {
          DEFAULT: '#ffffff'
        },
        black: {
          DEFAULT: '#000000'
        },
      }
    },
    variants: {
      extend: {},
    },
    plugins: [],
}