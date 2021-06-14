//Jodiendo a yepeta

var clickYepeta = document.getElementById("yepeta-click") 

clickYepeta.onclick = function (){
    $("#yepeta-img").html("<img class='imgw' src='img/yepeta1.jpg'>")
    $("#yepeta-name").html("<span class='card-text'>Yepeta sexy</span>")
    $("#yepeta-aviso").html("<span class='card-text'>¡Sigue dale click!(imagen-> 2</span>")
    clickYepeta.onclick = function (){
        $("#yepeta-img").html("<img class='imgw' src='img/yepeta2.jpg'>")
        $("#yepeta-name").html("<span class='card-text'>Yepeta (Britney Spears)</span>")
        $("#yepeta-aviso").html("<span class='card-text'>¡Sigue dale click!(imagen-> 3</span>")
        clickYepeta.onclick = function (){
            $("#yepeta-img").html("<img class='imgw' src='img/yepeta3.jpg'>")
            $("#yepeta-name").html("<span class='card-text'>Yepeta Medio Aguaje</span>")
            $("#yepeta-aviso").html("<span class='card-text'>¡Sigue dale click!(imagen-> 4</span>")
            clickYepeta.onclick = function (){
                $("#yepeta-img").html("<img class='imgw' src='img/yepeta4.jpg'>")
                $("#yepeta-name").html("<span class='card-text'>Yepeta (con el platano de angel)</span>")
                $("#yepeta-aviso").html("<span class='card-text'>¡dale click!(imagen-> 5</span>")
                $("#yepeta-click").html("<a href='index.html'>Click</a>")
            }
        }
    }
}