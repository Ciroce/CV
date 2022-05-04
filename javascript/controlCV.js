console.log("funciona controlCV.js");
const arrayMisEstudios =[
    "Direccion de cine", 
    "Guion de cine", 
    "Diseñador multimedial", 
    "Direccion de fotografia", 
    "Redaccion publicitaria", 
    "Escritor compositor", 
    "Musico", 
    "Guitarrista", 
    "Cantante",
];
let estudiosLista = document.getElementById("estudios");
console.log(estudiosLista);
for(let valor of arrayMisEstudios){
    estudiosLista.insertAdjacentHTML("afterbegin",'<li>'+ valor.trabajo +" < "+ valor.link +'</li>');
}

//const arrayMisEstudios = {
//ID: 
//Lugar:
//Tarea:
//Epocas:
//}