let resultado = sumar(1,2);
const resultadoResta = resta(1,2);
mostrarEnConsola(resultado)
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
function mostrarEnConsola(valor){
    console.log(valor);
}