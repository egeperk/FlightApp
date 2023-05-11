import { ViewStyle } from "react-native";

export interface ISvgIcon {
    opacity?: number,
    size?: number;
    color?: string;
    style?: ViewStyle;
    onClick?: () => void;
  }

  export enum DATA_TYPE {
    DEPARTURE,
    DESTINATION,
    PASSENGER
  }