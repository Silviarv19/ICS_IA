// RETO 1 · Función obtenerEstado
// Escribe aquí la función `obtenerEstado` (consulta el enunciado).
import type  {Estado} from "./tipos"

<<<<<<< HEAD
export function obtenerEstado(votos: number, maximo: number): Estado {
  if (votos === 0) {
    return "ninguno";
  }

  if (votos === maximo) {
    return "lider";
  }

  return "algunos";
=======
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

>>>>>>> 93a92b356b31fc95b85ff8e4c63df635f56b752a
}
