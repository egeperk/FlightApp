import { Location } from "../constants/dummy"

export interface IDestinationModalProbs {
    data?: Location[],
    isVisible?: boolean,
    onSelectLocation?: (item: Location) => void,
    onClose?: () => void
}