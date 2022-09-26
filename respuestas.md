1) Responde las siguientes preguntas en la sección de comentarios:

¿Qué es una variable y para qué sirve?

R/: Cajitas (espacios en memoria) donde podemos guardar información (dependiendo de los tipos y estructuras de datos que soporte nuestro lenguaje).

¿Cuál es la diferencia entre declarar e inicializar una variable?

R/ :Declarar es cuando le decimos a JavaScript que vamos a crear una variable con el nombre tal. Mientras que inicializar (o reinicializar) es asignarle un valor a esa variable.

´´´js
let nombre = 'XXXX' 
´´´

¿Cuál es la diferencia entre sumar números y concatenar strings?
¿Cuál operador me permite sumar o concatenar?
EL operador que nos permite sumar o concatenar es +. Este operador nos permite sumar números cuando lo usamos con números. Pero cuando los strings, lo que hace es unir (concatenar, así se dice) ambos strings.

2) Determina el nombre y tipo de dato para almacenar en variables la siguiente información:

Nombre: string
Apellido: string
Nombre de usuario en Platzi: string (@fulanito)
Edad: number
Correo electrónico: string (lala@gmail.com)
Mayor de edad: boolean
Dinero ahorrado: number
Deudas: number

3️⃣ Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios.

```js
let nombre = 'Alejandro';
let apellido = 'Zambrano';
let username = 'AlejoZambrano';
let edad = 19;
let email = 'alejandro_zambrano_@hotmail.com';
let esMayorDeEdad = true;
let dineroAhorrado = 1000;
let deudas = 100;
```
4️⃣ Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:


Nombre completo (nombre y apellido)
Dinero real (dinero ahorrado menos deudas)


```js
let nombreCompleto = nombre + ' ' + apellido ;
let dineroReal = dineroAhorrado - deudas; 
```

Funciones

1️⃣ Responde las siguientes preguntas en la sección de comentarios:

¿Qué es una función?

Las funciones nos permiten encapsular (guardar) bloque de código para reutilizarlos y ejecutarlos en el futuro. 

¿Cuándo me sirve usar una función en mi código?

Nos sirve cuando tenemos variables o bloque de código muy parecidos (con cambio que podrían ser parámetros y argumentos) que podemos encapsular para reutilizar más de una vez en el futuro. 

Tambien nos sirve para ordenar y mejorar la legibilidad de nuestro código.

¿Cuál es la diferencia entre parámetros y argumentos de una función?

las funciones reciben parámetro cuando las creamos. Y les enviamos argumentos cuando las ejecutamos.

2️⃣ Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:

```js
const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
```

```js
function nombreCompleto(name, lastName) {
    return name + ' ' + lastName 
}

function saludo(name, lastname, username) {
    const completeName = nombreCompleto(name, lastname);
    
    console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + username + ".");    
}
saludo()
```

Condicionales

1️⃣ Responde las siguientes preguntas en la sección de comentarios:
¿Qué es un condicional?
¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?
¿Puedo combinar funciones y condicionales?
2️⃣ Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:
const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}
3️⃣ Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).
💡 Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays y un solo condicional. 😏

Ciclos

1️⃣ Responde las siguientes preguntas en la sección de comentarios:
¿Qué es un ciclo?
¿Qué tipos de ciclos existen en JavaScript?
¿Qué es un ciclo infinito y por qué es un problema?
¿Puedo mezclar ciclos y condicionales?
2️⃣ Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:
for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}
3️⃣ Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.
💡 Pista: puedes usar la función prompt de JavaScript.

Listas

1️⃣ Responde las siguientes preguntas en la sección de comentarios:
¿Qué es un array?
¿Qué es un objeto?
¿Cuándo es mejor usar objetos o arrays?
¿Puedo mezclar arrays con objetos o incluso objetos con arrays?
2️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.
3️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).
4️⃣ Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).