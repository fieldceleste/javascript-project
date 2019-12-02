document.getElementById("form1").onsubmit=function() {
    color = parseInt(document.querySelector('input[name = "color"]:checked').val);
	vaca = parseInt(document.querySelector('input[name = "vaca"]:checked').val);
	job = parseInt(document.querySelector('input[name = "job"]:checked').val);
    game = parseInt(document.querySelector('input[name = "game"]:checked').val);
   
	   
	result = color + vaca + job + game;
	   
document.getElementById("answer").innerHTML = result;
if (result >= 5) {result2 = "You are the invicible Batman"};
if (result >= 12) {result2 = "You are the strong Hulk"};
if (result >= 13) {result2 = "You are the crazy Joker"};
if (result >= 18) {result2 = "You are the dominating Thanos"};

document.getElementById("answer2").innerHTML = result2;
	   


return false; // required to not refresh the page; just leave this he re
} //this ends the submit function

