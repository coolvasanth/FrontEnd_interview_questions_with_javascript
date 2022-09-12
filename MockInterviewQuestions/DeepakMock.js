
// Question 1:
var length = 10;
function fn() {
console.log(this.length);
}
var obj = {
  length: 5,
  method: function(fn) {
    fn();
   arguments[0]();
  }
};
obj.method(fn, 1);



// Question 2
(function() {
  console.log(1); 
  setTimeout(function(){console.log(2)}, 1000); 
  setTimeout(function(){console.log(3)}, 0); 
  console.log(4);
})();
