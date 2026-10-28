import { useState } from "react";

type Prestamo = {
    id: number;
    titulo: string;
    alumno: string;
    devuelto: boolean;
};

export default function ListaPrestamos() {
    // TypeScript infiere Prestamo[] porque hay dos préstamos de ejemplo.
    const [prestamos, setPrestamos] = useState<Prestamo[]>([
        {
            id: 1,
            titulo: "Dune",
            alumno: "Ana",
            devuelto: false,
        },
        {
            id: 2,
            titulo: "El Hobbit",
            alumno: "Luis",
            devuelto: false,
        },
    ]);

    // Puede ser Prestamo o null.
    const [prestamoSeleccionado, setPrestamoSeleccionado] =
        useState<Prestamo | null>(null);

    function marcarComoDevuelto(id: number) {
        setPrestamos(
            prestamos.map((prestamo) =>
                prestamo.id === id
                    ? { ...prestamo, devuelto: true }
                    : prestamo
            )
        );
    }

    return (
        <div>
            <h1>Lista de préstamos</h1>

            {prestamos.map((prestamo) => (
                <div key={prestamo.id}>
                    <h2>{prestamo.titulo}</h2>
                    <p>Alumno: {prestamo.alumno}</p>
                    <p>
                        Estado: {prestamo.devuelto ? "Devuelto" : "Pendiente"}
                    </p>

                    <button
                        onClick={() => {
                            marcarComoDevuelto(prestamo.id);
                            setPrestamoSeleccionado(prestamo);
                        }}
                        disabled={prestamo.devuelto}
                    >
                        Marcar como devuelto
                    </button>
                </div>
            ))}

            {prestamoSeleccionado && (
                <p>
                    Seleccionado: {prestamoSeleccionado.titulo}
                </p>
            )}
        </div>
    );
}