# liribot
LIRI bot to return songs and movies.

The purpose of this bot is to enter node commands to execute responses from the following APIS: OMBD, BandsInTown and Spotify. This required axios for the BandsInTown and OMBD to get information from the sites and used the .then method to return the object. The object is then manipulated to get the required/ desired information which is then console logged to the terminal.

The first command will be <concert-this>. BandsInTown API. The user will use terminal to enter: node liri.js concert-this +"artist/band name here". This should give them the name of the venue, location of the venue and date of the event.  

//OMDB API with Axios. In terminal using node user should be able to enter: node liri.js movie-this +"movie name here". This will the return and log the: Title of the movie, Year it came out, IMBD rating, Rotten tomatoes Rating, Country of production, movie Language, Plot, and Actors in the movie. If nothing this typed in after node liri.js movie-this then Mr. Nobody will be returned and displayed. 


// Spotify API. in node user should be about to enter: node liri.js spotify-this-song +"song name here"
// this will then log in terminal the: Artist, The song's name, a preview link of the song from Spotify, and the album that the song is from. If no song is returned terminal should  default to "The Sign" by Ace of Base