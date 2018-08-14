var data = {

  "members" : {
    //  TEMPLATE (replace things between < and >)
    "<Name of person in all lowercase with no spaces (aka: johndoe, or some other unique identifier)>" : {
      "name" : "<Full name capitalized and spaced for display (aia: John Doe)>",
      "pfp" : "(optional, delete this whole row if the member does not have a pfp) <Upload pfp to media folder and then link as media/<pfp name>.jpg>",
      "desc" : "<Short bio, made by member>",
      "groups" : ["<Add any teams this member has contributed to games in. List teams by their identifier (lowercase no spaces)>"],
      "games" : ["<Add any games this member has contributed to. List games by their identifier (lowercase no spaces)>"]
    },


    "albertefremov" : {
      "name" : "Albert Efremov",
      "pfp" : "media/stick.png",
      "desc" : "a person",
      "groups" : ["freelancers"],
      "games" : ["somegame"]
    },
    "allieamerman" : {
      "name" : "Allie Amerman",
      "pfp" : "media/stick.png",
      "desc" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
      "groups" : ["team1"],
      "games" : ["colortunnel", "colortunnel"]
    },
    "test" : {
      "name" : "Bob T. Builder"
    }
  },

  "groups" : {
    //  TEMPLATE (replace things between < and >)
    "<Name of group in all lowercase with no spaces (aka freelancers or team1, or some other unique identifier)>" : {
      "name" : "<Name of group, but capitalized and spaced (aka Freelancers or Team 1)>",
      "pfp" : "<(optional, delete this whole row if the team does not have a pfp) Upload pfp to media folder and then link as media/<pfp name>.jpg>",
      "desc" : "<Full description of group, made by group>",
      "currentmembers" : {
        "<Identifier of member (lowercase no spaces aka johndoe)>" : "<Role(s) of the member>"
      },
      "pastmembers" : {
        "<Identifier of member (lowercase no spaces aka johndoe)>" : "<Role of the member>"
      },
      "games" : ["<List all games by identifier (lowercase no spaces aka colortunnel)"]
    },


    "freelancers" : {
      "name" : "Freelancers",
      "pfp" : "media/stick.png",
      "desc" : "Aid for the Artistically impaired",
      "currentmembers" : {
        "albertefremov" : "Artist"
      },
      "pastmembers" : {
        "test" : "Alumnus",
      },
      "games" : ["colortunnel", "colortunnel", "colortunnel"]
    },
    "team1" : {
      "name" : "Team 1",
      "pfp" : "media/stick.png",
      "desc" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid",
      "currentmembers" : {"allieamerman" : "test"},
      "pastmembers" : {"":""},
      "games" : ["colortunnel"]
    }
  },

  "games" : {
    //  TEMPLATE (replace things between < and >)
    "<Name of game in all lowercase with no spaces (aka colortunnel or some other unique identifier)" : {
      "name" : "<Name of the game but capitalized and spaced (aka Color Tunnel)",
      "icon" : "<Upload icon to media folder and then link as media/<icon name>.jpg>",
      "pictures" : ["<Upload pictures to media folder and list the links"],
      "videos" : ["<Upload videos to media folder and list the links"],
      "shortdesc" : "<A shorter description to put under links>",
      "desc" : "<Full description to go on page>",
      "download" : {
        "<Name of type of download (aka Windows or itch.io)>" : "<Link to download>"
      },
      "creators" : {
        "<Identifier of member (lowercase no spaces aka johndoe)>" : "<Role(s)>"
      }
    },


    "colortunnel" : {
      "name" : "Color Tunnel",
      "icon" : "media/stick.png",
      "pictures" : ["media/img1.jpg","media/img2.jpg"],
      "videos" : ["media/vid3.mp4"],
      "shortdesc" : "a game about a tunnel",
      "desc" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed dostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      "download" : {
        "Windows" : "down",
        "OSX" : "down",
        "Linux" : "down"
      },
      "creators" : {
        "allieamerman" : "code",
        "allieamerman" : "code"
      }
    }
  }
}
