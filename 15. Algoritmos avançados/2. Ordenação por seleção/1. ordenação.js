const lista = [
    {"AutorA": 120},
    {"AutorB": 220},
    {"AutorC": 140},
    {"AutorD": 320},
    {"AutorE": 160},
    {"AutorF": 110},
    {"AutorG": 100},
    {"AutorH": 420}
]

//console.log(Object.values(lista[1]));

// let a = "";

function menorIndice(arr) {
    let indiceMenor = 0;
    let menor = Object.values(arr[0])[0];

    for (let i = 1; i < arr.length; i++) {
        // a += Object.values(lista[i]) + " ";
        const valor = Object.values(arr[i])[0];

        if (valor < menor) {
            menor = valor;
            indiceMenor = i;
        }
    }

    // console.log(indiceMenor);
    return indiceMenor;
}

function ordenacaoPorSelecao(arr) {
    const restante = [...arr]; // cópia; não altera o array original
    const listaOrdenada = [];

    while (restante.length > 0) {
        const indice = menorIndice(restante);
        listaOrdenada.push(restante.splice(indice, 1)[0]);
    }

    return listaOrdenada;
}

console.log(ordenacaoPorSelecao(lista));