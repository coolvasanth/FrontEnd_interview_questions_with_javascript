
let cache = {}
function add(num){
    if(cache[num]){
        console.log('Cached value');
        return cache[num]
    }else{
        console.log('not Cached value');
        cache[num] = num + 10;
        return num + 10
    }
    
}
console.log(add(20)); 
console.log(add(20)); 



function fibonacci(num, cache = {}){
    if(cache[num]) return cache[num]
    if(num === 0) return 0;
    if(num === 1 || num === 2) return 1;
    return cache[num] = fibonacci(num-2) + fibonacci(num-1)
}

console.log(fibonacci(1000));

// 0 1 2 3 4 5 6
// 0 1 1 2 3 5 8