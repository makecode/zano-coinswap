const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');
const withPlugins = require('next-compose-plugins');

const nextPlugins = [
  [withSass],
  [withCSS, { cssModules: false }]
];

module.exports = withPlugins(nextPlugins);
