const array = [2, 0, 4, 8, 6, 12, 10];
let max = array[0];

function maximo(arr) {
    for(let i = 0; i <= (arr.length - 1); i++){
        if(arr[i] > max) {
            max = arr[i];
        }
    }
    
    return max;
}

console.log(maximo(array));