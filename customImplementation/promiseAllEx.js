function myPromiseAll(promiseList){
  return new Promise((resolve, reject) => {
    let output = [];
    promiseList.forEach((promise, index) => {
      try{
        promise.then(data => {
          output.push(data);
          if((index+1) === promiseList.length){
            resolve(output);
          }
        })
      }catch(e){
        reject(e)
      }
    })
  })
}
const promise1 = Promise.resolve(1)
const promise2 = Promise.resolve(2)
const promise3 = Promise.reject(3)

const output = myPromiseAll([promise1, promise2,promise3]);
output.then(data => {
  console.log(data);
})


// Promise.all([promise1, promise2, promise3]).then(data => {
//   console.log(data);
// })