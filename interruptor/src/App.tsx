import { InterruptorLuz } from "./componentes/InterruptorLuz"
import { ContadorLimitado } from "./componentes/ContadorLimitado"
import { ListaCompra } from "./componentes/ListaCompra"
import { BuscadorPeliculas } from "./componentes/BuscadorPeliculas"
function App(){
  return (
    <div>
    <InterruptorLuz />
    <ContadorLimitado />
    <ListaCompra />
    < BuscadorPeliculas />
    </div>
  )
}


export default App