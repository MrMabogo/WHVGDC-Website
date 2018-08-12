function parseQuery(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split('&');
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split('=');
    if (decodeURIComponent(pair[0]) == variable) {
      return decodeURIComponent(pair[1]);
    }
  }
  console.log("query var not found");
}

var name = parseQuery('m');

if ( !data.groups.hasOwnProperty(name)) {
  window.location.href = "nomem.html";
}

function runoff() {
  document.getElementById("tab").innerHTML = data.groups[name].name+" - Groups";
  document.getElementById("name").innerHTML = data.groups[name].name;
  document.getElementById("title").innerHTML = data.groups[name].name;
  document.getElementById("desc").innerHTML = data.groups[name].desc;
  if ( data.groups[name].pfp != null) {
    document.getElementById("pfp").innerHTML = "<img src=\"../"+data.groups[name].pfp+"\">";
  }

  var currentmembersadd = "";

  for (var i in data.groups[name].currentmembers) {
    currentmembersadd += "<a href=\"#id\" class=\"person\">";
    if ( data.members[data.groups[name].currentmembers[i].name].pfp !=  null) {
      currentmembersadd += "<img src=\"../";
      currentmembersadd += data.members[data.groups[name].currentmembers[i].name].pfp;
      currentmembersadd += "\"></img>";
    }
    currentmembersadd += "<div><h3>";
    currentmembersadd += data.members[data.groups[name].currentmembers[i].name].name;
    currentmembersadd += "</h3><p>";
    currentmembersadd += data.groups[name].currentmembers[i].role;
    currentmembersadd += "</p></div></a>";
  }

  document.getElementById("currentmembers").innerHTML = currentmembersadd;

  var pastmembersadd = "";

  for (var i in data.groups[name].pastmembers) {
    pastmembersadd += "<a href=\"#id\" class=\"person\">";
    if ( data.members[data.groups[name].pastmembers[i].name].pfp !=  null) {
      pastmembersadd += "<img src=\"../";
      pastmembersadd += data.members[data.groups[name].pastmembers[i].name].pfp;
      pastmembersadd += "\"></img>";
    }
    pastmembersadd += "<div><h3>";
    pastmembersadd += data.members[data.groups[name].pastmembers[i].name].name;
    pastmembersadd += "</h3><p>";
    pastmembersadd += data.groups[name].pastmembers[i].role;
    pastmembersadd += "</p></div></a>";
  }

  document.getElementById("pastmembers").innerHTML = pastmembersadd;

  var gamesadd = "";

  for ( var i in data.groups[name].games) {
    gamesadd += "<div class=\"game\"><a href=\"../games/game.html?m="+
      data.groups[name].games[i]+
      "\"><img src = \"../"+
      data.games[data.groups[name].games[i]].icon+
      "\" width=80 height=75></img><br>"+
      data.games[data.groups[name].games[i]].name+
      "<p>"+
      data.games[data.groups[name].games[i]].shortdesc+
      "</p></a></div>";
  }

  document.getElementById("games").innerHTML = gamesadd;

}

window.onload = runoff;
