let resultadoSuma = sumar(1,2);
let resultadoResta = resta(3,2);

mostrarEnConsola(resultadoSuma)
mostrarEnConsola(resultadoResta)
function mostrarEnConsola(valor){
    console.log(valor);
}
function sumar(num1,num2){
    return num1 + num2;
}
function resta(num1,num2){
    let resultado = num1 - num2;
    return resultado;
}
function mostrarConsola(valor){
    console.log(valor);
}
let iterable =[36, 47, 534];

for (let value of iterable) {
    value = + 32;
    console.log(value);
}