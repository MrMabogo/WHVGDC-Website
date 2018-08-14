function search(){

var input=document.getElementById("search_bar");

var ucase=input.value.toUpperCase();

var T1 = "games";

var T2 = "teams";

var T3 = "members";

var profile=document.getElementById("profiles");

var listitem=profile.getElementsByTagName("li");

var SecArr = [0,4];

        for (var i = 0; i < listitem.length; i++){
        
           var a = listitem[i].getElementsByTagName("a")[0];

           if(a.innerHTML.toUpperCase().indexOf(ucase) > -1 && ucase !== "") {
               if(a.innerHTML.indexOf(T1) > -1 && a.innerHTML.indexOf(T2) <= -1){
                  listitem[0].style.display = "";
               }
               else if(a.innerHTML.indexOf(T2) > -1  && a.innerHTML.indexOf(T3) <= -1){
                  listitem[3].style.display = "";
               }
               else if(a.innerHTML.indexOf(T3) > -1){
                  listitem[6].style.display = "";
               }
                  listitem[i].style.display = "";
        }
           else{
                listitem[i].style.display = "none";
        }
}
}
