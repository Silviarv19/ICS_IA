// RETOS 3, 4 y 5 · Estado, lista de tarjetas, votos y uso de los componentes.
// Ahora solo muestra el título. Importa lo que necesites desde `./datos`, `./tipos`,
// `./utilidades` y `./components`.
import { candidatosIniciales } from "./datos";
import { useState } from "react";
import  type{Candidato} from "./tipos"
<<<<<<< HEAD
import { TarjetaCandidato } from "./components/TarjetaCandidato";
import { FormularioCandidato } from "./components/FormularioCandidato";
import { obtenerEstado } from "./utilidades";
=======
>>>>>>> 93a92b356b31fc95b85ff8e4c63df635f56b752a



function App() {
  const [candidatos, setCandidatos] =
  useState<Candidato[]>(candidatosIniciales);

  const totalVotos = candidatos.reduce((acc, c) => acc + c.votos, 0);
<<<<<<< HEAD
  const maximo = Math.max(0, ...candidatos.map((c) => c.votos))
  function votar(id: number): void{
    setCandidatos((listaAnterior) =>
    listaAnterior.map((c) =>
    c.id === id ?
    {...c, votos : c.votos + 1}
      : c
      ))
  }

  function anadir(candidato: Candidato): void {
  setCandidatos((listaAnterior) => [...listaAnterior, candidato])
  }
=======
>>>>>>> 93a92b356b31fc95b85ff8e4c63df635f56b752a
  return (
    <main className="contenedor">
      <h1>Elección de delegado/a</h1>
      <p className="subtitulo">Ensayo 2 · UT 01 y UT 02</p>
<<<<<<< HEAD
      <p>Votos emitidos: {totalVotos}</p>
      {candidatos.length === 0? (
        <p>Todavía no hay candidaturas</p>
      ): (
        candidatos.map((c) => (
          <TarjetaCandidato
          key={c.id}
          candidato={c}
          estado={obtenerEstado(c.votos, maximo)}
          alVotar={votar}
          />
        ))
      )}
      <FormularioCandidato alAñadir={anadir} />
=======
>>>>>>> 93a92b356b31fc95b85ff8e4c63df635f56b752a
    </main>
  );
}

export default App;
