1.1 
// Uso en App.jsx
<Saludo nombreAlumno="Lucía" />

// Saludo.jsx
export function Saludo({ nombre }) {
  return<p>¡Hola, {nombre}!</p>;
}
El error es que primero pone "nombreAlumno" y después "nombre", debería poner lo mismo todas las veces que se haga referencia a ello


1.2
export function Interruptor() {
  const [encendido, setEncendido] = useState(false);
  return (
    <button onClick={() => (encendido = !encendido)}>
      {encendido ? 'Apagar' : 'Encender'}
    </button>
  );
}
En el onClick debería usar setEncendido en vez de encendido

1.3
export function Contador() {
  const [valor, setValor] = useState(0);
  return<button onClick={setValor(valor + 1)}>Pulsado {valor} veces</button>;
}
En el onClick para hacer valor +1 hay que hacerlo con una función y no directamente

1.4
export function Contador() {
  const [valor, setValor] = useState(0);
  return<button onClick={() => setValor(valor + 1)}>{valor}</button>;
}
Falta importar useState

1.5
export function BotonEnviar({ onEnviar }) {
  function manejarClic() {
    onEnviar();
  }
  return<button onClick={manejarClic}>Enviar</button>;
}

// En App.jsx
<BotonEnviar />
En BotonEnviar hay que pasar onEnviar

1.6
export function Bandeja() {
  const [mensajesNuevos, setMensajesNuevos] = useState(0);
  return (
    <div>
      {mensajesNuevos &&<p>Tienes {mensajesNuevos} mensajes nuevos</p>}
    </div>
  );
}
En el div hay que poner mensajesNuevos > 0 para comprobar que hay mensajes y que no aparezca un 0 suelto