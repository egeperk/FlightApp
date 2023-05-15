import { ReactNode } from "react"
import { Location } from "../constants/dummy"

export interface ILocationCardProbs {
    isCrossVisible?: boolean,
    locationText: string,
    onDelete?: () => void
}

export interface IHeaderProbs {
    title: string,
    onClick?: () => void
}

export interface IPassengerCountProbs {
    svg: ReactNode,
    type: string,
    description: string,
    count: number,
    onChange?: (increment: boolean) => void
}

export interface IEmptyPageCardProbs {
    isVisible: boolean
}

export interface IPassengerChoiceTabProbs {
    totalPassangerCount: number,
    onPassangerClick: () => void
}

export interface IRecentSearchCardProbs {
    fromLocation: string,
    toLocation: string,
    departureDate: string
    returnDate?: string
}