const array1 = [1, 2, 3, 4];

Array.prototype.myReduce = function(callback, initialValue){
    const inputArray = this;
    let accumulator = initialValue != null ? initialValue : inputArray[0]
    for (let i = 0; i < inputArray.length; i++) {
        accumulator = callback(accumulator, inputArray[i]);
    }
    return accumulator;
}

// const initialValue = 0;
const output = array1.myReduce(
  (accumulator, currentValue) => {
    console.log('accumulator ' + accumulator + ' currentValue ' + currentValue);
    return accumulator + currentValue
  },
  0
);

console.log(output);
