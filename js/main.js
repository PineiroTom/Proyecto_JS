//Calcular nota final promedio de alumnos ingresados.

let NotasTotales = 0;
let cantNotas = 0;
let notaPromedioFinal = 0;

let Alumno = prompt("ingrese el nombre de un alumno");
if (Alumno != "Nadie"){
    let notas = Number(prompt("Ingrese la nota de una materia"));
    while (notas != 0){
        cantNotas ++;
        NotasTotales += notas;
        notas = Number(prompt("Ingrese la nota de una materia"));
    }
}

alert(notaPromedioFinal = NotasTotales / cantNotas);