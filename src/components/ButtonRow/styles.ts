import { useContext, useMemo } from "react";
import { StyleSheet } from "react-native";
import { ThemeContext } from "../../context/ThemeContext";

const useStyles = () => {
    const {colors} = useContext(ThemeContext);
    const style = useMemo(
      () =>
        StyleSheet.create({
          buttonRow: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginHorizontal: 12,
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