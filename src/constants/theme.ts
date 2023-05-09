import { ColorSchemeName } from "react-native/types";
import { IBaseTheme, IColorPalette } from "../types/theme";



export const themeColor: IColorPalette = {
    primary: {
        main: "#1A94FF",
    },
    secondary: {
        main: "#FFFFFF",
        mid: "#27272A",
        light: "#808089",
        background: "#F5F5FA",
        switch: "#C4C4CF"
    },
    tertiary: {
        main: "#000000",
        divider: "#EBEBF0"
    }
}

export const getTheme = (colorScheme: ColorSchemeName): IBaseTheme => ({
    colors:
      colorScheme === "dark"
        ? themeColor
        : themeColor,
  });