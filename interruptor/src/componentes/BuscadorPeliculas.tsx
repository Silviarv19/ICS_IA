
import { useState } from "react"
import type { KeyboardEvent } from "react"

// Definimos qué datos tiene cada película
interface Pelicula {
    titulo: string
    anio: number
    genero: string
}

// Lista de películas que vamos a mostrar
const peliculas: Pelicula[] = [
    { titulo: "Harry Potter", anio: 2001, genero: "Fantasía" },
    { titulo: "Titanic", anio: 1997, genero: "Romance" },
    { titulo: "Avatar", anio: 2009, genero: "Ciencia ficción" },
    { titulo: "Shrek", anio: 2001, genero: "Animación" },
    { titulo: "Jurassic Park", anio: 1993, genero: "Aventura" },
    { titulo: "El Rey León", anio: 1994, genero: "Animación" },
    { titulo: "Spider-Man", anio: 2002, genero: "Acción" },
    { titulo: "Los juegos del hambre", anio: 2012, genero: "Aventura" }
]

export function BuscadorPeliculas() {

    // Estado para guardar lo que escribimos en el buscador
    const [busqueda, setBusqueda] = useState<string>("")

    // Estado para guardar el género seleccionado
    const [genero, setGenero] = useState<string>("Todos")

    // Filtramos las películas según el texto y el género
    const peliculasFiltradas = peliculas.filter((pelicula) => {

        // Comprobamos si el título contiene el texto escrito
        // toLowerCase() permite buscar sin distinguir mayúsculas
        const coincideTitulo = pelicula.titulo
            .toLowerCase()
            .includes(busqueda.toLowerCase())

        // Si elegimos "Todos", acepta cualquier género
        // Si no, comprueba que coincida con el seleccionado
        const coincideGenero =
            genero === "Todos" || pelicula.genero === genero

        // La película debe cumplir las dos condiciones
        return coincideTitulo && coincideGenero
    })

    // Esta función se ejecuta cuando pulsamos una tecla
    function manejarTecla(e: KeyboardEvent<HTMLInputElement>) {

        // Si pulsamos Escape, borramos el texto del buscador
        if (e.key === "Escape") {
            setBusqueda("")
        }
    }

    // Esta función devuelve el buscador a su estado inicial
    function limpiarFiltros() {
        setBusqueda("")
        setGenero("Todos")
    }

    return (
        <div>
            <h2>Buscador de películas</h2>

            {/* Buscador de títulos */}
            <input
                type="text"
                value={busqueda}
                placeholder="Buscar película..."
                // Actualizamos el estado al escribir
                onChange={(e) => setBusqueda(e.target.value)}
                // Detectamos si pulsamos Escape
                onKeyDown={manejarTecla}
            />

            {/* Selector de géneros */}
            <select
                value={genero}
                // Guardamos el género que seleccionamos
                onChange={(e) => setGenero(e.target.value)}
            >
                <option value="Todos">Todos los géneros</option>
                <option value="Fantasía">Fantasía</option>
                <option value="Romance">Romance</option>
                <option value="Ciencia ficción">Ciencia ficción</option>
                <option value="Animación">Animación</option>
                <option value="Aventura">Aventura</option>
                <option value="Acción">Acción</option>
            </select>

            {/* Botón para borrar los filtros */}
            <button onClick={limpiarFiltros}>
                Limpiar filtros
            </button>

            {/* Mostramos el número de películas encontradas */}
            <p>{peliculasFiltradas.length} resultados</p>

            {/* Si no hay películas, mostramos un mensaje */}
            {peliculasFiltradas.length === 0 ? (
                <p>Sin resultados</p>
            ) : (

                // Si hay películas, recorremos la lista con map()
                peliculasFiltradas.map((pelicula) => (
                    <div key={pelicula.titulo}>
                        <h3>{pelicula.titulo}</h3>
                        <p>Año: {pelicula.anio}</p>
                        <p>Género: {pelicula.genero}</p>
                    </div>
                ))
            )}
        </div>
    )
}
