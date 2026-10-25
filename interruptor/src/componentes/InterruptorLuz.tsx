import{ useState } from "react"

export function InterruptorLuz(){
    const [encendida, setEncendida] = useState<boolean>(false)

    return(
        <div>
            <h2>Interruptor de luz</h2>
            <button onClick={() => setEncendida(!encendida)}> 
                {encendida ? "Apagar" : "Encender"}
            </button>
            <div
                style = {{
                    backgroundColor : encendida ? "yellow" : "#333333",
                    color : encendida ? "black" : "white",
                    padding : "30px",
                    marginTop: "10px"
                }}
                >
                {encendida ? "Luz encendida" : "Luz apagada"}
                </div>
            
        </div>
    )
}
