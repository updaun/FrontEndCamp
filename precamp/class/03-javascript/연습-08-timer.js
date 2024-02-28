// let time = 10
// undefined
// setInterval(function() {
//     if (time >= 0) {
//         console.log(time)
//         time = time -1
//     }
// }, 1000)
// 39
// VM3347:3 10
// VM3347:3 9
// VM3347:3 8
// VM3347:3 7
// VM3347:3 6
// VM3347:3 5
// VM3347:3 4
// VM3347:3 3
// VM3347:3 2
// VM3347:3 1
// VM3347:3 0


let time = 180
// undefined
setInterval(function() {
    if (time >= 0) {
        let min = Math.floor(time / 60)
        let sec = String((time%60)).padStart(2, "0")
        console.log(min + ":" + sec)
        time = time -1
    }
}, 1000)
// 35
// VM4269:5 3:00
// VM4269:5 2:59
// VM4269:5 2:58
// VM4269:5 2:57
// VM4269:5 2:56