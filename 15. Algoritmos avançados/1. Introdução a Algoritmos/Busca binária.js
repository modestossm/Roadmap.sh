const number = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

const rand = parseInt(Math.random()*20) + 1;
console.log(rand);

function pb () {
    let baixo = 0;
    let alto = number.length - 1;
    console.log(baixo, alto);

    while (baixo <= alto) {
        let meio = parseInt((baixo + alto)/2);
        let chute = number[meio];
        
        if (chute === rand) {
            console.log(meio);
            return meio;
        } else if (chute >= rand) {
            console.log(alto);
            alto = meio - 1;
        } else {
            console.log(baixo);
            baixo = meio + 1;
        }
    } 
    
    return console.log("número não consta na lista!");
}

pb();