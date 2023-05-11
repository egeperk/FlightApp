import { Location } from "../constants/dummy"

export interface IDestinationModalProbs {
    data?: Location[],
    headerTitle: string,
    isVisible?: boolean,
    onSelectLocation?: (item: Location) => void,
    onClose?: () => void
}