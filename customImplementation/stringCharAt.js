String.prototype.myCharAt = function(index){
  const inputStr = this;
  const rightIndex = index !== null ? index : 0;
  if(rightIndex < 0 || rightIndex > inputStr.length){
    return " ";
  }
  return inputStr[rightIndex];
}

const sentence = 'Welcome to uncommon geeks';
const index = -4000;
console.log(`The character at index ${index} is ${sentence.myCharAt(index)}`);
