//esta es una funcion que suma dos numeros. 
const sum = (a,b) => {
    return a + b
}
// solo un registro en consola para nosotros.
console.log(sum(7,3))
// ejercicio 11: La primera prueba //
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}
// euro a dollar://
const fromEuroToDollar=(valueInEuro) => {
    let dollar = (valueInEuro*1.2)
    return(dollar)
}
console.log(fromEuroToDollar(100))
//dollar a yen://
const fromDollarToYen = (valueInDollar) => {
    let euro = (valueInDollar/1.2)
    let yen = (euro * oneEuroIs.JPY)
    return(yen)
}
console.log(fromDollarToYen(100))
//yen to pound://
const fromYenToPound = (valueInYen) => {
    let euro = (valueInYen/127.9)
    let pound = (euro * oneEuroIs.GBP)
    return (pound)
}
console.log(fromYenToPound(100))
// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)
module.exports = { sum, fromDollarToYen, fromYenToPound, fromEuroToDollar };