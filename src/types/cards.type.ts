import type { Dispatch, SetStateAction } from "react"

export type CardType= {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}