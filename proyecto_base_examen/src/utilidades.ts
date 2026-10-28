// APARTADO 2 · Función calcularResultado
// Escribe aquí la función `calcularResultado` (consulta el enunciado).


export function calcularResultado(calificacion : number){
    if(calificacion < 5){
        return "suspenso"
    }
    if (calificacion >= 5 && calificacion < 7){
        return "aprobado"
    }
    if(calificacion >= 7 && calificacion < 9){
        return "notable"
    }
    if(calificacion >= 9){
        return "sobresaliente"
    }
}
export {};
