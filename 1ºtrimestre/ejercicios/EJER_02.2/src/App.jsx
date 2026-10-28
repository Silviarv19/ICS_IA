import { Cabecera } from "./componentes/cabecera";
import { Principal } from "./componentes/principal";
import { Pie } from "./componentes/pie";
import TarjetaModulo from "./componentes/TarjetaModulo";
//import {Contador} from "./componentes/Contador"
import { AvisoCookies } from "./componentes/AvisoCookies";
import { useState } from "react";





export function App() {
  const [decision, setDecision] = useState("");

  function aceptarCookies() {
    console.log("Cookies aceptadas");
    setDecision("aceptadas");
  }

  function rechazarCookies() {
    console.log("Cookies rechazadas");
    setDecision("rechazadas");
  }
  return (
    <>
      <TarjetaModulo titulo="Desarrollo Web en Entorno Cliente" horas={7} curso="2º">
        JavaScript, TypeScript y React en el navegador.
      </TarjetaModulo>

      <TarjetaModulo titulo="Programación" horas={6} curso="1º">
        Java y programación orientada a objetos.
      </TarjetaModulo>

      <TarjetaModulo titulo="Bases de Datos">
        SQL y gestión de bases de datos.
      </TarjetaModulo>
      <Contador etiqueta="Asistentes" valorInicial={5} />
      <Contador etiqueta="Preguntas" valorInicial={2} />
      <AvisoCookies
        onAceptar={aceptarCookies}
        onRechazar={rechazarCookies}
      >
        Esta página utiliza cookies para mejorar tu experiencia.
      </AvisoCookies>

      {decision !== "" && (
        <p>Has {decision} las cookies</p>
      )}
      <Cabecera />
      <Principal />
      <Pie />
    </>
  );
}
