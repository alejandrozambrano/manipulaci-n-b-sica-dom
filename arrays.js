var frutas = ["Manzana", "Plátano", "Cereza","Fresa"];

console.log(frutas);

//
var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiantes){
    console.log(`Hola, ${estudiantes}`);
}

for(var = i = 0; i < estudiantes.length; i++){
    saludiarEstudiantes(estudiantes[i]);
}
//

//|
var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`);
}

for(var estudiante of estudiantes){
    saludarEstudiantes(estudiante);
}
//

//
var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes (estudiante) {
    console.log (`Hola, ${estudiante}`);
}

while(estudiantes.length > 0){
    var estudiante = estudiantes.shift();
    saludarEstudiantes(estudiante);
//
//
var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes (estudiante) {
    console.log (`Hola, ${estudiante}`);
}

while(estudiantes.length > 0){
    console.log(estudiantes);
    var estudiante = estudiantes.shift();
    saludarEstudiantes(estudiante);
}

//