//Without using setInterval, try to code a counter in Javascript. It should go up as time goes by in intervals of 1 second

var counter=1;

function printCounter(){
  console.clear();
  console.log(counter);
  counter=counter+1;
}


setTimeout(printCounter,1000);


