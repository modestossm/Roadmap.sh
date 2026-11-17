// Fatorial

function fat(num) {
    if(num === 1) {
        console.log("1");
        return 1
    } else {
        console.log(num);
        return (
            num * fat((num - 1))
        );
    }

}

console.log(fat(5));