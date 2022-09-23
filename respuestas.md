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