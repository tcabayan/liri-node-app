# liri-node-app
**LIRI**

LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node application that takes in parameters and gives you back data. To accomplish this, it utilizes three API's: BandsInTown, Spotify, and OMDB. Along with these API's, LIRI Bot was built with node.js, axios, moment.js, and dotenv. You can see a deployed version of the app here https://tcabayan.github.io/liri-node-app/ [GitHub](http://tcabayan.github.com).

My role in this project has been developing the code that brings this idea to life. 

**Instructions:**

1. Obtain the API keys mentioned above

1. Clone the repository below

   git@github.com:tcabayan/liri-node-app.git

1. Install NPM package using _npm i_

1. Create a .env file and insert the information below with your keys
    -   SPOTIFY_ID = API Key

    -   SPOTIFY_SECRET =  Secret KeyOpen your terminal or command program.

1. Navigate to the file path where the LIRI app contents are located on your computer.

1. Type in one of the following commands:

**concert-this + your desired artist choice**

_node liri.js concert-this <artist/band name here>_

_Example: node liri.js concert-this Elton John_

The "concert-this" command will search Bands in Town and pull a list of concert dates for selected artist if any are scheduled within a reasonable time period of this date. Specifically, it will return the name of the concert venue, the venue location, and the date of the event.

The terminal will look a little something like this:

![Concert-this terminal screenshot](/images/concert-this-t.png)


The searches will also be logged in the log.txt file like this:

![Concert-this log.txt screenshot](/images/concert-this-log.png)


**spotify-this-song + your desired song choice**

_node liri.js spotify-this-song '<song name here>'_

_Example: node liri.js spotify-this-song Here Comes the Sun_ 

This "spotify-this-song" comman will search Spotify and pull a list of songs with or close to the song title entered. Specifically, it will return the song title, album title, artist(s) name, and Preview URL.

The terminal will look a little something like this:

![Spotify-this terminal screenshot](/images/spotify-this-search-t.png)
Format: ![Alt Text](url)

The searches will also be logged in the log.txt file like this:

![Spotify-this log.txt screenshot](/images/spotify-this-search-log.png)
Format: ![Alt Text](url)

If you fail to choose a song, you will see this in the terminal and log.txt respectively:

![Spotify-this terminal screenshot](/images/spotify-this-sign-t.png)
Format: ![Alt Text](url)

![Spotify-this log.txt screenshot](/images/spotify-this-sign-log.png)
Format: ![Alt Text](url)

**movie-this + your desired movie choice**

_node liri.js movie-this '<movie name here>'_

_Example: node liri.js movie-this Beethoven_

The "movie-this" command will search OMDB for your movie choice and pull relevant information regarding movie inputted in search. Specifically, it will return information with respect to the movie title, the year the movie was released, the IMDB rating, the Rotten Tomatoes rating, the country, the language, the basic plot, and the actors in the movie. 

The terminal will look a little something like this:

![Movie-this terminal screenshot](/images/movie-this-search-t.png)
Format: ![Alt Text](url)

The searches will also be logged in the log.txt file like this:

![Movie-this log.txt screenshot](/images/movie-this-search-log.png)
Format: ![Alt Text](url)

If you fail to choose a movie, you will see this in the terminal and log.txt respectively:

![Movie-this terminal screenshot](/images/movie-this-mrnobody-t.png)
Format: ![Alt Text](url)

![Movie-this log.txt screenshot](/images/movie-this-mrnobody-log.png)
Format: ![Alt Text](url)

**do-what-it-says**

_node liri.js do-what-it-says_

The "do-what-it-says" command will pull information from the random.txt file. The terminal will look a little something like this:

![Do-What-It-Says terminal screenshot](/images/do-what-it-says-t.png)
Format: ![Alt Text](url)

The searches will also be logged in the log.txt file like this:

![Do-What-It-Says log.txt screenshot](/images/do-what-it-says-log.png)
Format: ![Alt Text](url)


