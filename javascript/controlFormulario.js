//console.log("controlFomulario.js funciona");
const valores = window.location.search;

//Mostramos los valores en consola:
console.log(valores);

//Resultado:
//nombre=algo&telefono-algo&correo=algo%40algo&campo=algo

//Creamos la instancia
const urlParams = new URLSearchParams(valores);

//Accedemos a los valores
var nombre = urlParams.get('nombre');
var telefono = urlParams.get('telefono');
var correo = urlParams.get('correo');
var campo =urlParams.get('campo');
console.log(nombre);
console.log(telefono);
console.log(correo);
console.log(campo);