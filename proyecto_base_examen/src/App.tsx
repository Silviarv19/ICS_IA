// APARTADOS 4 y 5 · Estado, lista de notas y uso de los componentes.
// Ahora solo muestra el título. Importa lo que necesites desde `./datos`, `./tipos`,
// `./utilidades` y `./components`.
import { useState } from "react";
import { notasIniciales } from "./datos";
import type { Nota } from "./tipos";
import { ResumenNotas } from "./components/ResumenNotas";
import { FormularioNota } from "./components/FormularioNota";

function App() {
  const [notas, setNotas] =
  useState<Nota[]>(notasIniciales)

  const totalNotas = notas.reduce((acc, n) => acc + n.calificacion, 0)
 
  const media =( (...notas.map((n) => n.calificacion)) / totalNotas)
  return (
    <main className="contenedor">
      <h1>Registro de notas</h1>
      <p className="subtitulo">2.º DAW · Evaluación final</p>
     { totalNotas === 0? (
        <p>Todavía no hay notas registradas</p>
      ) : (
        
         
          notas.map((n) => (
            n.id

            

          ))
          
        )}
    
    <FormularioNota alAnadir={}
    </main>
  );
}

export default App;
