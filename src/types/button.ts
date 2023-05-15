import { ReactNode } from "react"
import { ViewStyle } from "react-native/types"

export interface IAppButtonProbs {
    title: string,
    onClick?: () => void
}

export interface ISvgCardProbs {
    svg: ReactNode,
    style?: ViewStyle
}

export interface ICountButtonProbs {
    svg: ReactNode,
    color?: string,
    opacity?: number,
    onClick?: () => void
}

export interface IButtonRowProbs {
    margin: number
}