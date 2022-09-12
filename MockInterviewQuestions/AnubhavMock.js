// Question 1
function func() {
  const a = b = c = 1
}
func()
console.log(typeof a, typeof b, typeof c)


// Question 2: 
for (var i = 0; i < 5; i++) {
        setTimeout(function() { console.log(i); }, 1000); 
}


//  Question 3
sayOtherName()
sayName()
var sayName =() =>{
    console.log('hello world')
}
function sayOtherName(){
    console.log('world is beautiful')
}
