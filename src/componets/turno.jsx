/* eslint-disable react/prop-types */
import { ImRadioChecked2, ImCross } from "react-icons/im";

export function Turno({ activeTurno }) {

    return <section className="turnos" >
        <div className={!activeTurno ? "turno active" : 'turno'} >
            <ImCross className="x" />
        </div>
        <div className={activeTurno ? "turno active" : 'turno'}>
            <ImRadioChecked2 className="circleTurno" />
        </div>
    </section>
}

