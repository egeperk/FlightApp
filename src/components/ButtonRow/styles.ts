import { useContext, useMemo } from "react";
import { StyleSheet } from "react-native";
import { ThemeContext } from "../../context/ThemeContext";

const useStyles = () => {
    const {colors} = useContext(ThemeContext);
    const style = useMemo(
      () =>
        StyleSheet.create({
          buttonRow: {
            position: 'absolute',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            top: 48,
            start: 12,
            end: 28,
          },
          flexStart: {
            alignSelf: 'flex-start',
          },
          flexEnd: {
            flexDirection: 'row',
            alignItems: 'center',
          }
        }),
      [colors.primary.main, colors.secondary.main, colors.tertiary],
    );
  
    return style;
  };

  export default useStyles;