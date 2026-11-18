const array = [2, 0, 4, 8, 6, 12, 10];

function quicksort(arr) {
    if(arr.length < 2) {
        return arr;
    } else {
        const pivo = arr[0];
        const menores = [];
        const maiores = [];

        for (let i = 1; i < arr.length; i++) {
            if(arr[i] < pivo) {
                menores.push(arr[i]);
            } else {
                maiores.push(arr[i]);
            }
        }

        return [...quicksort(menores), pivo, ...quicksort(maiores)];
    }
}

console.log(quicksort(array));