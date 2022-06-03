Array.prototype.myFlat = function(){
    const output = []
    function flattenArray(arr){
        for (let i = 0; i < arr.length; i++) {
            if(Array.isArray(arr[i])){
                flattenArray(arr[i]);
            }else{
                output.push(arr[i]);
            }
        }
        return output;
    }
   const returnValue = flattenArray(this);
   return returnValue;
}

const inputArray = [0, 1, 2, [3, 4, [5,6]], 7];


console.log(inputArray.myFlat());
// 0,1,2, 3, 4,5,6,7
// 