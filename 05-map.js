const array1 = [1, 4, 9, 16];

// Pass a function to map
// const map1 = array1.map(function(x) {
//     return x * 2
// });


const mapFunction = (arrayGiven, callback) => {
/* Write Code Here */
//1. Initialize empty array called arrayReturn
let arrayReturn = []
//2. loop through array given in paramters called arrayGiven
for(let i =0; i<arrayGiven.length; i++){
    //3. run callback function for each element inside arrayGiven
    arrayReturn[i] = callback(arrayGiven[i])
    //4. Store callback return inside arrayReturn at the proper position
}
//5. return arrayReturn
return arrayReturn
}


const map1 = mapFunction(array1,function(x) {
    return x * 2
})

console.log(map1)