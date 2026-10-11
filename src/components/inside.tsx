import Gato from "../assets/gato.gif";
import type { CardType } from "../types/cards.type";

export default function Inside({ isOpen, setIsOpen }: CardType) {

    return <>
        <div id="inside">

            <p id="inside-title">
                Feliz dia de la mujer
                :v
            </p>

            <img id="inside-pic" src={Gato} />

            <p id='message' className="text-message">
                No te detengas hasta que te sientas orgullosa de ti misma. Eres la protagonista de tu propia vida, celebra cada logro conseguido y cada reto que vendrá.
            </p>

            <p id='message' className="text-message">
                Que tus sueños sigan creciendo sin límites. Hoy y siempre, tu voz importa.
            </p>

            <p id='message' className="psdt-message">
                Feliz dia de la mujer pasala bien, y eso que es domingo xd
                vas a disculpar la carta chafa, pero fue lo unico que se me ocurrio para felitarte por el dia de la mujer

            </p>

            <p>
                <button type="button" onClick={() => setIsOpen(false)}>Ahora pa cerrar :v</button>
            </p>
        </div>
    </>
}