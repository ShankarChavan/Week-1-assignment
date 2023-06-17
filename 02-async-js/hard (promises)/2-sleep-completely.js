
//Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
//During this time the thread should not be able to do anything else.

function sleep(milliseconds) {
    let start = new Date().getTime();
    while (new Date().getTime() < start + milliseconds);
}

sleep(1000);
console.log('1 seconds');
sleep(2000);
console.log('2 seconds');
sleep(3000);
console.log('3 seconds');


