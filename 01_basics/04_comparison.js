console.log(2>1)
console.log(2>=3)
console.log(2<=3)
console.log(2==3)
console.log(2!=3)

console.log("2">1)
console.log("03">1)

//avoid these kind of comparisions

console.log(null>0); //false
console.log(null==0); //false
console.log(null>=0); //true

console.log(undefined>=0); //false
console.log(undefined<=0); //false
console.log(undefined==0); //false

//strict check =================================
console.log("2" === 2);

