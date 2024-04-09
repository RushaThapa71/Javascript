let scores = "Rusha"

console.log(typeof scores);
console.log(typeof (scores))

let valueInNumber = Number(scores)
console.log(typeof valueInNumber)
console.log(valueInNumber)


//"32" => "32"
//"32abc" => NaN
//true  => 1; false=> 0

let isLoggedIn = false
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

//1 = true; 0 = false
//"" = false
//"rusha" = true

let someNumber = 99
let stringNumber = String(someNumber)
console.log(stringNumber)


//******************OPERATIONS****************
let value = 99
let negValue = -value
console.log(value)

console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2**5) // 2**5 = 2 to the power 5
console.log(2/2)
console.log(2%3)

let str1 = "hello"
let str2 = " rusha"

let str3 = str1 + str2
console.log(str3)

console.log("1" + 2) //12
console.log(1 + "2") //12
console.log("1" + "2") //12
console.log("1" + 2 + 2) //122
console.log(1 + 2 + "2") //32

// Bad code practice
console.log(+true)
console.log(+"")

let num1, num2, num3, num4
num1 = num2 = num3 = num4 = 6+4

let gameCounter = 100
gameCounter++
console.log(gameCounter)