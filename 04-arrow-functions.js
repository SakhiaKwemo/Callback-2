const sayHello2 = function(callback) {
    console.log(`Hello I am the first function`)

    callback("Sakhia")
}

// sayHello2(function(){
//     console.log(`I am the anonymous function`)
//     let x = 28
//     let y = 20
//     console.log(x+y)
// })

const sayHello3 = function (name) {
    console.log(`Hi: ${name}`)
}

sayHello2(sayHello3)

//1. If the arrow function has 1 paramter you can remove the parentheses

// sayHello2(name => {
//     console.log(`I am the anonymous function and my name is ${name}`)
// })

//2. If your function can be written on one line then you can remove the curly brackets

//3. 
// 1) Non-Anonymous + Regular Function
const sayHello4 = function (name) {
    console.log(`Hi: ${name}`)
}
sayHello2(sayHello4)

// 2) Non-Anonymous + Arrow Function
const sayHello5 = name => console.log(`Hi: ${name}`)
sayHello2(sayHello5)

// 3) Anonymous + Regular Function
sayHello2(function(name) {
    console.log(`I am the anonymous function and my name is ${name}`)
})

// 4) Anonymous + Arrow Function
sayHello2(name => console.log(`Hi: ${name}`))