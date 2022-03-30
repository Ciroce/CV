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
var apellido = urlParams.get('apellido');
var domicilio = urlParams.get('domicilio');
var localidad = urlParams.get('localidad');
var barrio = urlParams.get('barrio');
var codigoPostal = urlParams.get('codigoPostal');
var telefono = urlParams.get('telefono');
var email = urlParams.get('email');
var campo =urlParams.get('campo');
console.log(nombre);
console.log(apellido);
console.log(domicilio);
console.log(localidad);
console.log(barrio);
console.log(codigoPostal);
console.log(telefono);
console.log(email);
console.log(campo);

if (nombre != null &&apellido != null &&domicilio != null &&localidad != null &&barrio != null &&codigoPostal != null &&telefono != null &&email != null &&campo != null) {
    alert("Los campos han sido completados correctamente se ejecutara el codigo")

} else {
    alert("Los campos no han sido completados correctamente");
}