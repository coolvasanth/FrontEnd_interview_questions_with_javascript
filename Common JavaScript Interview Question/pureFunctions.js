// PURE FUNCTIONS

// Question 1
let output = console.log('Welcome to uncommon geek');
console.log('Output is ' + output);

// Question 2 (Is it pure function or not)
function areaOfRectangle(length, breadth){
    console.log(' Area is ' + length * breadth); // this causes side effects
    return length * breadth;
}
areaOfRectangle(2,4)

// Question 3 (Array.filter method is pure or not)
const words = ['spray', 'destruction']
const result = words.filter(word => word.length > 6);
console.log(result);













// Question 2 - Not a pure function
// function areaOfRectangle(length, breadth){
//     console.log(" Area is ", length * breadth); // Side effect
//     return length * breadth;
// }
// areaOfRectangle(2,4); 









// Question 3
function uncommonGeek(){
    const words = ['spray', 'destruction'];
    const result = words.filter(word => word.length > 6);
    console.log(result); // Output will be ['destruction']    
}

// Question 4 = Why pure functions are essential
1. Deterministic
2. Memoisation 