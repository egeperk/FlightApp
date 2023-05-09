export interface IColorSet {
    main: string;
    mid?: string;
    light?: string;
    background?: string;
    divider?: string,
    switch?: string
  }
  
  export interface IColorPalette {
    primary: IColorSet;
    secondary: IColorSet;
    tertiary: Partial<IColorSet>;
  }
  
  export interface IBaseTheme {
    colors: IColorPalette;
  }