const array = [2, 4, 6];

function soma(arr, n = 0) {
    if(n === (arr.length - 1)) {
        return arr[n];
    } else {
        return arr[n] + soma(arr, n + 1);
    }
}

console.log(soma(array));