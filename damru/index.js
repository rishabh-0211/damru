for (var i = 0; i < document.querySelectorAll(".drum").length;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",show);
function show(){
    var x=this.innerHTML;
    makesound(x);
    animation(x);
}
}
document.addEventListener("keypress", function (event) { 
    makesound(event.key);
    animation(event.key);
});

function makesound(x){
    switch (x) {
        case "r":
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case "i":
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case "s":
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case "h":
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;
        case "a":
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;
        case "b":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
        case "g":
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
        default:
            break;
    }
}
function animation(kii){
    var newkii=document.querySelector("."+kii);
    newkii.classList.add("pressed");
    setTimeout(() => {
        newkii.classList.remove("pressed");
    },100);
}
$("")

