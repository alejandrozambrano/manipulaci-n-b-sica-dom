var pregunta = prompt("Ingresa tu opción: piedra, papel o tijera "); 
var user = pregunta.toLowerCase();
var options = ["piedra", "papel", "tijera"];
var machine = options[Math.floor(Math.random() * 3)];

switch (true) {
    case (user === machine):
        console.log('es un empate');
        break;
    case (machine === 'piedra' && user === 'papel' || machine === 'papel'  && user === 'tijera' || machine === 'tijera' && user === 'piedra'):
        console.log('Ganaste, machine escogió ' + machine)
        break;
    default:
        console.log('¡Perdiste!, machine escogió ' + machine);
}