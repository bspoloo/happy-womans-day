import Gato from "../assets/gateto.gif";
import type { CardType } from "../types/cards.type";

export default function Outside({ isOpen, setIsOpen }: CardType) {

    return <>
        <div id="outside" className={isOpen ? 'open-card' : ''}>

            <p id="outside-title">
                Buenos dias a la chica mas preciosa de la vida
            </p>

            <img id="outside-pic" src={Gato} />

            <p>
                <button  type="button"  onClick={() => setIsOpen(true)}>Presioname xd</button>
            </p>

        </div>
    </>
}