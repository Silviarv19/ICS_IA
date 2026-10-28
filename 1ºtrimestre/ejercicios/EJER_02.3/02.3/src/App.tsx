import {TarjetaLibro} from "./TarjetaLibro";

export default function App() {
  return (
    <main>
      <TarjetaLibro
        titulo="Dune"
        autor="Frank Herbert"
        estado="disponible"
        alPrestar={() => console.log("Libro prestado")}
      />

      <TarjetaLibro
        titulo="El Hobbit"
        autor="J. R. R. Tolkien"
        estado="prestado"
      />

      <TarjetaLibro
        titulo="Drácula"
        autor="Bram Stoker"
        estado="reservado"
      />
    </main>
  );
}