async function testPromise1() {
  return Promise.resolve(1);
}
async function testPromise2() {
  return Promise.resolve(2);
}
async function testPromise3() {
  return Promise.resolve(3);
}

console.log('Before async await'); // 2
testPromise1.then(num1 => {
  testPromise2.then(num2 => {
    testPromise3.then(num3 => {
      console.log(num1 + num2 + num3);
      console.log('After async await');//4
    })
  })
})

async function test() {
  console.log('Before async await'); // 2
  
  const num1 = await testPromise1();
  const num2 = await testPromise2();
  const num3 = await testPromise3();
  console.log(num1 + num2 + num3);
  console.log('After async await');//4
}
console.log('Before calling test'); // 1
test()
console.log('After calling test'); // 3