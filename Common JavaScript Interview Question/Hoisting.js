// PURE FUNCTIONS 

// Question 1
function test(){
    var x  = 10;
    var x;
    console.log('X is ' + x);
}
test();


// Question 2
function varTest() {
    var x = 1;
    {
        var x = 2;  
        console.log(x);  
    }
    console.log(x); 
}

// Question 3
function letTest() {
    let x = 1;
    let x = 2;
    console.log(x); 
    console.log(x);
}


// Question 4
function do_something() {
    console.log(bar); 
    var bar = 111;
    console.log(bar);
}


// Question 5
var rat = 10
function getRate() {
  if (rat === undefined) {
      var rate = 6;
      return rate;
   } else {
      return 10;
   }
}
console.log("Rate is", getRate());


