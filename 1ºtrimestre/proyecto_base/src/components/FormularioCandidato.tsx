// RETO 5 · Componente FormularioCandidato
// Ahora es un formulario estático que no hace nada. Hay que hacerlo funcional.
<<<<<<< HEAD
import { useState, type FormEvent } from "react";
import type { Candidato } from "../tipos";

type Props = {
  alAñadir: (candidato: Candidato) => void
}
export function FormularioCandidato({ alAñadir }: Props) {
  const [nombre, setNombre] = useState("")
  const [numeroLista, setNumeroLista] = useState("")
  const [lema, setLema] = useState("")
  const esValido =
    nombre.trim() !== "" &&
    numeroLista !== "" &&
    Number(numeroLista) >= 1 &&
    Number(numeroLista) <= 30 &&
    Number.isInteger(Number(numeroLista))
  function manejarEnvio(evento: FormEvent<HTMLFormElement>): void {
    evento.preventDefault();

    const nuevoCandidato: Candidato = {
      id: Date.now(),
      nombre: nombre.trim(),
      numeroLista: Number(numeroLista),
      votos: 0,
      ...(lema.trim() !== "" && { lema: lema.trim() }),
    };

    alAñadir(nuevoCandidato);

    setNombre("");
    setNumeroLista("");
    setLema("");
  }
  return (
    <form className="formulario" onSubmit={manejarEnvio}>
      <h2>Nueva candidatura</h2>
      <div className="campo">
        <label htmlFor="nombre">Nombre</label>
        <input
          id="nombre"
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </div>
      <div className="campo">
        <label htmlFor="numeroLista">Número de lista (1 a 30)</label>
        <input
          id="numeroLista"
          type="number"
          min="1"
          max="30"
          step="1"
          value={numeroLista}
          onChange={(e) => setNumeroLista(e.target.value)}
        />
      </div>
      <div className="campo">
        <label htmlFor="lema">Lema (opcional)</label>
        <input
          id="lema"
          type="text"
          value={lema}
          onChange={(e) => setLema(e.target.value)}
        />
      </div>
      <button type="submit" disabled={!esValido}>Presentar candidatura</button>
=======

export function FormularioCandidato() {
  return (
    <form className="formulario">
      <h2>Nueva candidatura</h2>
      <div className="campo">
        <label htmlFor="nombre">Nombre</label>
        <input id="nombre" type="text" />
      </div>
      <div className="campo">
        <label htmlFor="numeroLista">Número de lista (1 a 30)</label>
        <input id="numeroLista" type="number" min="1" max="30" step="1" />
      </div>
      <div className="campo">
        <label htmlFor="lema">Lema (opcional)</label>
        <input id="lema" type="text" />
      </div>
      <button type="submit">Presentar candidatura</button>
>>>>>>> 93a92b356b31fc95b85ff8e4c63df635f56b752a
    </form>
  );
}
