// We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
// It should go up as time goes by in intervals of 1 second

// Path: 02-async-js/easy/counter_time.js

function counter_time_seconds() {
    let counter = 0;
    setInterval(() => {
        counter++;
        console.log(counter);
        }, 1000);

}

console.log(counter_time_seconds());

module.exports = counter_time_seconds;
