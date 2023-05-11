//Primitive Types as Parameters
const sayHello = function(name) {
    console.log(`Hello: ${name}`)
}

sayHello("Sakhia")

//Object Types "Arrays" as parameters
const average = function(array) {
    let total = 0
    for(const number of array){
        total += number
    }
    return total/array.length
}

const numberArray = [1,2,3,4,5]

const avg = average(numberArray)
console.log(avg)

//Object Types "Functions" as parameters
const sayHello2 = function(callback, name) {
    console.log(`Hello my name is: ${name}`)
    callback()
}

sayHello2(sayHello3)



