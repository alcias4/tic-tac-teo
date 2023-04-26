/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { ImRadioChecked2, ImCross } from "react-icons/im";
import { musica } from "../script/musica";
import confetti from "canvas-confetti";


export function Table({ cambio, activeTurno, puestos, check, opacity, reset }) {
    const [winer, setWinnwe] = useState(false);
    const addIcon = (e) => {

        if (puestos[e] !== null) {
            return puestos[e] === 'x' ? <ImCross className="x" /> : <ImRadioChecked2 className="circleTurno" />
        }
    }




    const clickAdd = (e) => {
        
        if (!winer) {
            musica('toque');
            if (puestos[e] == null) {
                puestos[e] = activeTurno == false ? 'x' : 'o';
                cambio();
            }
            let ganador = check(puestos)
            if (ganador) {
                setWinnwe(ganador)
            }
        }
    }

    useEffect(() => {
        if (winer) {
            musica('gano')
            opacity(winer);
            setWinnwe(reset());
            confetti();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [winer])

    return (
        <div className="table" >
            {puestos.map((x, i) => {
                return <span onClick={() => { clickAdd(i) }} className="puestos" key={i}>
                    {
                        addIcon(i)
                    }
                </span>;
            })}

            <audio id="toque" >
                 <source  src="music/toque.mp3" type="audio/mp3" />
            </audio>

            <audio id="gano">
                <source id="gano" src="music/gano.mp3" type="audio/mp3" />
            </audio>

        </div>
    );
}
