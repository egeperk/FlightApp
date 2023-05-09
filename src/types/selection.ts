import { ReactNode } from "react";

export interface ISelectionCardProbs {
    isVisible?: boolean,
    svg?: ReactNode,
    header?: string,
    selectedRoute?: string,
    switchOpacity?: number,
    switchValue?: boolean,
    onClick?: () => void,
    onSwitch?: () => void
}