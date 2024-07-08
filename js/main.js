//Calcular nota final promedio de alumnos ingresados.

let NotasTotales = 0;
let cantNotas = 0;
let notaPromedioFinal = 0;

// declaracion funciones

const objetoBoletin = {
    nombreMateria: "",
    notaMateria: 0,
};

const vectorBoletin = [];

const objetoAlumno = {
    nombre: "",
    boletin: vectorBoletin,
};

function calcularPromedio(){
    for (let i = 0; i < vectorBoletin.length; i++){
        NotasTotales += parseFloat(vectorBoletin[i].notaMateria);
        cantNotas ++;
    }
    notaPromedioFinal = (NotasTotales / cantNotas);
    alert("La nota promedio final es " + notaPromedioFinal);
};

function ordenarNotas (){
    vectorBoletin.sort((a, b) => a.notaMateria - b.notaMateria);
};

// function recorrerBoletin() {
//     let mensaje = "";
//     for (let i = 0; i < vectorBoletin.length; i++) {
//         mensaje += `para la materia: ${vectorBoletin[i].nombreMateria} - su nota es: ${vectorBoletin[i].notaMateria}\n`;
//     }
//     alert("Para el alumno " + objetoAlumno.nombre + " las notas de sus materias son: " + mensaje);
// };

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
        alert("Se agrego una nueva nota al boletin!");
    }
});

const guardarBol = (clave,valor) => {
    sessionStorage.setItem(clave,valor);
};

const btnTerminar = document.getElementById("btnTerminar");

btnTerminar.addEventListener("click", () => {
    if (input01.value === "" || input02.value === "" || input03.value === "Elegir la nota correspondiente"){
        alert("Hay campos que no fueron ingresados");
    }else{
        ordenarNotas();
        // recorrerBoletin();
        calcularPromedio();
        guardarBol('boletin', JSON.stringify(objetoAlumno))
        vectorBoletin.forEach(objetoBoletin => {
            mostrarMaterias(objetoBoletin);
        });
    }
});

const div = document.createElement('div');

const mostrarMaterias = (objetoBoletin) =>{
    const container = document.getElementById('task-list');

    const div = document.createElement('div');

    div.innerHTML =`
        <div class= 'card text-center'>
            <div class='card-body'>
                <strong>Materia</strong>:${objetoBoletin.nombreMateria}; 
                <strong>Nota</strong>:${objetoBoletin.notaMateria}
            </div>
        </div>`

    container.appendChild(div);
}