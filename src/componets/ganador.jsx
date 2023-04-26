/* eslint-disable react/prop-types */
import { ImRadioChecked2, ImCross } from "react-icons/im"; 

export function Ganador({g, opacity}){

    const style=()=>{
        return g === 'x'?{color:'#f99d17'}:{color:'#4281f8'}
    }

    return <div  className={'ganadar o'}>
        <h1 style={style()} >Ganador</h1>
        {
            g === 'x' ? <ImCross className="x g" /> : <ImRadioChecked2 className="circleTurno o" />
        }
        <button onClick={()=>{
            opacity(false)
        }} className="btn-ganador" style={style()} >Aceptar</button>
    </div>
}