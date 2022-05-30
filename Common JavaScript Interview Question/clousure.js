/**
 * * Copy questions one-by-one and execute. As all the functions are invoked if you
 * * run the entire file, It will be difficult to identify the output of each snippet.
 */

// Question 1: Lexical Scoping
function init() {
    var name = 'Uncommon Geeks';
    function displayName() {
        alert(name);
    }
    displayName();
}
init();


// Question 2: Closure
function makeFunc() {
    var name = 'Uncommon Geeks';
    function displayName() {
        alert(name);
    }
    return displayName;
}

var myFunc = makeFunc();



// Question 3: 
function makeAdder(x) {
    return function (y) {
        return x + y;
    };
}
var add5 = makeAdder(5);
var add10 = makeAdder(10);
console.log(add5(2));
console.log(add10(2));


// Question 4: 
function outside() {
    var x = 5;
    function inside(x) {
        return x * 2;
    }
    return inside;
}

outside()(10);


// Question 5: 
function timeOut() {
    for (var i = 0; i < 3; i++) {
        setTimeout(function log() {
            console.log(i); // What is logged?
        }, 1000);
    }
}

// Questions 6:
(function immediateA(a) {
    return (function immediateB(b) {
        console.log(a); // What is logged?
    })(1);
})(0);