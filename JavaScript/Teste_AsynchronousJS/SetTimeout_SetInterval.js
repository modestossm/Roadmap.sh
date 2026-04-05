let timerId = setTimeout(() => console.log("never happens"), 1000);
console.log(timerId);

clearTimeout(timerId);
console.log(timerId);


// repeat with the interval of 2 seconds
let timerId1 = setInterval(() => console.log('tick'), 2000);

// after 5 seconds stop
setTimeout(() => { clearInterval(timerId1); console.log('stop'); }, 5000);


// The setTimeout schedules the next call right at the end of the current one
let timerId2 = setTimeout(function tick() {
  console.log('tick');
  timerId2 = setTimeout(tick, 2000); // (*)
}, 2000);