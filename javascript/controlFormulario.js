console.log("funciona controlFormulario.js");
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

if (nombre != null && apellido != null && domicilio != null && localidad != null && barrio != null && codigoPostal != null && telefono != null && email != null && campo != null) {
    alert("Los campos han sido completados correctamente, se ejecutara el codigo")

} else {
    alert("Por favor, complete los campos correctamente, Gracias.");
}

let arrPAIS = ["Argentina", "Brazil", "Bolivia", "Chile", "Colombia", "Costa Rica", "El Salvador", "Paraguay", "Peru", "Puerto Rico", "Republica Dominicada", "Mejico", "Venezuela"];
var modelList = document.getElementById("Pais");
console.log(arrPAIS);

//for (let [index,valor] of arrPAIS.entries()){
//    const arrpais = new Option(valor, index);
//    modelList.options.add(arrPAIS);
//}

function validateFormNombre() {
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
function validateFormApellido() {
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
function validateFormDomicilio() {
    let domicilio = document.getElementById("domicilio");
    console.log(domicilio);
    console.log(domicilio.value);
    console.log(domicilio.value.lenght)
    console.log(typeof(domicilio.value));
    if (domicilio.value.lenght > 2) {
    campoDomicilio=true;
    document.getElementById("domicilio").classList.remove("error");
    validarFormulario();
    }else{
    campoDomicilio=false;
    document.getElementById("domicilio").classList.add("error"); 
    validarFormulario();
    }
}
function validateFormLocalidad() {
    let localidad = document.getElementById("localidad");
    console.log(localidad);
    console.log(localidad.value);
    console.log(localidad.value.lenght)
    console.log(typeof(localidad.value));
    if (localidad.value.lenght > 2) {
    campoLocalidad=true;
    document.getElementById("localidad").classList.remove("error");
    validarFormulario();
    }else{
    campoLocalidad=false;
    document.getElementById("localidad").classList.add("error"); 
    validarFormulario();
    }
}
function validateFormBarrio() {
    let barrio = document.getElementById("barrio");
    console.log(barrio);
    console.log(barrio.value);
    console.log(barrio.value.lenght)
    console.log(typeof(barrio.value));
    if (barrio.value.lenght > 2) {
    campoBarrio=true;
    document.getElementById("barrio").classList.remove("error");
    validarFormulario();
    }else{
    campoBarrio=false;
    document.getElementById("barrio").classList.add("error"); 
    validarFormulario();
    }
}
function validateFormCodigoPostal() {
    let codigoPostal = document.getElementById("codigoPostal");
    console.log(codigoPostal);
    console.log(codigoPostal.value);
    console.log(codigoPostal.value.lenght)
    console.log(typeof(codigoPostal.value));
    if (codigoPostal.value.lenght > 2) {
    campoCodigoPostal=true;
    document.getElementById("codigoPostal").classList.remove("error");
    validarFormulario();
    }else{
    campoCodigoPostal=false;
    document.getElementById("codigoPostal").classList.add("error"); 
    validarFormulario();
    }
}
function validateFormTelefono() {
    let telefono = document.getElementById("telefono");
    console.log(telefono);
    console.log(telefono.value);
    console.log(telefono.value.lenght)
    console.log(typeof(telefono.value));
    if (telefono.value.lenght > 2) {
    campoTelefono=true;
    document.getElementById("telefono").classList.remove("error");
    validarFormulario();
    }else{
    campoTelefono=false;
    document.getElementById("telefono").classList.add("error"); 
    validarFormulario();
    }
}
function validateFormEmail() {
    let email = document.getElementById("email");
    console.log(email);
    console.log(email.value);
    console.log(email.value.lenght)
    console.log(typeof(email.value));
    if (email.value.lenght > 2) {
    campoEmail=true;
    document.getElementById("email").classList.remove("error");
    validarFormulario();
    }else{
    campoEmail=false;
    document.getElementById("email").classList.add("error"); 
    validarFormulario();
    }
}
function validateFormNombre() {
    if (campoNombre){
        document.getElementById("botonSubmit").removeAttribute("disabled");
    }else{
        document.getElementById("botonSubmit").setAttribute("disables", "disabled");
    }
}
function validateFormApellido() {
    if (campoNombre && campoApellido){
        document.getElementById("botonSubmit").removeAttribute("disabled");
    }else{
        document.getElementById("botonSubmit").setAttribute("disables", "disabled");
    }
}
function validateFormDomicilio() {
    if (campoNombre && campoApellido && campoDomicilio){
        document.getElementById("botonSubmit").removeAttribute("disabled");
    }else{
        document.getElementById("botonSubmit").setAttribute("disables", "disabled");
    }
}
function validateFormLocalidad() {
    if (campoNombre && campoApellido && campoDomicilio && campoLocalidad){
        document.getElementById("botonSubmit").removeAttribute("disabled");
    }else{
        document.getElementById("botonSubmit").setAttribute("disables", "disabled");
    }
}
function validateFormBarrio() {
    if (campoNombre && campoApellido && campoDomicilio && campoLocalidad && campoBarrio){
        document.getElementById("botonSubmit").removeAttribute("disabled");
    }else{
        document.getElementById("botonSubmit").setAttribute("disables", "disabled");
    }
}
function validateFormCodigoPostal() {
    if (campoNombre && campoApellido && campoDomicilio && campoLocalidad && campoBarrio && codigoPostal){
        document.getElementById("botonSubmit").removeAttribute("disabled");
    }else{
        document.getElementById("botonSubmit").setAttribute("disables", "disabled");
    }
}
function validateFormTelefono() {
    if (campoNombre && campoApellido && campoDomicilio && campoLocalidad && campoBarrio && codigoPostal && campoTelefono){
        document.getElementById("botonSubmit").removeAttribute("disabled");
    }else{
        document.getElementById("botonSubmit").setAttribute("disables", "disabled");
    }
}
function validateFormEmail() {
    if (campoNombre && campoApellido && campoDomicilio && campoLocalidad && campoBarrio && codigoPostal && campoTelefono && campoEmail){
        document.getElementById("botonSubmit").removeAttribute("disabled");
    }else{
        document.getElementById("botonSubmit").setAttribute("disables", "disabled");
    }
}