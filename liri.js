require("dotenv").config();
var request = require('request');
var file = require('file-system');
var fs = require('fs');
var keys = require("./keys.js"); //imports keys.js 
var axios = require("axios");
var Spotify = require('node-spotify-api');
var spotify = new Spotify({
  id: '429b93984baf4f65b2663b97313a85eb',
  secret: 'cf09975ccf414dc89d8b5702c05f7d7c'
});
var bandName= '';
var artist= '';
var movieInput= process.argv[3];




var command = process.argv[2];
console.log(process.argv)

   if (command === "concert-this") {
    //    console.log("if statement here")
    //    console.log(artist)
       bandInTownAPI()
       return;
   }
   if (command === "spotify-this-song") {
    //    console.log("spotify if statement here")
       spotifyAPI()
   }
   if (command === "movie-this") {
    //    console.log("omdb if statement here")
       omdbAPI()

   }


//BandsInTown API. The user will use terminal to enter: node liri.js concert-this <artist/band name here>. This should give them the name of the venue, location of the venue and date of the event. 
function bandInTownAPI(){
for (let i = 3; i < process.argv.length; i++) {
    artist += process.argv[i] + " "
};
console.log(artist);
let newArtistName = artist.trim();
console.log(newArtistName);

var queryUrl= "https://rest.bandsintown.com/artists/"+newArtistName+"/events?app_id=codingbootcamp";


axios.get(queryUrl)
.then(function(response) {
    console.log(response.data)

    for(let i=1; i<6; i++) {
    console.log("-----------------")
    console.log("Artist/Band Name: " + newArtistName);
    console.log("Name of Venue: " + response.data[i].venue.name);
    console.log("Location of Venue: " + response.data[i].venue.city);
    console.log("Date of Event: " + response.data[i].datetime);
    console.log("-----------------")
    }
}) //will get information from bandsintown api and console.log all information that was retrieved
.catch(function(error) {
    if (error.request){
        console.log(error.request)
    }
});
};


//OMDB API with Axios. In terminal using node user should be able to enter: node liri.js movie-this "<movie name here>". This will the return and log the: Title of the movie, Year it came out, IMBD rating, Rotten tomatoes Rating, Country of production, movie Language, Plot, and Actors in the movie. If nothing this typed in after node liri.js movie-this then Mr. Nobody will be returned and displayed. 
function omdbAPI() {

var queryUrl = "http://www.omdbapi.com/?t=" + movieInput + "&y=&plot=short&apikey=trilogy";

axios.get(queryUrl)
.then(function(response) {
    
    // console.log(response.data);
    console.log("-----------------");
    console.log("Movie Title: " + response.data.Title);
    console.log("Year of relase: " + response.data.Year);
    console.log("IMDB Rating: " + response.data.imdbRating);
    console.log("Rotten Tomatoes Rating: " + response.data.Ratings[1].Source);
    console.log("Country of Production: " + response.data.Country);
    console.log("Movie language: " + response.data.Language);
    console.log("Plot: " + response.data.Plot);
    console.log("Actors involved: " + response.data.Actors);
    console.log("-----------------");
    
}) //will get information from omdb api and console.log all information that was retrieved
.catch(function(error) {
    if (error.request){
        console.log(error.request)
    }
});
};


// Spotify API. in node user should be about to enter: node liri.js spotify-this-song "<song name here"
// this will then log in terminal the: Artist, The song's name, a preview link of the song from Spotify, and 
// the album that the song is from. If no song is returned terminal should  default to "The Sign" by Ace of Base

function spotifyAPI() {

   for (let i = 3; i < process.argv.length; i++) {
       bandName += process.argv[i] + " "
   }
console.log(bandName)
   spotify.search({ type: 'track', query: bandName }, function(err, data) {
       if (err) {
         return console.log('Error occurred: ' + err);
       }
     console.log("Artist Name: " + data.tracks.items[0].artists[0].name);
     console.log("Song Name: " +data.tracks.items[0].name)
     console.log("Preview Link to Song: " + data.tracks.items[0].preview_url)
     console.log("Album the song is from: " + data.tracks.items[0].album.name)

     });

   }

function doIt() {
    for (let i = 3; i < process.argv.length; i++) {
        artist += process.argv[i] + " "
    };

   fs.readFile("random.txt", "utf8", function(error, data) {

       if(error) {
           return console.log(error);
       }

       console.log(data);

       var dataArr = data.split(',');
       artist= dataArr[1];
       command = dataArr[0];
       dataArr.push(data);
       console.log(dataArr);

   });
};

