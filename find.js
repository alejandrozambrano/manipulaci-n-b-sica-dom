// uso del find

var articulos = [
    { nombre: "Bici", costo: 3000 },
    { nombre: "Tv", costo: 2500 },
    { nombre: "Libro", costo: 320 },
    { nombre: "Celular", costo: 10000 },
    { nombre: "Laptop", costo: 20000 },
    { nombre: "Teclado", costo: 500 },
    { nombre: "Audifonos", costo: 1700 },
];

var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "Laptop"
});

encuentraArticulo

//

// metodo forEach

var articulos = [
    { nombre: "Bici", costo: 3000 },
    { nombre: "Tv", costo: 2500 },
    { nombre: "Libro", costo: 320 },
    { nombre: "Celular", costo: 10000 },
    { nombre: "Laptop", costo: 20000 },
    { nombre: "Teclado", costo: 500 },
    { nombre: "Audifonos", costo: 1700 },
];
undefined
articulos.forEach(function(articulo){
    console.log(articulo.nombre);
})
    

VM4447:2 Bici
VM4447:2 Tv
VM4447:2 Libro
VM4447:2 Celular
VM4447:2 Laptop
VM4447:2 Teclado
VM4447:2 Audifonos
undefined

//