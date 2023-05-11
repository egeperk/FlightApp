import { ReactNode } from "react"
import { Location } from "../constants/dummy"

export interface IPlanningProbs {
    isVisible?: boolean,
    departure: string,
    destination: string,
    onChangeLocations: () => void
}

export interface ILocationCardProbs {
    isCrossVisible?: boolean,
    locationText: string,
    onItemSelect?: () => void
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
}