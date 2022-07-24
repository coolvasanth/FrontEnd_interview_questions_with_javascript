
console.log(1 +  "2" + "2"); // "12" + "2" = "122"
console.log(1 +  +"2" + "2"); // 1 +2 = 3 // 3 + "2" = "32"
console.log(1 +  -"1" + "2"); // 1 - 1 = 0 // 0 + "2" = "02"
console.log(+"1" +  "1" + "2"); // 1 + "1" = "11" + "2" = "112"
console.log( "A" - "B" + "2"); // Nan + "2" = "Nan2"
console.log( "A" - "B" + 2);// Nan + 2 = NaN