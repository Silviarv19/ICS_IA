import { useState } from "react"

export function ContadorLimitado(){
    const [cuenta, setCuenta] = useState<number>(0)

    function sumar(){
        if(cuenta <10){
            setCuenta((cuenta) => cuenta +1)
        }
    }

    function restar(){
        if(cuenta > 0){
            setCuenta((cuenta) => cuenta - 1)
        }
        
    }

    return (
        <div>
            <h2>Contador Limitado</h2>
            { cuenta }
            <br></br>
            
            <button onClick={ restar } disabled={cuenta === 0}>
                Restar
            </button>
            <button onClick={ sumar} disabled={cuenta === 10}>
                Sumar
            </button>

            {cuenta === 10 && (
                <p>Máximo alcanzado</p>
            )}
        </div>
    )
}