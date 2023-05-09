import React from "react";
import { IBaseTheme } from "../types/theme";
import { getTheme } from "../constants/theme";

export const ThemeContext = React.createContext<IBaseTheme>(getTheme("light"));