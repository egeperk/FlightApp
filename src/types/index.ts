import { ViewStyle } from "react-native";

export interface ISvgIcon {
    size?: number;
    color?: string;
    style?: ViewStyle;
    onClick?: () => void;
  }