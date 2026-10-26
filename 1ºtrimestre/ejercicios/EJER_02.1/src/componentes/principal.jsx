import { Bienvenida } from "./bienvenida";
import { ListaUnidades } from "./listaUnidades";

export function Principal() {
  return (
    <main>
      <Bienvenida />
      <ListaUnidades />
    </main>
  );
}