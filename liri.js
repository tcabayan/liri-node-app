// Code to read and set environment variables 
require("dotenv").config();
// Code required to import the `keys.js` file and then stored it in a variable
var keys = require("./keys.js")
// Code to require moment npm
var moment = require("moment");
// Code to use axios npm
var axios = require("axios");
// Code to require fs Node package for reading and writing text files
var fs = require("fs")
// Code to require spotify api npm
var Spotify = require("node-spotify-api");
// Code to access to spotify keys
var spotify = new Spotify(keys.spotify);
// Code to read user command
var userInput = process.argv[2];
// Code to read user query
var searchTerm = process.argv[3];

// Choose a Function to Run
if (userInput === "concert-this") {
    getConcertInfo();
}
else if (userInput === "spotify-this-song") {
    getSongInfo();
}
else if (userInput=== "movie-this") {
    getMovieInfo();
}
else if (userInput === "do-what-it-says") {
    getRandomInfo();
}
else {
    console.log("This is not a valid option. Please choose one of the following options: \nconcert-this \nspotify-this-song \nmovie-this \ndo-what-it-says")
}

//When Use Command "Concert-This" Using Bands in Town Artist Events API
function getConcertInfo() {
    var queryUrl= "https://rest.bandsintown.com/artists/" + searchTerm + "/events?app_id=codingbootcamp"
    axios.get(queryUrl).then( function (response) {
            if (response.data.length === 0) {
                ("Sorry. I cannot locate this band or artist.");
            } else {
                var eventNumber = 1;
                for (var i = 0; i < response.data.length; i++) {
                    console.log('Upcoming concerts for ' + searchTerm + '!\nHere\'s your list!');
                    var eventData = [
                        ("-----------------------------------------------"), 
                        ("Venue Name: " + response.data[i].venue.name),
                        ("Venue Location: " + response.data[i].venue.city),
                        ("Event Date: " + moment(response.data[i].datetime).format('MMMM Do YYYY, h:mm a')),
                        ("-----------------------------------------------"),
                        ("\n")
                    ].join("\n\n");
                    console.log(eventData);
                    eventNumber++
                }

            }
        })
        .catch(function (error) {
            (error);
        });
}

//When Using Command "Spotify-this-Song" Using Spotify API
function getSongInfo() {
    if (!searchTerm) {
        searchTerm = "The Sign by Ace of Base";
    }
    spotify.search({ type: 'track', query: searchTerm })
        .then(function (response) {
            var songList = 1;
            for (var i = 0; i < response.tracks.items.length; i++) {

                var songData = [
                    ("-----------------------------------------------"),
                    ("Number on List: " + songList),
                    ("Artist: " + response.tracks.items[i].artists[0].name),
                    ("Song Name: " + response.tracks.items[i].name),
                    ("Preview Song: " + response.tracks.items[i].preview_url),
                    ("Album: " + response.tracks.items[i].album.name),
                    ("-----------------------------------------------"),
                    ("\n")

                ].join("\n\n");
                console.log(songData);
                songList++
            }
        })
        .catch(function (error) {
            (error);
        });
}

//When Using Command "Movie-This" Using the OMDB API
function getMovieInfo() {
    if (!searchTerm) {
        searchTerm = "Mr. Nobody"
        console.log("If you haven't watched 'Mr. Nobody,' then you should: http://www.imdb.com/title/tt0485947/");
        console.log("It's on Netflix!");
    }
    var queryUrl = "http://www.omdbapi.com/?t=" + searchTerm + "&y=&plot=short&apikey=trilogy"
    axios.get(queryUrl).then( function (response) {
        for (var i = 0; i < response.data.length; i++) {
                var movieData = [
                    ("-----------------------------------------------"),
                    ("Movie information"),
                    ("Title: " + response.data.Title),
                    ("Year released: " + response.data.Year),
                    ("IMDB rating: " + response.data.imdbRating),
                    ("Rotten Tomatoes Rating: "  + response.data.Ratings[1].Value + " rating."),
                    ("Country Produced: " + response.data.Country),
                    ("Language of Movie: " + response.data.Language),
                    ("Plot: " + response.data.Plot),
                    ("Actors/Actresses: " + response.data.Actors),
                    ("-----------------------------------------------"),
                ].join("\n\n"); 
                console.log(movieData);    
            }
        }) 
        .catch(function (error) {
            (error);
        });
}

//When Using Command "Do-What-It-Says" Using random.txt
function getRandomInfo(){
    ("I do not detect an input. Pulling random search...");
    fs.readFile("random.txt", "utf8", function (error, data) {
            if (error) {
                return (error);
            }
            // Places content of random.txt file inside an array
            var dataArr = data.split(",");
            var userInput = dataArr[0];
            var searchTerm = dataArr[1].replace(/\"/g, "")

            if (userInput === "spotify-this-song") {
                spotify.search({ type: 'track', query: searchTerm })
                    .then(function (response) {
                        var songList = 1;
                        for (var i = 0; i < response.tracks.items.length; i++) {
                            var songData = [
                                ("-----------------------------------------------"),
                                ("Song Number: " + songList),
                                ("Artist: " + response.tracks.items[i].artists[0].name),
                                ("The song name is: " + response.tracks.items[i].name),
                                ("Here is a song preview from Spotify: " + response.tracks.items[i].preview_url),
                                ("The album containing this song is: " + response.tracks.items[i].album.name),
                                ("-----------------------------------------------"),
                                ("\n"),

                            ].join("\n\n");
                            console.log(songData);
                            songList++
                        }
                    })
                    .catch(function (error) {
                        (error);
                    })
            }
            else {
                ("I can't help you out here.");
            }

        }
        )
}