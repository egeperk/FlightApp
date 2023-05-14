export type IExtrasSet = Partial<
  Record<
    | "divider"
    | "background"
    | "switch"
    | "black_shark"
    | "gray_jumbo"
    | "gray_mischka", 
    string
  >
>;

export interface IColorSet {
    main: string;
    light?: string,
    extras?: IExtrasSet;
  }
  
  export interface IColorPalette {
    primary: IColorSet;
    secondary: IColorSet;
    tertiary: Partial<IColorSet>;
  }
  
  export interface IBaseTheme {
    colors: IColorPalette;
  }