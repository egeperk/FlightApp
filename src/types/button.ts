import { ReactNode } from "react"
import { ViewStyle } from "react-native/types"

export interface IAppButtonProbs {
    title: string,
    onClick: () => void
}

export interface ISvgCardProbs {
    svg: ReactNode,
    style?: ViewStyle
}