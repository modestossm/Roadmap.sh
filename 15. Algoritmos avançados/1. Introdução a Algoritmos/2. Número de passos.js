const lista = 128;

function n() {
    let passos = 0;
    while ((2 ** passos) <= lista)
        if((2 ** passos) === lista) {
            console.log("O número de passos é:", passos);
            return passos;
        } else {
            passos += 1;
            console.log(passos);
        }
}

n();