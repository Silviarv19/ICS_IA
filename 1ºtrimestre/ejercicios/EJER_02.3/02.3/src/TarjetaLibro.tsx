import type { ReactNode } from "react";

type PropsTarjetaLibro = {
    titulo: string;
    autor: string;
    estado?: "disponible" | "prestado" | "reservado";
    children?: ReactNode;
    alPrestar?: () => void;
};

export function TarjetaLibro({
    titulo,
    autor,
    estado = "disponible",
    children,
    alPrestar,
}: PropsTarjetaLibro) {
    return (
        <div>
            <h2>{titulo}</h2>
            <p>Autor: {autor}</p>
            <p>Estado: {estado}</p>

            {children}

            {estado === "disponible" && alPrestar && (
                <button onClick={() => alPrestar?.()}>
                    Prestar
                </button>
            )}
        </div>
    );
}