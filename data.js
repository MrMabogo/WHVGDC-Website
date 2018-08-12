var data = {

  "test": "testo",

  "members" : {
    "albertefremov" : {
      "name" : "Albert Efremov",
      "pfp" : "media/stick.png",
      "desc" : "a person",
      "teams" : "freelancers",
      "games" : ["somegame"]
    },
    "allieamerman" : {
      "name" : "Allie Amerman",
      "pfp" : "media/stick.png",
      "desc" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
      "teams" : "team1",
      "games" : ["colortunnel"]
    },
    "test" : {
      "name" : "Bob T. Builder"
    }
  },

  "groups" : {
    "freelancers" : {
      "name" : "Freelancers",
      "pfp" : "media/stick.png",
      "desc" : "Aid for the Artistically impaired",
      "currentmembers" : [
        { "name" : "albertefremov", "role" : "Artist"}
      ],
      "pastmembers" : [
        { "name" : "test", "role" : "Alumnus"},
        { "name" : "test", "role" : "Alumnus 2"}
      ],
      "games" : ["colortunnel", "colortunnel", "colortunnel"]
    },
    "team1" : {
      "name" : "Team 1",
      "pfp" : "",
      "desc" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid",
      "currentmembers" : ["allieamerman"],
      "pastmembers" : [""],
      "games" : ["allieamerman"]
    }
  },

  "games" : {
    "colortunnel" : {
      "name" : "Color Tunnel",
      "icon" : "media/stick.png",
      "pictures" : ["media/img1.jpg","media/img2.jpg"],
      "videos" : ["media/vid3.mp4"],
      "shortdesc" : "a game about a tunnel",
      "desc" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed dostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      "download" : {
        "windows" : "down",
        "osx" : "down",
        "linux" : "down"
      },
      "creators" : [
        {"name" : "allieamerman", "role" : "code"},
        {"name" : "allieamerman", "role" : "code2"}
      ]
    }
  }
}
