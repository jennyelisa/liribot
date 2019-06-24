require("dotenv").config();

var keys = require("./keys.js"); //imports keys.js 

var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
  id: '429b93984baf4f65b2663b97313a85eb',
  secret: 'cf09975ccf414dc89d8b5702c05f7d7c'
});
 
spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(data); 
});

