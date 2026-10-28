// APARTADO 5 · Componente FormularioNota
// Ahora es un formulario estático que no hace nada. Hay que hacerlo funcional.
import { useState } from "react";
import type { Nota } from "../tipos";

type Props ={
  alAnadir: (nota : Nota) => void
}
export function FormularioNota({alAnadir} : Props) {
  const [modulo, setModulo] = useState("")
  const [calificacion, setCalificacion] = useState("")
  const [observaciones, setObservaciones] = useState("")

  function manejarEnvio(evento : onSubmit) : void{
    evento.preventDefault()

    const nuevaNota: Nota ={
      id: Date.now(),
      calificacion : Number(calificacion),
      ...(observaciones.trim() !== "" {&& observaciones : observaciones.trim() }),
    }

    alAnadir(nuevaNota)
    setModulo("")
    setCalificacion("")
    setObservaciones("")
  }

  function anadir(nota : Nota): void {

  }
}

  return (
    <form className="formulario">
      <h2>Añadir nota</h2>
      <div className="campo">
        <label htmlFor="modulo">Módulo</label>
        <input id="modulo" type="text" value={modulo} onChange={(e) => setModulo(e.target.value)}/>
      </div>
      <div className="campo">
        <label htmlFor="calificacion">Calificación (0 a 10)</label>
        <input id="calificacion" type="number" min="0" max="10" step="0.1"  value={calificacion} onChange={(e) => setCalificacion(e.target.value)}/>
      </div>
      <div className="campo">
        <label htmlFor="observaciones">Observaciones (opcional)</label>
        <input id="observaciones" type="text"  value={observaciones} onChange={(e) => setObservaciones(e.target.value)}/>
      </div>
      <button type="submit">Añadir nota</button>
    </form>
  );
}
