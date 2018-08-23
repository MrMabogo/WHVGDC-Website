function search(){

var input=document.getElementById("search_bar");

var ucase=input.value.toUpperCase();

var T1 = "game";

var T2 = "team";

var T3 = "person";

var profile=document.getElementById("profiles");

var listitem=profile.getElementsByTagName("li");

var SecArr = [0,4];

        for (var i = 0; i < listitem.length; i++){
        
           var a = listitem[i];

           if(a.innerHTML.toUpperCase().indexOf(ucase) > -1 && ucase !== "") { //display section title
               if(a.children[0].className == T1){
                  document.getElementById("gamestitle").style.display = "";
               }
                else if(a.children[0].className == T2){
                  document.getElementById("teamstitle").style.display = "";
               }
               else if(a.children[0].className == T3){
                  document.getElementById("peopletitle").style.display = "";
               }
                  listitem[i].style.display = ""; //display match
        }
           else{
                listitem[i].style.display = "none";
        }
}
}
