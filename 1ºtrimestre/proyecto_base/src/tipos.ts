// RETO 1 · Tipos
// Escribe aquí los tipos `Candidato` y `Estado` (consulta el enunciado).
<<<<<<< HEAD

=======
import { useState } from "react";
>>>>>>> 93a92b356b31fc95b85ff8e4c63df635f56b752a

export type Candidato ={
    id : number
    nombre : string
    numeroLista : number
    votos : number
    lema? : string
}

export type Estado = "ninguno" | "algunos" | "lider"

