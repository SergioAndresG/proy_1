const math = {};

//Define la funcion sumar (add)
function add(a,b) {
    return a + b;
}

//Defiene la funcion restar(substract)
function substract(a,b) {
    return a - b;
}

//Defien la funcion multiplicar(multiply)
function multiply(a,b) {
    return a * b;
}

//Defien la funcion dividir(divide)
function divide(a,b) {
    if (b == 0) {
        return "Error: no se puede dividir entre cero"
    } else {
        return a / b;
    }

}

math.add = add;
math.substract = substract;
math.multiply = multiply;
math.divide = divide;

module.exports = math;
