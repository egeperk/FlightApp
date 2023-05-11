import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { StyleSheet } from "react-native";

const useStyles = () => {
    const {colors} = useContext(ThemeContext);

    const style = StyleSheet.create({
        container: {
            justifyContent: "center",
            alignItems: "center",
            height: 40,
            width: 40,
            borderWidth: 1,
            borderRadius: 4,
            backgroundColor: colors.secondary.main,
        }
    })
    return style;
}
export default useStyles;