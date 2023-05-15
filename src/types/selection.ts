import { ReactNode } from "react";
import { DATA_TYPE } from ".";

export interface ISelectionCardProbs {
    isVisible?: boolean,
    svg?: ReactNode,
    header?: string,
    selectedRoute?: string,
    switchOpacity?: number,
    switchValue?: boolean,
    onClick?: () => void,
    onSwitch?: () => void,
    onClose?: () => void
}