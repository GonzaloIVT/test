// importar la función sum del archivo app.js
const { sum } = require('./app.js');
const { fromEuroToDollar } = require('./app.js')
const { fromDollarToYen } = require('./app.js')
const { fromYenToPound } = require('./app.js')

// comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    //dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});
//importo la funcion desde el archivo app.js, segun lo especificado en el package.json//const { fromEuroToDollar } = require('./app.js')const { fromDollarToYen } = require('./app.js')const { fromYenToPound } = require('./app.js')
test("One euro should be 1.2 dollars",() => {    
    let total= fromEuroToDollar(1)
        expect(total).toBe(1.2);});
test("One dollar  should be 106 yenes",() => { 
       let total= fromDollarToYen(1)    
       expect(total).toBe(106.58333333333334);});
test("100 yen should be 0.62 pounds",() => {   
     let total= fromYenToPound(100)   
      expect(total).toBe(0.6254886630179828);})