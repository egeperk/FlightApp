import { useContext } from "react";
import { StyleSheet } from "react-native";
import { ThemeContext } from "../../context/ThemeContext";

const useStyles = () => {
    const {colors} = useContext(ThemeContext);

    const style = StyleSheet.create({
        recentHeader: {
            color: colors.tertiary.extras?.black_shark,
            fontSize: 18,
            fontWeight: 'bold',
            marginVertical: 12,
            marginStart: 16
          }
    })

    return style;
}
export default useStyles;