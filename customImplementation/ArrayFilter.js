const num = [1,2,3,4,5,6];

Array.prototype.myFilter = function(callback){
    const inputArr = this;
    const output = [];
    for (let i = 0; i < inputArr.length; i++) {
        if(callback(inputArr[i])){
            output.push(inputArr[i]);
        }        
    }
    return output;
}

const result = num.myFilter(ele => ele > 2);

console.log(result);