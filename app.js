// const yargs = require('yargs');
//
// const geocode = require('./geocode/geocode.js');
//
// const argv = yargs
//   .options({
//     a: {
//       demand: true,
//       alias: 'address',
//       describe: 'Address to fetch weather for',
//       string: true
//     }
//   })
//   .help()
//   .alias('help', 'h')
//   .argv;
//
// geocode.geocodeAddress(argv.address, (errorMessage, results) => {
//   if (errorMessage) {
//     console.log(errorMessage);
//   } else {
//     console.log(JSON.stringify(results, undefined, 2));
//   }
// });


// 84a0a22682ae951e91aed604901cc94e
// https://api.darksky.net/forecast/84a0a22682ae951e91aed604901cc94e/37.8267,-122.4233


const request = require('request');

request({
  url: `https://api.darksky.net/forecast/84a0a22682ae951e91aed604901cc94e/33.6364503,-112.0118669`,
  json: true
}, (error, response, body) => {
  if (!error && response.statusCode === 200) {
    console.log(body.currently.temperature);
  } else {
    console.log('Unable to fetch weather');
  }
});
