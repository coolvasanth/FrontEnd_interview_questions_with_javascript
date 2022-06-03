// Custom implementation Array.concat 

function pushValues(src, destination){
    for (let i = 0; i < destination.length; i++) {
        src.push(destination[i]);
    }
    return src;
}

Array.prototype.myConcat = function(){
    const argumentBunch =  arguments;
    let inputArray = this;
    
    for (let i = 0; i < argumentBunch.length; i++) {
        if( Array.isArray(argumentBunch[i])){
            inputArray = pushValues(inputArray, argumentBunch[i])
        }else{
            inputArray.push(argumentBunch[i]);
        }
    }
    return inputArray;
}

const arr1 = [1,2,3]
const arr2 = [4,5,6]
const value1 = 'y'
const value2 = () => {}
const value3 = undefined
const value4 = null

console.log(arr1.con(arr2,value1,value2, value3, value4)); 
console.log(arr1.myConcat(arr2,value1,value2, value3, value4)); 