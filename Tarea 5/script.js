
//Funcion para calcular promedio de notas

/*
-Descripción: Funcion para sumar las notas
-Dominio: Números
-Recorrido: Números
*/
function sumatoria(nota1,nota2,nota3,nota4,nota5,nota6){
    let sumatoria = nota1 + nota2 + nota3 + nota4 + nota5 + nota6;
    return sumatoria;
}

/*
-Descripción: Funcion para calcular el promedio de notas
-Dominio: Números
-Recorrido: Número 
*/

function promedioNotas(nota1,nota2,nota3,nota4,nota5,nota6){
    let array = [nota1,nota2,nota3,nota4,nota5,nota6];
    const totalNotas = sumatoria(nota1,nota2,nota3,nota4,nota5,nota6);
    return (totalNotas / array.length);
    
}
console.log("El promedio de nota es: ",promedioNotas(6,8,9,2,5,10));
