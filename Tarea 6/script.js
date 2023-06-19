// Problema 1 -------------------------------------------------
/* 
-Descripción:Funcion para calcular la secuencia de fibonacci
-Dominio: Numero
-Recorrido: Numeros
*/
function secuenciaFibonacci(numeroMaximo) {
    let numeros = [0, 1];
    //Creamos ciclo While
    while(numeros[numeros.length - 1] + numeros[numeros.length - 2] <= numeroMaximo) {
      numeros.push(numeros[numeros.length - 1] + numeros[numeros.length - 2]);
    }
    return numeros;
}
/*
-Descripción:Funcion para filtrar los numeros pares de la secuencia obtenida
-Dominio: Numeros
-Recorrido: Numeros
*/
function filtrarPares(numeros) {
    return numeros.filter(num => num % 2 === 0);
}  
/*
-Descripción: Funcion para filtrar los numeros impares de la secuencia obtenida
-Dominio: Numeros
-Recorrido: Numeros
*/

function filtrarImpares(numeros) {
    return numeros.filter(num => num % 2 !== 0);
}
  
const fibonacci = secuenciaFibonacci(1000);
const pares = filtrarPares(fibonacci);
const impares = filtrarImpares(fibonacci);
  
console.log("Secuencia de Fibonacci:" + fibonacci);
console.log("Números pares de la secuencia:" + pares);
console.log("Números impares de la secuencia:" + impares);


//Problema 2 -------------------------------------------------
/*
-Descrpicón:Funcion para retornar en mayusculas todos los datos del arreglo
-Dmminio: Array (String)
-Recorrido: Array (String)
*/

let pokemon = ['Charmeleon', 'Greninja', 'Bulbasaur', 'Pikachu'];
//Aplicamos metodo MAP
let mayusculas = pokemon.map(function(nombre) {
  return nombre.toUpperCase();
});

console.log("Arreglo modificado: ");
console.log(mayusculas);


//Problema 3 -------------------------------------------------
/*
-Descripción:Funcion para retornar solo los pokemones de fuego del arreglo
-Dominio: Array (String)
-Recorrido:Array (String)
*/
let pokemones = [
    { nombre: 'Greninja', tipo: 'Agua' },
    { nombre: 'Charmander', tipo: 'Fuego' },
    { nombre: 'Caterpie', tipo: 'Bicho' },
    { nombre: 'Blastoise', tipo: 'Agua' },
    { nombre: 'Infernape', tipo: 'Fuego' },
    { nombre: 'Weedle', tipo: 'Bicho' },
    { nombre: 'Pichu', tipo: 'Electrico' },
    { nombre: 'Dragonite', tipo: 'Dragon' },
    { nombre: 'Gengar', tipo: 'Fantasma' },
    { nombre: 'Sceptile', tipo: 'Planta' }
  ]

  //Aplicamos metodo FILTER
  let pokemonFuego = pokemones.filter(function(pokemones) {
    return pokemones.tipo === 'Fuego';
  });
  
  console.log(pokemonFuego);