// RETO 1 · Función obtenerEstado
// Escribe aquí la función `obtenerEstado` (consulta el enunciado).
import type  {Estado} from "./tipos"

export function obtenerEstado(votos: number, maximo: number){
    if(votos === 0){
        return "ninguno"
    } 
    if(votos === maximo){
        return "lider"
    }
    if (votos > 0 && votos < maximo){
        return "algunos"
    }

}
