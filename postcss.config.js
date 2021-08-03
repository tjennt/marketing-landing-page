// If you want to use other PostCSS plugins, see the following:
// https://tailwindcss.com/docs/using-with-preprocessors
module.exports = {
    plugins: [
      require('postcss-import'),
      require('tailwindcss/nesting')(require('postcss-nesting')),
      require('tailwindcss'),
      require('postcss-preset-env')({
        features: { 'nesting-rules': false }
      }),  
    ],
  }