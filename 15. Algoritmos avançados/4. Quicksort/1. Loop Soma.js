const array = [2, 4, 6];

function soma(arr) {
    let total = 0;
    for(let i = 0; i <= (arr.length - 1); i++) {
        total += arr[i];
    }

    return total;
}

console.log(soma(array));
