let classmates = ["철수", "영희", "훈이"]
// undefined
console.log(classmates)
// (3) ['철수', '영희', '훈이']
console.log(classmates[0])
// 철수
console.log(classmates[1])
// 영희
console.log(classmates[2])
// 훈이
console.log(classmates.includes("훈이"))
// true
console.log(classmates.includes("맹구"))
// false
console.log(classmates.length)
// 3
console.log(classmates.push("맹구"))
// 4
console.log(classmates.includes("맹구"))
// true
console.log(classmates.length)
// 4
console.log(classmates.pop())
// 맹구
console.log(classmates.length)
// 3


let developer = ["열정", "끈기", "꾸준함", "집요함", "문제해결능력"]
// undefined
developer[4]
// '문제해결능력'

let dream = ["커리어점프", "성공", "할수있다"]

let result = developer.concat(dream)

console.log(result)