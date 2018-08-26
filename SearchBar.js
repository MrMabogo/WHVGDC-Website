function search(){

var input=document.getElementById("search_bar");

var ucase=input.value.toUpperCase();

var T1 = "game";

var T2 = "team";

var T3 = "person";

var profile=document.getElementById("profiles");

var listitem=profile.getElementsByTagName("li");


        for (var i = 0; i < listitem.length; i++){
        
           var a = listitem[i];

           if(a.innerHTML.toUpperCase().indexOf(ucase) > -1 && ucase !== "") { //display section title
               if(a.children[0].className == T1){
                 listitem[0].style.display = "";
               }
                else if(a.children[0].className == T2){
                 listitem[3].style.display = "";
               }

               else if(a.innerHTML.indexOf(T3) > -1){
                  listitem[5].style.display = "";
               }
                  listitem[i].style.display = ""; //display match
        }
           else{
                listitem[i].style.display = "none";
        }
}
}
