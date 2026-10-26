// RETO 2 · Componente TarjetaCandidato
// Ahora muestra datos fijos y el botón no hace nada. Hay que hacerlo configurable mediante props.
import type { Estado, Candidato } from "../tipos";

type props ={
  candidato : Candidato
  estado : Estado
  textoBoton? : string
  alVotar : (id : number) => void
}

export function TarjetaCandidato({
  candidato,
  estado,
  textoBoton = "Votar",
  alVotar
}: props) {
  return (
    <article className="tarjeta">
      <h3>
        Nombre del candidato {candidato.nombre}<span className="numero">Nº {candidato.numeroLista}</span>
      </h3>
      {candidato.lema}
      <p>
        Votos: <strong>{candidato.votos}</strong>
      </p>
      { estado === "lider" && (
        <p>👑 Va en cabeza</p>
      )}
      {estado === "ninguno" &&(
        <p>Todavía sin votos</p>
      )}
      <button onClick={() => alVotar(candidato.id)}>{textoBoton}</button>
    </article>
  );
}
