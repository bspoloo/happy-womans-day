import Gato from "../assets/gato.gif";
import type { CardType } from "../types/cards.type";

export default function Inside({ isOpen, setIsOpen }: CardType) {
    console.log(isOpen);

    return <>
        <div id="inside">

            <div id="inside">
                <p>Esto es para ti, alguien que merece mas detalles sjdksdjsk</p>
                <img src="https://i.pinimg.com/236x/20/68/aa/2068aa7531e06cfdcf7a91dda5f63850.jpg" width={300}></img>
            </div>
            <button type="button" onClick={() => setIsOpen(false)}>Ahora pa cerrar :v</button>

        </div>
    </>
}