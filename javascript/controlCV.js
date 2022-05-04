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
class ItemLista {
    constructor(estudioParametro , urlParametro , nombreLinkParametro){
        this.estudio=estudioParametro;
        this.url=urlParametro;
        this.nombreLink=nombreLinkParametro;
    }
    elementoNuevo(){
        let elementoNuevo = "<li>" + this.estudio + " <a href='" + this.url +"'>" + this.nombreLink+ "</a> </li>";
        return elementoNuevo;
    }
}
let itemLista = new ItemLista(arrayMisEstudios[0], "Direccion de cine", "-", "Diseñador multimedial - UP"); //(let: variable - = : asigna - itemList :crea objeto basado en la CLASE - array : parametros)
let itemLista1 = new ItemLista(arrayMisEstudios[1], "Guion de cine", "-", "Diseñador multimedial - UP"); 
let itemLista2 = new ItemLista(arrayMisEstudios[2], "Diseñador multimedial", "-", "Diseñador multimedial - UP");
let itemLista3 = new ItemLista(arrayMisEstudios[3], "Direccion de fotografia", "-", "Diseñador multimedial - UP");
let itemLista4 = new ItemLista(arrayMisEstudios[4], "Redaccion publicitaria", "-", "BROTHER AD");
let itemLista5 = new ItemLista(arrayMisEstudios[5], "Escritor compositor", "-", "Lavie'");
let itemLista6 = new ItemLista(arrayMisEstudios[6], "Musico", "-", "Lavie'");
let itemLista7 = new ItemLista(arrayMisEstudios[7], "Guitarrista", "-", "Lavie'");
let itemLista8 = new ItemLista(arrayMisEstudios[8], "Cantante", "-", "Lavie'");
console.log(itemLista);

arrayObjetosMisEstudios=[]
arrayObjetosMisEstudios.push(itemLista);
arrayObjetosMisEstudios.push(itemLista1);
arrayObjetosMisEstudios.push(itemLista2);
arrayObjetosMisEstudios.push(itemLista3);
arrayObjetosMisEstudios.push(itemLista4);
arrayObjetosMisEstudios.push(itemLista5);
arrayObjetosMisEstudios.push(itemLista6);
arrayObjetosMisEstudios.push(itemLista7);
arrayObjetosMisEstudios.push(itemLista8);
console.log(arrayObjetosMisEstudios)
let estudiosLista = document.getElementById("estudios");
for(let valor of arrayObjetosMisEstudios){
    elementoNuevo=valor.elementoNuevo();
    estudiosLista.insertAdjacentHTML("afterbegin",elementoNuevo);
}

//const arrayMisEstudios = {
//ID: 
//Lugar:
//Tarea:
//Epocas:
//}