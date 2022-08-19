console.log("funciona controlCV.js");
const arrayMisEstudios = [
    "Direccion de cine",
    "Guion de cine",
    "Diseñador multimedial",
    "Direccion de fotografia",
    "Redaccion publicitaria",
    "Escritor, compositor",
    "Musico, Guitarrista, Cantante",
    "Programador javascript",
    "Diseñador de paginas Web",
    "Diseñador Grafico",
];
class ItemLista {
    constructor(estudioParametro, urlParametro, nombreLinkParametro) {
        this.estudio = estudioParametro;
        this.url = urlParametro;
        this.nombreLink = nombreLinkParametro;
    }
    elementoNuevo() {
        let elementoNuevo = "<li>" + this.estudio + " <a href='" + this.url + "'>" + this.nombreLink + "</a> </li>";
        return elementoNuevo;
    }
}
let itemLista = new ItemLista(arrayMisEstudios[0], "Direccion de cine", "", "Universidad de Palermo"); //(let: variable - = : asigna - itemList :crea objeto basado en la CLASE - array : parametros)
let itemLista1 = new ItemLista(arrayMisEstudios[1], "Guion de cine", "", "Universidad de Palermo");
let itemLista2 = new ItemLista(arrayMisEstudios[2], "Diseñador multimedial", "", "Universidad de Palermo");
let itemLista3 = new ItemLista(arrayMisEstudios[3], "Direccion de fotografia", "", "Universidad de Palermo");
let itemLista4 = new ItemLista(arrayMisEstudios[4], "Redaccion publicitaria", "", "Brothers AD");
let itemLista5 = new ItemLista(arrayMisEstudios[5], "Escritor compositor", "", "");
let itemLista6 = new ItemLista(arrayMisEstudios[6], "Musico, Guitarrista, Cantante", "", "");
let itemLista7 = new ItemLista(arrayMisEstudios[7], "Programador Javascript", "", "CFP 408 - Moron");
let itemLista8 = new ItemLista(arrayMisEstudios[8], "Diseñador de pagina web", "", "Universidad de Palermo");
let itemLista9 = new ItemLista(arrayMisEstudios[9], "Diseñador Grafico", "", "Universidad de palermo");
console.log(itemLista);

arrayObjetosMisEstudios = []
arrayObjetosMisEstudios.push(itemLista);
arrayObjetosMisEstudios.push(itemLista1);
arrayObjetosMisEstudios.push(itemLista2);
arrayObjetosMisEstudios.push(itemLista3);
arrayObjetosMisEstudios.push(itemLista4);
arrayObjetosMisEstudios.push(itemLista5);
arrayObjetosMisEstudios.push(itemLista6);
arrayObjetosMisEstudios.push(itemLista7);
arrayObjetosMisEstudios.push(itemLista8);
arrayObjetosMisEstudios.push(itemLista9);
console.log(arrayObjetosMisEstudios)
let estudiosLista = document.getElementById("estudios");
for (let valor of arrayObjetosMisEstudios) {
    elementoNuevo = valor.elementoNuevo();
    estudiosLista.insertAdjacentHTML("beforeend", elementoNuevo);
}
const arrayTrayectoria = [
    "(2021 - Actualidad) Diseño y edicion de video <b>@ Estudio Dale Dale!</b>",
    "(2000 - Actualidad) Vocalista <b>@ Running Potatoes</b>",
    "(2009 - Actualidad) Vocalista y trompetista <b>@ la FAF</b>",
    "(2011 - Actualidad) Vocalista <b>@ Alto Curri</b>",
    "(2016 - Actualidad) Guitarrisra y cantante <b>@ XttBN!- Portate Bien!</b>",
    "(2019 - Actualidad) Guitarrista y cantante <b>@ XttML! - Portate Mal!</b>",
    "(2020 - Actualidad) Cantante <b>@ Sorete con choclo</b>",
    "(2021 - Actualidad) Programador, compositor, vocalista y guitarrista <b>@ Sincericiro</b>",
];
class Item2Lista {
    constructor(trayectoriaParametro, urlParametro, nombreLinkParametro) {
        this.trayectoria = trayectoriaParametro;
        this.url = urlParametro;
        this.nombreLink = nombreLinkParametro;
    }
    elemento2Nuevo() {
        let elemento2Nuevo = "<li>" + this.trayectoria + " <a href='" + this.url + "'>" + this.nombreLink + "</a> </li>";
        return elemento2Nuevo;
    }
}
let item2Lista = new Item2Lista(arrayTrayectoria[0], "Diseño, edicion de video, programacios, diseño web, grabacion", "https://www.facebook.com/EstudioDaleDale/", "Estudio Dale Dale!"); //(let: variable - = : asigna - itemList :crea objeto basado en la CLASE - array : parametros)
let item2Lista1 = new Item2Lista(arrayTrayectoria[1], "Vocalista", "https://open.spotify.com/artist/51ZG6y4rGKtziqOoKbVodi?si=2UPFIBT7R9Wya0FAPuqpFw", "Running Potatoes");
let item2Lista2 = new Item2Lista(arrayTrayectoria[2], "Vocalista y trompetista", "https://open.spotify.com/artist/7xxVSQHR0fmsrci8GWDdF4?si=VDa8YH22Qz6n49tySUyEIw", "Federacion Afrancesada de fonk");
let item2Lista3 = new Item2Lista(arrayTrayectoria[3], "Vocalista", "https://www.youtube.com/watch?v=DGXfGBIroII", "Alto Curri");
let item2Lista4 = new Item2Lista(arrayTrayectoria[4], "Guitarrista y cantante", "https://open.spotify.com/artist/1F4YjsfIuH113cuVgNioRQ?si=_Ro04kfESoeT-zDlfI6ECA", "Portate bien!");
let item2Lista5 = new Item2Lista(arrayTrayectoria[5], "Guitarrista y cantante", "https://open.spotify.com/artist/0m2FICDUU7bQK2AB79eOON?si=IKObickVSZuXy__y0Q61Gg", "Portate Mal!");
let item2Lista6 = new Item2Lista(arrayTrayectoria[6], "Cantante", "https://open.spotify.com/artist/6nfZhhxAhYCCwm7TiRAFxC?si=ZIyRjoDpRZu5-nAWES2iaQ", "Sorete con choclo");
let item2Lista7 = new Item2Lista(arrayTrayectoria[7], "Programador, compositor vocalista y guitarrista", "https://open.spotify.com/artist/680M9gdL8TstXvOJiFdiC8?si=Ii8osk9iTyCm2Ri11qdngQ", "Sincericiro");
console.log(itemLista);

arrayObjetosTrayectoria = []
arrayObjetosTrayectoria.push(item2Lista);
arrayObjetosTrayectoria.push(item2Lista1);
arrayObjetosTrayectoria.push(item2Lista2);
arrayObjetosTrayectoria.push(item2Lista3);
arrayObjetosTrayectoria.push(item2Lista4);
arrayObjetosTrayectoria.push(item2Lista5);
arrayObjetosTrayectoria.push(item2Lista6);
arrayObjetosTrayectoria.push(item2Lista7);
console.log(arrayObjetosTrayectoria)
let trayectoriaLista = document.getElementById("trayectoria");
for (let valor of arrayObjetosTrayectoria) {
    elementoNuevo2 = valor.elemento2Nuevo();
    trayectoriaLista.insertAdjacentHTML("beforeend", elementoNuevo2);
}
// fetch("https://api.github.com/users/Ciroce/repos")
// .then(function(respose){
//     respose.json()
// })
// .then(function(json){
//     console.log(json)
//     for(const repo of json)
//     let elementoRepoNuevo = document.getElementById("repo");
//     elementoRepoNuevo(repoName,svn_url,null,updated_at)
//     elementoRepoNuevo=valor.elementoRepo2();
//     repoLista.insertAdjacentHTML("beforeend",elementoRepo2);
// })
// .catch(function(){
//     console.log("no funciona")
// })