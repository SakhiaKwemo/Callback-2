const sayHello2 = function(callback) {
    console.log(`Hello I am the first function`)

    callback()
}

sayHello2(function(){
    console.log(`I am the anonymous function`)
    let x = 28
    let y = 20
    console.log(x+y)
})