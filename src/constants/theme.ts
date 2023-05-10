import { ColorSchemeName } from "react-native/types";
import { IBaseTheme, IColorPalette } from "../types/theme";



export const themeColor: IColorPalette = {
    primary: {
        main: "#1A94FF"
    },
    secondary: {
        main: "#FFFFFF"
    },
    tertiary: {
        main: "#000000",
        extras : {
            divider: "#EBEBF0",
            background: "#F5F5FA",
            switch: "#C4C4CF",
            black_shark: "#27272A",
            gray_jumbo: "#808089",
            gray_mischka: "#DDDDE3"
        }
    }
 
}

export const getTheme = (colorScheme: ColorSchemeName): IBaseTheme => ({
    colors:
      colorScheme === "dark"
        ? themeColor
        : themeColor,
  });