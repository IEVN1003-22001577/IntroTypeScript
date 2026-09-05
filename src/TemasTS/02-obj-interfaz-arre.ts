interface Alumno{
    nombre:string;
    apellido:string;
    edad:number;
    email:string;
    nota?:number;
}

const alumno:Alumno={
    nombre:"Mario",
    apellido:'Martinez',
    edad:22,
    email:'martinez@gmail.com'
}
console.table(alumno)

let mascotas=['perro,'gato,'perico']
console.log(mascotas)

mascotas[1]='nuevo gato'
mascotas.push('leon')
console.log(mascotas)

let tem:(number|string)[]=[]

tem.push(1)
tem.push('once')
console.log(tem)