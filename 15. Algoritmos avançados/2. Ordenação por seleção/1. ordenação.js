const lista = [
    {"AutorA": 120},
    {"AutorB": 220},
    {"AutorC": 140},
    {"AutorD": 320},
    {"AutorE": 160},
    {"AutorF": 100},
    {"AutorG": 180},
    {"AutorA": 420}
]

//console.log(Object.values(lista[1]));

// let a = "";

function ler() {
    let menor = Object.values(lista[0]);
    let menorIndice = 0;

    for(let i = 0; i <= (lista.length -1); i++) {
        // a += Object.values(lista[i]) + " ";
        if (Object.values(lista[i]) < menor) {
            menorIndice = i;
            console.log(menorIndice);
            return menorIndice;
        }
    }
    return console.log("");
}

ler();