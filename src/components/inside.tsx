import Gato from "../assets/gato.gif";
import type { CardType } from "../types/cards.type";

export default function Inside({ isOpen, setIsOpen }: CardType) {
    console.log(isOpen);

    return <>
        <div id="inside">

            <p id="inside-title">
                Para la niña que tiene una sonrisa demasiado bonita ❤️
            </p>

            <img id="inside-pic" src={Gato} />

            <p className="text-message">
                No sé si te lo dicen lo suficiente, pero tienes algo que te hace
                especialmente bonita. Y no, no hablo solamente de tu sonrisa,
                aunque admito que esa tiene bastante culpa de que esté escribiendo esto. 🤭
            </p>

            <p className="text-message">
                Quería recordarte que eres alguien especial, de esas personas que
                sin hacer demasiado pueden alegrarle el día a alguien. Y bueno...
                por si todavía no lo habías notado, tienes una pequeña habilidad
                para hacer que alguien sonría como tonto mirando su celular. ❤️
            </p>

            <p className="psdt-message">
                P. D.: No te emociones mucho leyendo esto, que después me vas a
                preguntar por qué me pongo nervioso cuando hablo contigo. JAJAJA.
                Aunque, siendo sincero, si te saqué una sonrisita o te hice
                sonrojar aunque sea un poquito, ya valió la pena. 🙈💕
            </p>
            <p>
                <button type="button" onClick={() => setIsOpen(false)}>Ahora pa cerrar :v</button>
            </p>
        </div>
    </>
}
