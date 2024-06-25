//Calcular nota final promedio de alumnos ingresados.

let NotasTotales = 0;
let cantNotas = 0;
let notaPromedioFinal = 0;


// declaracion estructuras y funciones
const vectorNotas = [];
const objetoAlumno = {
    nombre: "",
    notas: vectorNotas,
};

function leerNotas(notas){
    while (notas != 0){
        vectorNotas.push(notas);
        cantNotas ++;
        NotasTotales += notas;
        notas = Number(prompt("Ingrese la nota de una materia"));
    }
}

function calcularPromedio(){
    let Alumno = prompt("ingrese el nombre de un alumno");
    if (Alumno != "Nadie"){
        objetoAlumno.nombre = Alumno;
        let notas = Number(prompt("Ingrese la nota de una materia"));
        leerNotas(notas);
    }
    objetoAlumno.notas = vectorNotas;
}


// llamada de funciones
calcularPromedio();

console.log(objetoAlumno.nombre);

for (let i=0; i < vectorNotas.length; i++){
    console.log(objetoAlumno.notas[i]);
}


alert(notaPromedioFinal = NotasTotales / cantNotas);