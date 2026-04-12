// Iterator Demo
const nums = [1, 5, 16];
let iter = makeIterator(nums);

function makeIterator(arr) {
    let i = 0;

    return {
        next: function() {
            if(i > arr.length - 1) {
                return {value: undefined, done: true}
            }

            return {value: arr[i++], done: false}
        }
    }
}

console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log("--------------------");


// Predefined iterators
const nums2 = [5, 25, 50];
let iter2 = nums2[Symbol.iterator]();

console.log(iter2.next());
console.log(iter2.next());
console.log(iter2.next());
console.log(iter2.next());
console.log("--------------------");