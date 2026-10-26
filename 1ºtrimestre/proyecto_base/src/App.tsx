// RETOS 3, 4 y 5 · Estado, lista de tarjetas, votos y uso de los componentes.
// Ahora solo muestra el título. Importa lo que necesites desde `./datos`, `./tipos`,
// `./utilidades` y `./components`.
import { candidatosIniciales } from "./datos";
import { useState } from "react";
import  type{Candidato} from "./tipos"



function App() {
  const [candidatos, setCandidatos] =
  useState<Candidato[]>(candidatosIniciales);

  const totalVotos = candidatos.reduce((acc, c) => acc + c.votos, 0);
  return (
    <main className="contenedor">
      <h1>Elección de delegado/a</h1>
      <p className="subtitulo">Ensayo 2 · UT 01 y UT 02</p>
    </main>
  );
}

export default App;
