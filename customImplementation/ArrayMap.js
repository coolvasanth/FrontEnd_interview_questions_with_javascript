Array.prototype.myMap = function(callback){
  const inputArray = this;
  const output = []
  for (let i = 0; i < inputArray.length; i++) {
    // 1. value 2. index 3. array 
    // output.push(callback(inputArray[i], i, inputArray));
    const partialOutput = callback(inputArray[i], i, inputArray);
    output.push(partialOutput);
  }
  return output;
}

// 

const array1 = [1, 4, 9, 16];
const map1 = array1.myMap((value, index, arr) => {
  return value * 2
});

console.log(map1);