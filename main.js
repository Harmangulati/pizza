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
}

function add_item(){
var htmldata;
var item=document.getElementById("add_item").value;
//Complete the code

}

function add_top(){
//Complete the code
}