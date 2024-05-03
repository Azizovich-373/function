function prog(a,b) {
    let result = b * 100
    let result_two = result / a
    console.log('%',result_two);
}
let a = +prompt('Write A')
let b = +prompt('Write B')
prog(a,b)

// function max(arr) {
//     let maxy = arr[0]
//     for (let i = 0; i < arr.length; i++) {
//         console.log(i);
//         if (arr[i] > maxy) {
//             maxy = arr[i]
//         }
//     }
//     return maxy
// }
// console.log(max(1,33,4,2,4,7,4,99,66,33,4555,2222))