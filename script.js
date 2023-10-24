//maneira 1
let num = [1,45,32,87,2,76,51]

let numMap = num.map(function(ind) {
return `Carlos > ${ind}`
})

console.log(numMap)

//maneira 2
let num2 = [1,45,32,87,2,76,51]

let numMap2 = num2.map(val => val *2 )

console.log(numMap2)