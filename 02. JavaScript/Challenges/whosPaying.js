function whosPaying(names) {
    
    let nameList = names;

    let r = Math.floor(Math.random()* nameList.length);
    
    return nameList[r] + " is going to buy lunch today!"

}

console.log(whosPaying(["Angela", "Ben", "Jenny", "Michael", "Chloe"]));