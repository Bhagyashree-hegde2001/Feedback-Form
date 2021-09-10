

function myFun(){
var today = new Date();
var dd = today.getDate();

var mm = today.getMonth()+1; 
var yyyy = today.getFullYear();

var hour =today.getHours();
var min = today.getMinutes();

var time = hour +  ':' +min; 
today = dd+'/'+mm+'/'+yyyy;


document.getElementById("date").innerHTML = "Date: " + today + " Time: " + time;

}

