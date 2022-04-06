let resultadoSuma = sumar(1,2);
let resultadoResta = resta(3,2);

mostrarConsola(resultadoSuma);
mostrarConsola(resultadoResta);

function sumar(num1,num2){
    return num1 + num2;
}
function resta(num1,num2){
    let resultado =num1 - num2;
    return resultado;
}
function mostrarConsola(valor){
    console.log(valor);
}