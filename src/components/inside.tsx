import Gato from "../assets/gato.gif";
import type { CardType } from "../types/cards.type";

export default function Inside({ isOpen, setIsOpen }: CardType) {
    console.log(isOpen);

    return <>
        <div id="inside">
            <img src="https://i.pinimg.com/236x/20/68/aa/2068aa7531e06cfdcf7a91dda5f63850.jpg" width={300}></img>
        </div>
    </>
}
