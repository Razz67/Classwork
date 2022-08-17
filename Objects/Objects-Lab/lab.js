// LAB: Radio Object
/*Objective: We are going to create an object Radio! 

 

How to begin: 

Create a variable called radio and assign as its value an object literal 

Give it a property called stations and make the value an array of station objects (at least 2)

Give each station object a property called name and songs. Name should be a string and songs should be an array of song objects (at least 3).

Song objects should have two properties: title and artist

Create a method on your radio object that changes the station randomly (research Math.random and Math.floor)

When the station is changed, pick a song from that station. Example: console.log("Now Playing:" + song.title + "by" + song.artist)
*/

const radio = {
  stations: [
    {
      name: "Soul",
      songs: [
        {
          title: "Say It Loud",
          artist: "James Brown",
        },
        {
          title: "Bring It On Home To Me",
          artist: "Sam Cooke",
        },
        {
          title: "Contagious",
          artist: "The Isley Brothers",
        },
      ],
    },
    {
      name: "Hip-Hop",
      songs: [
        {
          title: "Digits",
          artist: "Young Thug",
        },
        {
          title: "Act Right",
          artist: "Yo Gotti",
        },
        {
          title: "RockStar",
          artist: "Da Baby",
        },
      ],
    },
    {
      name: "R&B",
      songs: [
        {
          title: "Diamonds",
          artist: "Rihanna",
        },
        {
          title: "THIQUE",
          artist: "Beyonce",
        },
        {
          title: "24K Magic",
          artist: "Bruno Mars",
        },
      ],
    },
  ],

  //change station randomly
    changeStation: function () {
        let randomStation = Math.floor(Math.random() * radio.stations.length);
        let randomSong = Math.floor(Math.random() * radio.stations[randomStation].songs.length);
        console.log("Now Playing: " + radio.stations[randomStation].songs[randomSong].title + " by " + radio.stations[randomStation].songs[randomSong].artist + " on the " + radio.stations[randomStation].name + " station!");
    }
}

    
radio.changeStation();
