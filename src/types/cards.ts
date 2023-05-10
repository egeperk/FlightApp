export interface IPlanningProbs {
    isVisible?: boolean,
    departure: string,
    destination: string,
    onChangeLocations: () => void,
    onSelectLocation: () => void
}

export interface ILocationCardProbs {
    isCrossVisible?: boolean,
    locationText: string
}

export interface IHeaderProbs {
    title: string,
    onClick?: () => void
}