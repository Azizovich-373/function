function prog(a,b) {
    let result = b * 100
    let result_two = result / a
    console.log('%',result_two);
}
let a = +prompt('Write A')
let b = +prompt('Write B')
prog(a,b)

function arr_sort(arr) {
    let sort = true 
    while (sort === true ){
        sort = false
        for (let i = 0; i < arr.length; i++) {
             if (arr[i] > arr[i+1]) {
                  let saved = arr[i]
                  arr[i] = arr [i+1]
                  arr[i+1] = saved
                  sort = true
             }          
        }
   }

}

arr_sort(1,2,3,4,5,6)
console.log(arr);
