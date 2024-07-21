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
    NotasTotales = 0;
    cantNotas = 0;
    for (let i = 0; i < vectorBoletin.length; i++){
        NotasTotales += parseFloat(vectorBoletin[i].notaMateria);
        cantNotas ++;
    }
    notaPromedioFinal = (NotasTotales / cantNotas);
    Swal.fire({
        title: "La nota promedio final es " + notaPromedioFinal
    })
};

function ordenarNotas (){
    vectorBoletin.sort((a, b) => a.notaMateria - b.notaMateria);
};

const input01 = document.getElementById("floatingInputNombre");
const input02 = document.getElementById("floatingInputMateria");
const input03 = document.getElementById("floatingInputNota");

const btnEnviar = document.getElementById("btnEnviar");

btnEnviar.addEventListener("click", () => {
    const nombre = input01.value;
    const materia = input02.value;
    const nota = parseFloat(input03.value);
    if (input01.value === "" || input02.value === "" || input03.value === ""){
        Swal.fire({
            icon: "error",
            title: "Hay campos que no fueron ingresados"
        });
    }else{
        objetoAlumno.nombre = nombre;
        const nuevoBoletin = {
            nombreMateria: materia,
            notaMateria: nota,
        };
        vectorBoletin.push(nuevoBoletin);
        Swal.fire({
            title : "Se agrego una nueva nota la boletin",
            icon : "success"
        });
    }
});

const guardarBol = (clave,valor) => {
    sessionStorage.setItem(clave,valor);
};

const btnTerminar = document.getElementById("btnTerminar");

btnTerminar.addEventListener("click", () => {
    const nombre = input01.value;
    const materia = input02.value;
    const nota = parseFloat(input03.value);
    if (input01.value === "" || input02.value === "" || input03.value === ""){
        Swal.fire({
            icon: "error",
            title: "Hay campos que no fueron ingresados"
        });
    }else{
        ordenarNotas();
        calcularPromedio();
        guardarBol('boletin', JSON.stringify(objetoAlumno))
        vectorBoletin.forEach(objetoBoletin => {
            mostrarMaterias(objetoBoletin);
        });
        obtenerAPI().then(result => mostrarAPI(result));
    }
});


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

    const url = 'https://dad-jokes.p.rapidapi.com/random/joke';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '9b9ee133f7msh2d2549e61275369p113df8jsne431adfc7b1f',
            'x-rapidapi-host': 'dad-jokes.p.rapidapi.com'
            }
        };

async function obtenerAPI(){
    try {
        const response = await fetch(url, options);
        const result = await response.json(); // Parsear a JSON
        console.log(result.body);
        return result;
    } catch (error) {
        console.error(error);
    }
}

const mostrarAPI = (result) => {

    const randomNumber = Math.floor(Math.random() * result.body.length); // Asegurarse de estar dentro del rango
    const joke = result.body[randomNumber];
    const container = document.getElementById('jokeAPI');

    const p = document.createElement('p');

    p.innerHTML= `
        <div class="card text-center">
            <p>
                The joke of the day is: ${joke.setup} ${joke.punchline}
            </p>
        </div>`

    container.appendChild(p);
}
