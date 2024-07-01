//Calcular nota final promedio de alumnos ingresados.

let NotasTotales = 0;
let cantNotas = 0;
let notaPromedioFinal = 0;

// declaracion funciones

const objetoBoletin = {
    nombreMateria: "",
    notaMateria: 0,
};

const vectorBoletin = [objetoBoletin];

const objetoAlumno = {
    nombre: "",
    boletin: vectorBoletin,
};

// function leerNotas(notas){
//     while (notas != 0){
//         vectorNotas.push(notas);
//         cantNotas ++;
//         NotasTotales += notas;
//         notas = Number(prompt("Ingrese la nota de una materia"));
//     }
// }

// function calcularPromedio(){
//     let Alumno = prompt("ingrese el nombre de un alumno");
//     if (Alumno != "Nadie"){
//         objetoAlumno.nombre = Alumno;
//         let notas = Number(prompt("Ingrese la nota de una materia"));
//         leerNotas(notas);
//     }
//     objetoAlumno.notas = vectorNotas;
// }

function ingresarDatosBoletin (materia, nota){
    objetoBoletin.nombreMateria = materia;
    objetoBoletin.notaMateria = nota;
}

// function mostrarDatosBoletin (vectorBoletin,i){
//     alert("Nombre de la materia: " + vectorBoletin[i].nombreMateria + " " + "Nota de la materia: " + vectorBoletin[i].notaMateria);
// };

// function recorrerBoletin (){
//     for (let i = 0; i < vectorBoletin.length; i++){
//         console.log("Nombre de la materia: " + vectorBoletin[i].nombreMateria + " " + "Nota de la materia: " + vectorBoletin[i].notaMateria);
//     }; 
// };

// function recorrerBoletin() {
//     for (let i = 0; i < vectorBoletin.length; i++) {
//         alert(`Nombre de la materia: ${vectorBoletin[i].nombreMateria} - Nota: ${vectorBoletin[i].notaMateria}`);
//     }
// }

function recorrerBoletin() {
    let mensaje = "";
    for (let i = 0; i < vectorBoletin.length; i++) {
        mensaje += `Nombre de la materia: ${vectorBoletin[i].nombreMateria} - Nota: ${vectorBoletin[i].notaMateria}\n`;
    }
    alert(mensaje);
}
// llamada de funciones
//calcularPromedio();

// for (let i=0; i < vectorNotas.length; i++){
//     console.log(objetoAlumno.notas[i]);
// }

// fin algoritmos y llamados 

const input01 = document.getElementById("floatingInputNombre");
const input02 = document.getElementById("floatingInputMateria");
const input03 = document.getElementById("floatingInputNota");

const btnEnviar = document.getElementById("btnEnviar");

btnEnviar.addEventListener("click", () => {
    const nombre = input01.value;
    const materia = input02.value;
    const nota = input03.value;
    if (input01.value === "" || input02.value === "" || input03.value === "Elegir la nota correspondiente"){
        alert("Hay campos que no fueron ingresados");
    }else{
        objetoAlumno.nombre = nombre;
        const nuevoBoletin = {
            nombreMateria: materia,
            notaMateria: nota,
        };
        vectorBoletin.push(nuevoBoletin);
    }
});

const btnTerminar = document.getElementById("btnTerminar");

btnTerminar.addEventListener("click", () => {
    recorrerBoletin();
});
