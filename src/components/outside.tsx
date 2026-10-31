import Gato from "../assets/gateto.gif";
import type { CardType } from "../types/cards.type";

export default function Outside({ isOpen, setIsOpen }: CardType) {

    return <>
        <div id="outside" className={isOpen ? 'open-card' : ''}>

            <p id="outside-title">
                Wenas como tas, espero haberte alegrado tus madrugadas xd
            </p>

            <img id="outside-pic" src={Gato} />

            <p>
                <button  type="button"  onClick={() => setIsOpen(true)}>Aqui presiona xdxd</button>
            </p>

        </div>
    </>
}