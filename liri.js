require("dotenv").config();
var request = require('request');
var keys = require("./keys.js"); //imports keys.js 
var axios = require("axios");
var Spotify = require('node-spotify-api');
var spotify = new Spotify({
  id: '429b93984baf4f65b2663b97313a85eb',
  secret: 'cf09975ccf414dc89d8b5702c05f7d7c'
});
var command = process.argv[2];

// Spotify API. in node user should be about to enter: node liri.js spotify-this-song "<song name here"
// this will then log in terminal the: Artist, The song's name, a preview link of the song from Spotify, and 
// the album that the song is from. If no song is returned terminal should  default to "The Sign" by Ace of Base
if (command === spotify-this){
    console.log("add song name")
}

spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(data); 
});

//OMDB API with Axios. In terminal using node user should be able to enter: node liri.js movie-this "<movie name here>". This will the return and log the: Title of the movie, Year it came out, IMBD rating, Rotten tomatoes Rating, Country of production, movie Language, Plot, and Actors in the movie. If nothing this typed in after node liri.js movie-this then Mr. Nobody will be returned and displayed. 

var movieInput= process.argv[2];
var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";


axios.get(queryUrl)
.then(function(response) {
    console.log(response.data)
    console.log(response.data)
}) //will get information from omdb api and console.log all information that was retrieved
.catch(function(error) {
    if (error.request){
        console.log(error.request)
    }
});

