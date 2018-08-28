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

    "abrehamtemesgen" : {
      "name" : "Abreham Temesgen",
      "desc" : "",
      "groups" : ["staff","team2","webdev"],
      "games" : ["leafpilot","ourinvasion","website"]
    },
    "albertefremov" : {
      "name" : "Albert Efremov",
      "desc" : "",
      "groups" : ["freelancers"],
      "games" : ["somegame"]
    },
    "allieamerman" : {
      "name" : "Allie Amerman",
      "desc" : "Senior at Wheaton High School graduating in Spring of 2019. Planning to double major in Computer Science and Materials Science. Interested in Artifical Intelligence and Molecular Simulation. Hobby writer and music composer. <br> <a style=\"color:blue; padding-left:10px;\" href=\"https://soundcloud.com/vyroj\">soundcloud</a>",
      "groups" : ["staff","team1","webdev"],
      "games" : ["colorstorm", "thenightbefore", "therock","website"]
    },
    "brianmbogo" : {
      "name" : "Brian Mbogo",
      "desc" : "",
      "groups" : ["staff","team2","webdev"],
      "games" : ["leafpilot","ourinvasion","website"]
    },
    "dzakyhasan" : {
      "name" : "Dzaky F. Hasan",
      "desc" : "Graduating year: Spring 2019 <br>Interests: Sound Design, Biomedical Engineering, Music Technology, Child Care and Development",
      "groups" : ["team3"],
      "games" : ["sevensins","colorstorm"]
    },
    "eddie" : {
      "name" : "Eddie",
      "desc" : "",
      "groups" : ["team3"],
      "games" : ["sevensins"]
    },
    "gabriellepham" : {
      "name" : "Gabrielle Pham",
      "desc" : "Computer Science Student currently at UMD",
      "groups" : ["team3"],
      "games" : ["sevensins"]
    },
    "kevinawoufack" : {
      "name" : "Kevin Awoufack",
      "desc" : "Co-founder",
      "groups" : ["staff","team1"],
      "games" : ["colorstorm", "thenightbefore", "therock"]
    },
    "raventiu" : {
      "name" : "Raven Tiu",
      "desc" : "",
      "groups" : ["team2"],
      "games" : ["ourinvasion"]
    },
    "riniackerman" : {
      "name" : "Rini Ackerman",
      "desc" : "Forever alone.",
      "groups" : ["team3"],
      "games" : ["sevensins"]
    },
    "tadiyosberhane" : {
      "name" : "Tadiyos Berhane",
      "desc" : "Co-founder and club head",
      "groups" : ["staff","team1"],
      "games" : ["colorstorm", "thenightbefore", "therock"]
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
      "games" : ["<List all games by identifier (lowercase no spaces aka colorstorm)"]
    },

    "staff" : {
      "name" : "Staff",
      "pfp" : "media/staff.png",
      "desc" : "In charge",
      "currentmembers" : {
        "tadiyosberhane" : "Head, Founder",
        "allieamerman" : "Co-founder, Admin",
        "kevinawoufack" : "Co-founder, Admin",
        "brianmbogo" : "Advisor",
        "abrehamtemesgen" : "Advisor"
      },
      "games" : []
    },
    "freelancers" : {
      "name" : "Freelancers",
      "desc" : "Aid for the Artistically impaired",
      "currentmembers" : {
        "albertefremov" : "Art",
        "dzakyhasan" : "Music"
      },
      "games" : ["colorstorm"]
    },
    "webdev" : {
      "name" : "Web Developers",
      "pfp" : "media/webdevs.png",
      "desc" : "Exploring different technologies and conventions in web development.",
      "currentmembers" : {
        "brianmbogo" : "HTML and CSS",
        "abrehamtemesgen" : "JS",
        "allieamerman" : "HTML, CSS, and JS"
      },
      "games" : ["website"]
    },
    "team1" : {
      "name" : "Team 1",
      "desc" : "The one to rule them all",
      "currentmembers" : {
        "tadiyosberhane" : "Code / Art, Music, Script",
        "allieamerman" : "Code / Art, Music",
        "kevinawoufack" : "Code / Art"
      },
      "games" : ["colorstorm", "thenightbefore", "therock"]
    },
    "team2" : {
      "name" : "Team 2",
      "desc" : "Secondhand",
      "currentmembers" : {
        "brianmbogo" : "Code",
        "abrehamtemesgen" : "Code",
        "raventiu" : "Music"
      },
      "games" : ["leafpilot","ourinvasion"]
    },
    "team3" : {
      "name" : "Team 3",
      "desc" : "A development team filled with diverse talents ranging from music production, programming, storytelling, and illustrations.",
      "currentmembers" : {
        "gabriellepham" : "Code",
        "dzakyhasan" : "Music",
        "eddie" : "Art",
        "riniackerman" : "Script"
      },
      "games" : ["sevensins"]
    }
  },

  "games" : {
    //  TEMPLATE (replace things between < and >)
    "<Name of game in all lowercase with no spaces (aka colorstorm or some other unique identifier)" : {
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


    "colorstorm" : {
      "name" : "Color Storm",
      "icon" : "media/colorstormicon.png",
      "pictures" : ["media/colorstorm1.png"],
      "videos" : ["media/colorstorm2.mp4"],
      "shortdesc" : "endless runner",
      "desc" : "You are navigating a magical color-shifting plane through a storm of colorful barriers which can destroy you in one collision. Are you ready?",
      "download" : {
        "itch.io" : "https://wheaton-high-school-vmc.itch.io/color-storm"
      },
      "creators" : {
        "allieamerman" : "Code",
        "tadiyosberhane" : "Music",
        "kevinawoufack" : "Art",
        "dzakyhasan" : "Music"
      }
    },
    "thenightbefore" : {
      "name" : "The Night Before",
      "icon" : "media/sketch.png",
      "pictures" : ["media/pumpkin1.png"],
      "videos" : ["media/pumpkin2.webm","media/pumpkin3.webm"],
      "shortdesc" : "dungeon",
      "desc" : "Your PUMPKIN is your life. It keeps you hidden among MONSTERS. Unfortunately, it also attracts them, as they want your pumpkin to protect themselves in the sunlight. Luckily, you've got multiple pumpkins.",
      "download" : {
        "itch.io" : "https://vyroj.itch.io/the-night-before"
      },
      "creators" : {
        "allieamerman" : "Code, Music",
        "tadiyosberhane" : "Code, Art",
        "kevinawoufack" : "Code, Level Design"
      }
    },
    "therock" : {
      "name" : "The Rock",
      "icon" : "media/rockicon.png",
      "pictures" : ["media/therock1.png"],
      "videos" : ["media/therock2.webm","media/therock3.webm"],
      "shortdesc" : "story, platform",
      "desc" : "We made this game a few months ago, and lost the working editable version. We made some mistakes while making it and the sizing may not work out perfectly, but as long as you can support 1080x1024 it should be okay. Our instructions were a lie, it's enter to advance dialogue.",
      "download" : {
        "itch.io" : "https://wheaton-high-school-vmc.itch.io/the-rock"
      },
      "creators" : {
        "allieamerman" : "Code, Music, Art",
        "tadiyosberhane" : "Code, Script, Level Design",
        "kevinawoufack" : "Code, Art"
      }
    },
    "sevensins" : {
      "name" : "Seven Sins",
      "icon" : "media/sssicon.png",
      "pictures" : ["media/sss1.png","media/sss2.png"],
      "videos" : [],
      "shortdesc" : "visual novel/text-adventure",
      "desc" : "High School Visual Novel.",
      "download" : {
        "simmer.io" : "https://simmer.io/@PurePureMilk/seven-sins"
      },
      "creators" : {
        "gabriellepham" : "Code",
        "eddie" : "Art",
        "riniackerman" : "Script",
        "dzakyhasan" : "Music"
      }
    },
    "leafpilot" : {
      "name" : "Leaf Pilot",
      "icon" : "media/",
      "pictures" : [],
      "videos" : [],
      "shortdesc" : "visual novel/text-adventure",
      "desc" : "",
      "download" : {
        "simmer.io" : "https://simmer.io/@PurePureMilk/seven-sins"
      },
      "creators" : {
        "brianmbogo" : "Code",
        "abrehamtemesgen" : "Code"
      }
    },
    "ourinvasion" : {
      "name" : "Our Invasion",
      "icon" : "media/",
      "pictures" : [],
      "videos" : [],
      "shortdesc" : "visual novel/text-adventure",
      "desc" : "",
      "download" : {
        "simmer.io" : "https://simmer.io/@PurePureMilk/seven-sins"
      },
      "creators" : {
        "brianmbogo" : "Code",
        "abrehamtemesgen" : "Code",
        "raventiu" : "Music"
      }
    },
    "website" : {
      "name" : "Website",
      "icon" : "media/arrows.png",
      "pictures" : ["media/website.png"],
      "videos" : [],
      "shortdesc" : "insert meta joke",
      "desc" : "This.",
      "download" : {
        "Home" : "../index.html"
      },
      "creators" : {
        "brianmbogo" : "HTML and CSS",
        "abrehamtemesgen" : "JS",
        "allieamerman" : "HTML, CSS, and JS"
      }
    }
  }
}
