import { useState } from "react"
interface Producto {
    id: number
    nombre: string
    comprado: boolean
}

export function ListaCompra() {
    const [productos, setProductos] = useState<Producto[]>([])
    const [nombre, setNombre] = useState<string>("")
    function añadir() {
        if (nombre !== "") {
            const nuevoProducto: Producto = {
                id: Date.now(),
                nombre: nombre,
                comprado: false
            }
            setProductos([...productos, nuevoProducto])
            setNombre("")
        }
    }
    function quitar(id: number) {
        setProductos(productos.filter((producto) => producto.id !== id))
    }



    return (
        <div>
            <h2>Lista de la Compra</h2>
            <input
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
            />
            <button onClick={añadir}>
                Añadir
            </button>
            <p>Pendientes: {productos.filter((producto) => producto.comprado === false).length}</p>
            {productos.map((producto) => (
                <div key={producto.id}>
                    <p style={{ textDecoration: producto.comprado ? "line-through" : "none" }}>{producto.nombre}</p>
                    <input type="checkbox" checked={producto.comprado} onChange={() => {
                        setProductos(productos.map((p) => {
                            if (p.id === producto.id) {
                                return { ...p, comprado: !p.comprado }
                            }
                            return p

                        }))

                    }}></input>
                    <button onClick={() => quitar(producto.id)}>
                        Quitar
                    </button>
                </div>
            ))}

        </div>
    )
}


