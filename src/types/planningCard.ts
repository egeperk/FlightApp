export interface IPlanningProbs {
    isVisible?: boolean,
    departure: string,
    destination: string,
    onChangeLocations: () => void,
    onSelectLocation: () => void
}