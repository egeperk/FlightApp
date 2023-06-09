import { TRAVEL } from "."
import { Location } from "../constants/dummy"

export interface IDestinationModalProbs {
    data?: Location[],
    headerTitle: string,
    isVisible?: boolean,
    selectedDeparture?: Location,
    selectedDestination?: Location,
    onSelectLocation?: (item: Location) => void,
    onClose?: () => void
}

export interface IPassengerModalProbs {
    isVisible?: boolean,
    isRefreshed?: boolean,
    onClose?: () => void,
    onSelectPassenger?: (count: number) => void
}

export interface IDatePickerModalProbs {
    isVisible?: boolean,
    type: TRAVEL,
    onClose?: () => void,
    onSelection?: (departure: string) => void,

}