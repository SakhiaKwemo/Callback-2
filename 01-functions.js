//1. Regular Function Decleration
// testFunc()

// function testFunc() {
//     word = "Sakhia"
//     console.log(word)
// }




//2. Declare this function as an expression
const testFunc2 = function (name) {
    console.log(`Hello my name is: ${name}`)
    let x = name 
    let y  = "Hello " + x
    return y
}

// testFunc2('Sakhia')

const vet = {
    dog: 3, 
    cat: 5, 
    parrot: 1
}

vet.hamster = 6

// console.log(vet)

// testFunc2.namekey = "Brad"

// vet()

// testFunc2("Brad")

//4. Store Functions in Arrays

let array = [1,2,3]
array.push(testFunc2("random name"))
console.log(array)

// const givemeResult = testFunc2("Brad")
// console.log(givemeResult)

// array[3]("Brad")