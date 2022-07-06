console.log("funciona controlFormulario vieja");
const valores = location.search;
//Mostramos los valores en consola:
console.log(valores);
var campoNombre = false;
var campoApellido = true;
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
var campo = urlParams.get('campo');
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

let arrayPaises = ["Argentina", "Brazil", "Bolivia", "Chile", "Colombia", "Costa Rica", "El Salvador", "Paraguay", "Peru", "Puerto Rico", "Republica Dominicada", "Mejico", "Venezuela"];
var modelList = document.getElementById("pais");
console.log(modelList);
var i;

for (let [index, valor] of arrayPaises.entries()) {
    var pais = new Option(valor, index);
    modelList.options.add(pais);
}


let arrayTarea = ["Diseño", "Redaccion", "Composicion", "Edicion"];
var modelList = document.getElementById("tarea");
console.log(modelList);
var i;

for (let [index, valor] of arrayTarea.entries()) {
    var tarea = new Option(valor, index);
    modelList.options.add(tarea);
}

//ACA SE VIENE LA COSITA!!
let arrayDiseño = ["Grafico", "Imagen", "Marcas", "Multimedial"]


function validateFormContacto() {
    let nombre = document.getElementById("nombre");
    console.log(nombre);
    console.log(nombre.value.length);
    if (nombre.value.length > 2) {
        //el tamaño de nombre es correcto
        campoNombre = true;
        document.getElementById("nombre").classList.remove("error");
        validarFormulario();
    } else {
        //el tamaño de nombre es falso
        campoNombre = false;
        document.getElementById("nombre").classList.add("error");
        validarFormulario();
    }
}
function validateFormContactoApellido() {
    let nombre = document.getElementById("apellido");
    if (nombre.value.length > 2) {
        campoApellido = true;
        document.getElementById("apellido").classList.remove("error");
        validarFormulario();
    } else {
        campoApellido = false;
        document.getElementById("apellido").classList.add("error");
        validarFormulario();
    }
}
function validateFormContactoDomicilio() {
    let nombre = document.getElementById("domicilio");
    if (nombre.value.length > 2) {
        campoDomicilio = true;
        document.getElementById("domicilio").classList.remove("error");
        validarFormulario();
    } else {
        campoDomicilio = false;
        document.getElementById("domicilio").classList.add("error");
        validarFormulario();
    }
}
function validateFormContactoLocalidad() {
    let nombre = document.getElementById("localidad");
    if (nombre.value.length > 2) {
        campoLocalidad = true;
        document.getElementById("localidad").classList.remove("error");
        validarFormulario();
    } else {
        campoLocalidad = false;
        document.getElementById("localidad").classList.add("error");
        validarFormulario();
    }
}
function validateFormContactoBarrio() {
    let nombre = document.getElementById("barrio");
    if (nombre.value.length > 2) {
        campoBarrio = true;
        document.getElementById("barrio").classList.remove("error");
        validarFormulario();
    } else {
        campoBarrio = false;
        document.getElementById("barrio").classList.add("error");
        validarFormulario();
    }
}
function validateFormContactoCodigoPostal() {
    let nombre = document.getElementById("codigoPostal");
    if (nombre.value.length > 2) {
        campoCodigoPostal = true;
        document.getElementById("codigoPostal").classList.remove("error");
        validarFormulario();
    } else {
        campoCodigoPostal = false;
        document.getElementById("codigoPostal").classList.add("error");
        validarFormulario();
    }
}
function validateFormContactoTelefono() {
    let nombre = document.getElementById("telefono");
    if (nombre.value.length > 2) {
        campoTelefono = true;
        document.getElementById("telefono").classList.remove("error");
        validarFormulario();
    } else {
        campoTelefono = false;
        document.getElementById("telefono").classList.add("error");
        validarFormulario();
    }
}
function validateFormContactoEmail() {
    let nombre = document.getElementById("email");
    if (nombre.value.length > 2) {
        campoEmail = true;
        document.getElementById("email").classList.remove("error");
        validarFormulario();
    } else {
        campoEmail = false;
        document.getElementById("email").classList.add("error");
        validarFormulario();
    }
}
function validarFormulario() {
    if (campoNombre && campoApellido && campoDomicilio && campoLocalidad && campoBarrio && codigoPostal && campoTelefono && campoEmail) {
        document.getElementById("botonSubmit").removeAttribute("disabled");
    } else {
        document.getElementById("botonSubmit").setAttribute("disables", "disabled");
    }
}

