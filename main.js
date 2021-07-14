menu_list_array = ["Veg Margherita Pizza","Chicken Tandoori Pizza"
,"Veg Supreme Pizza","Panner Tikka Pizza","deluxe Veggie Pizza","Veg Extravaganza Pizza",];

function getmenu(){
var htmldata;
//Complete the code
var htmldata="<ol class='menulist'>"
menu_list_array.sort();
for(var i=0;<menu_list_array.length;i++){
    htmldata=htmldata+ '<li>' +menu_list_array[i] + '<li>'
}
htmldata=htmldata+"</ol>"
document.getElementById("display_menu").innerhtml=htmldata;
}

function add_item(){
var htmldata;
var item=document.getElementById("add_item").value;
//Complete the code
var htmldata;
var item=document.getElementById("add_item").value;
menu_list_array.sort();
htmldata="<section calss='cards'>"
for(var i=0;i<menu_list_array.length;i++){
    htmldata=htmldata+'<div class="card">'
    +<img src="pizza.png"/>
+menu_list_array[i] + '</div>'
htmldata=htmldata+"</section>"
document.getElementById("display_addedmenu"),innerhtml=htmldata;
}
}

function add_top(){
//Complete the code
var item=document.getElementById("add_item").value
menu_list_array.push(item);
add_item();
}