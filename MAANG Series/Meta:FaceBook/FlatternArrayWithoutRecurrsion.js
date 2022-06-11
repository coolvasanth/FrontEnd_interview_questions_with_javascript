function flattenArr(input){
    const stack = [...input];
    const res = [];

    while(stack.length){
        const last = stack.pop();
        if(Array.isArray(last)){
            stack.push(...last);
        }else{
            res.push(last);
        }
    }
    return res.reverse();
}


const arr = [1,2, [3,4],5]
console.log(flattenArr(arr)); 