//console.log("controlFomulario.js funciona");
const valores = location.search;
//Mostramos los valores en consola:
console.log(valores);
var campoNombre=false;
var campoApellido=true;
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

if (nombre != null && apellido != null && domicilio != null && localidad != null && barrio != null && codigoPostal != null && telefono != null && email != null && campo != null) {
    alert("Los campos han sido completados correctamente, se ejecutara el codigo")

} else {
    alert("Por favor, complete los campos correctamente, Gracias.");
}
function validateFormContacto() {
    let nombre = document.getElementById("nombre");
    console.log(nombre);
    console.log(nombre.value);
    console.log(nombre.value.lenght)
    console.log(typeof(nombre.value));
    if (nombre.value.lenght > 2) {
    campoNombre=true;
    document.getElementById("nombre").classList.remove("error");
    validarFormulario();
    }else{
    campoNombre=false;
    document.getElementById("nombre").classList.add("error"); 
    validarFormulario();
    }
}
function validateFormContactoApellido() {
    let apellido = document.getElementById("apellido");
    console.log(apellido);
    console.log(apellido.value);
    console.log(apellido.value.lenght)
    console.log(typeof(apellido.value));
    if (apellido.value.lenght > 2) {
    campoApellido=true;
    document.getElementById("apellido").classList.remove("error");
    validarFormulario();
    }else{
    campoApellido=false;
    document.getElementById("apellido").classList.add("error"); 
    validarFormulario();
    }
}
function validateFormContacto() {
    if (campoNombre){
        document.getElementById("botonSubmit").removeAttribute("disabled");
    }else{
        document.getElementById("botonSubmit").setAttribute("disables", "disabled");
    }
}
function validateFormContactoApellido() {
    if (campoNombre && campoApellido){
        document.getElementById("botonSubmit").removeAttribute("disabled");
    }else{
        document.getElementById("botonSubmit").setAttribute("disables", "disabled");
    }
}
