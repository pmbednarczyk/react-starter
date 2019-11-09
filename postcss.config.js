module.exports = ({ env }) => ({
  plugins: [
    env === 'production' ? require('autoprefixer') : null,
  ]
});