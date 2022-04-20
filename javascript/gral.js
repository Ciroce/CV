let resultadoSuma = sumar(1,2);
let resultadoResta = resta(3,2);

<<<<<<< Updated upstream
mostrarConsola(resultadoSuma);
mostrarConsola(resultadoResta);

=======
mostrarEnConsola(resultadoSuma)
mostrarEnConsola(resultadoResta)
function mostrarEnConsola(valor){
    console.log(valor);
}
>>>>>>> Stashed changes
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