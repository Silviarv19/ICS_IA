import { useState } from "react";

 export function Contador({ etiqueta, valorInicial = 0 }) {
    const [valor, setValor] = useState(valorInicial);

    const manejarIncremento = () => {
        setValor(valor + 1);
    };

    function manejarDecremento() {
        if (valor > 0) {
            setValor(valor - 1);
        }
    }

    function manejarReinicio() {
        setValor(valorInicial);
    }

    return (
        <div>
            <h2>{etiqueta}: {valor}</h2>

            <button onClick={manejarIncremento}>+1</button>

            <button
                onClick={manejarDecremento}
                disabled={valor === 0}
            >
                -1
            </button>

            <button onClick={manejarReinicio}>Reiniciar</button>
        </div>
    );
}

