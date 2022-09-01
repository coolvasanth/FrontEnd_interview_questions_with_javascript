function add(num1, num2){
    return num1 + num2;
}

function multiply(num1, num2, num3){
    return num1 * num2 * num3;
}

function getUniqueId(fn, args){
    let uniqueId = [];
    uniqueId = uniqueId.concat(fn.name, args);
    return uniqueId.join("|");
    
}


function memoise(fn){
    let cache = {};
    return function(...args){
        let uniqueId = getUniqueId(fn, args);
        console.log(cache);
        if(cache[uniqueId]){
            console.log('from cache');
            return cache[uniqueId];
        }else{
            cache[uniqueId] = fn(...args);
            console.log('not from cache');
            return cache[uniqueId]
        }
    }
}

let memoiseAdd = memoise(add);
let memoiseMultiply = memoise(multiply);

console.log(memoiseAdd(10,20));
console.log(memoiseAdd(10,20));
console.log(memoiseMultiply(10,20,30));
console.log(memoiseMultiply(10,20,30));
