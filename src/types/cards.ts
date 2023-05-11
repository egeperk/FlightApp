import { ReactNode } from "react"

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
    onChange?: (increment: boolean) => void
}

export interface IEmptyPageCardProbs {
    isVisible: boolean
}

export interface IPassengerChoiceTabProbs {
    totalPassangerCount: number,
    onPassangerClick: () => void
}