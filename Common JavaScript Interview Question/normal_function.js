// Since many functions are in global scope, execute each question at a time for better
// understating. 


// Question 1
console.log(square)    
console.log(square(5)) 
const square = function (n) {
    return n * n;
}

//Question 2
function test(theObject) {
    theObject.make = 'Toyota';
}
const car_details = { 
    make: 'Honda',
    model: 'Accord',
    year: 1998
};
console.log('car_details.make 1', car_details.make);
test(car_details);
console.log('car_details.make 2' + car_details.make);



// Question 3
var num1 = 20,
    num2 = 3,
    name = 'Chamakh';
function getScore() {
    var num1 = 2,
        num2 = 3;
    function add() {
        return name + ' scored ' + (num1 + num2);
    }
    return add();
}
console.log(getScore());




// Question 4
function addSquares(a, b) {
    function square(x) {
        return x * x;
    }
    return square(a) + square(b);
}
a = addSquares(2, 3); 
b = addSquares(3, 4); 
c = addSquares(4, 5);
console.log(a,b,c);


// Question 5
function A(x) {
    function B(y) {
      function C(z) {
        console.log(x + y + z);
      }
      C(3);
    }
    B(2);
  }
A(1);