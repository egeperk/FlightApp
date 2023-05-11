import { useContext } from "react";
import { StyleSheet } from "react-native";
import { ThemeContext } from "../../context/ThemeContext";

const useStyles = () => {
    const {colors} = useContext(ThemeContext);

    const style = StyleSheet.create({
        container: {
            marginHorizontal: 24,
            marginTop: 12,
            alignItems: "center"
        },
        upperText: {
            fontSize: 16,
            fontWeight: "bold",
            marginTop:12,
            lineHeight: 24,
            color: colors.tertiary.extras?.black_shark
        },
        lowerText: {
            fontSize: 14,
            textAlign: "center",
            lineHeight: 21,
            color: colors.tertiary.extras?.black_shark
        }
    })
    return style;
}
export default useStyles;