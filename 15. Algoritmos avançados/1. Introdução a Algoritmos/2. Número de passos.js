const lista = 256;

function n() {
    let etapas = 0;
    while ((2 ** etapas) <= lista)
        if((2 ** etapas) === lista) {
            console.log("Número de etapas:", etapas);
            return etapas;
        } else {
            etapas += 1;
            console.log(etapas);
        }
}

n();