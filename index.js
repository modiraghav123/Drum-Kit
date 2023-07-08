

var button=document.getElementsByClassName("drum");
var l=button.length;
var arr=["sounds/tom-1.mp3","sounds/tom-2.mp3","sounds/tom-3.mp3","sounds/tom-4.mp3","sounds/snare.mp3","sounds/crash.mp3","sounds/kick-bass.mp3"]
for(var i=0;i<l; i++){
    button[i].addEventListener("click",function (){
        
        
         var buttonvalue=this.innerHTML;
         makeSound(buttonvalue);

         buttonAnimation(buttonvalue);
        
    });
}

document.addEventListener("keypress",function(event){
    makeSound(event.key);

    buttonAnimation(event.key);
});




function makeSound(key){
    switch(key){
        case "w":
            var audio=new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio=new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio=new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio=new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio=new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "k":
            var audio=new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "l":
            var audio=new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        default:
            console.log(key);

    }
};

function buttonAnimation(buttonkey){
  var  button=document.querySelector("."+buttonkey);
    button.classList.add("pressed");

    setTimeout(function(){
        button.classList.remove("pressed");
    },100);
};