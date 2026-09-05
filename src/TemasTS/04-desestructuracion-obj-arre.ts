 interface Reproductor{
 
    volumen:number,
    segundo:number,
    cancion:string,
    detalles,Detalles
}
 
interface Detalles{
    autor:string,
    anio:number
}
 
const reproductor:Reproductor={
    volumen: 90,
    segundo: 36,
    cancion: "Deja Vu",
    detalles:{
        autor: "Santa RM",
        anio: 2024
    }
}
 
console.log(`El Volumen actual es:`, reproductor.volumen)
console.log(`El Segundo actual es:`, reproductor.segundo)
console.log(`La Cancion actual es:`, reproductor.cancion)
console.log(`El Autor es:`, reproductor.detalles.autor)
console.log(`El Año es :`, reproductor.detalles.anio)
 
//Destructuracion de arreglo
const {volumen,segundo,cancion,detalles}=reproductor;
const {autor,anio}=detalles;
 
console.log(`El Volumen actual es:`, volumen)
console.log(`El Segundo actual es:`, segundo)
console.log(`La Cancion actual es:`, cancion)
console.log(`El Autor es:`, autor)
console.log(`El Año es :`, anio)
 
const dbz:stirng[]=["Goku","Gohan","Vegetta", "Piccolo"];
const [p1,p2,p3]=dbz
console.log("Personaje 1:".p1);
console.log("Personaje 2:".p2);
console.log("Personaje 3:".p3);