const drum = document.querySelectorAll(".drum");
const numberOfBtn = drum.length;

for(let i = 0; i < numberOfBtn; i++) {
    drum[i].addEventListener("click", function (event) {
        let btnHTML = this.innerHTML;

        makeSound(btnHTML);

        buttonAnimation(btnHTML);
        console.log(btnHTML);
    })
};


document.addEventListener("keydown", function (event) {
    console.log(event.key);

    makeSound(event.key);

    buttonAnimation(event.key);
});


function makeSound(key) {
    switch(key) {
            case ("w"):
                let audiow = new Audio("./sounds/tom-1.mp3");
                return audiow.play();
                break;
            case "a":
                let audioa = new Audio("./sounds/tom-2.mp3");
                return audioa.play();
                break;
            case "s":
                let audios = new Audio("./sounds/tom-3.mp3");
                return audios.play();
                break;
            case "d":
                let audiod = new Audio("./sounds/tom-4.mp3");
                return audiod.play();
                break;
            case "j":
                let audioj = new Audio("./sounds/snare.mp3");
                return audioj.play();
                break;
            case "k":
                let audiok = new Audio("./sounds/kick-bass.mp3");
                return audiok.play();
                break;
            case "l":
                let audiol = new Audio("./sounds/crash.mp3");
                return audiol.play();
                break;
            default:
                break;
        }
};

function buttonAnimation(currKey) {
    let activeBtn = document.querySelector("." + currKey);

    activeBtn.classList.add("pressed");

    setTimeout(function() {
        activeBtn.classList.remove("pressed");
    }, 100);
}