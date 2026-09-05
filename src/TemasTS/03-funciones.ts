    function sumar(a:number,b:number):number {
        let res:number = a+b;
       
        return res;
        //console.log(res)
    }
 
    //console.log(sumar(5,5))
 
    const resultado=sumar(3,5)
    console.log(resultado)
 
//<------------------------------------------------------------------------------------->
 
function multiplicar(n1:number=2, base?:number, n2:number=4):number{
 
    return n1*n2*base;
}
 
console.log(multiplicar())
console.log(multiplicar(3))
console.log(multiplicar(2,3))
 
interface Mascotas {
    nombre:string,
    edad:number,
    raza:string,
    sexo?:string,
    vacunado:boolean,
    mostrarEdad:()=>void
}
 
function mostrarMascota(mascota:Mascotas, x:number):void{
    mascota.edad+=x;
    console.log(mascota)
    console.log(mascota.mostrarEdad())
}
 
const nuevaMascota:Mascotas={
    nombre: "Osito",
    edad: 5,
    raza: "Panda",
    vacunado: true,
    mostrarEdad(){
        console.log(`La edad de ${this.nombre} es ${this.edad}`)
    }
}
 
mostrarMascota(nuevaMascota, 3)