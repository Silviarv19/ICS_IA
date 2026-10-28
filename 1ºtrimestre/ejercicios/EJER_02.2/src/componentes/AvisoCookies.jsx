import { useState } from "react";

export function AvisoCookies({ children, onAceptar, onRechazar }) {
    const [visible, setVisible] = useState(true);

    function manejarAceptar() {
        setVisible(false);

        if (onAceptar) {
            onAceptar();
        }
    }

    function manejarRechazar() {
        setVisible(false);

        if (onRechazar) {
            onRechazar();
        }
    }

    if (!visible) {
        return null;
    }

    return (
        <div>
            <p>{children}</p>

            <button onClick={manejarAceptar}>Aceptar</button>
            <button onClick={manejarRechazar}>Rechazar</button>
        </div>
    );
}