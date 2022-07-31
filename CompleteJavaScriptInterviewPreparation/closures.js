function example1(){
  for (var i = 0; i < 3; i++) {
    setTimeout(function() { console.log(i); }, 1000 + i);
  }
}


function example2(){
  for (var i = 0; i < 3; i++) {
    setTimeout((function() { 
      console.log(i) 
    })(), 1000 + i);
  }
}


function example3(){
  for (var i = 0; i < 3; i++) {
    setTimeout(function(k) { 
      return function() { console.log(k); } 
    }(i), 1000 + i);
  }  
}
