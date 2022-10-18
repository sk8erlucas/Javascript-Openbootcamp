
// Creación y acceso a objetos

const obj = {
    id: 4,
    nombre: "Juan",
    apellido: "Gonzalez",
    isDeveloper: true,
    libros_favoritos: ["El metodo", "El codigo"],
    "4-cosas": "Hola"
}

console.log(obj.id);
console.log(obj["4-cosas"]);

// Dupicar Objeto

const obj2 = { ...obj};
obj.apellido = "Laino";
console.log(obj2);

// Ordenar objetos

var products = [
    { id: 1, name: "Leche", price: 120, categories: ["familiar", "comida"] },
    { id: 2, name: "Arroz", price: 80, categories: ["familiar", "comida"] },
    { id: 3, name: "Lavadora", price: 7800, categories: ["electrodomésticos"] }
];

/*products.sort((a, b) =>{
    return a.price - b.price;
});*/

products.sort((a, b) => a.price - b.price);

console.log(products);