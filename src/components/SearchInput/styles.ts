import { useContext } from "react";
import { StyleSheet } from "react-native"
import { ThemeContext } from "../../context/ThemeContext";

const useStyles = () => {
    const {colors} =useContext(ThemeContext);


    const style = StyleSheet.create({
        container: {
            flexDirection: "row",
            alignItems: 'center',
            borderWidth: 1,
            borderColor: colors.tertiary.extras?.gray_mischka,
            marginHorizontal: 16,
            borderRadius: 4,
        },
        inputBox: {
            flex: 1,
            color: colors.tertiary.extras?.black_shark,
            fontSize: 16,
            flexWrap: "wrap",
            paddingVertical: 10
        },
        icon: {
            marginStart: 16,
            marginEnd: 12
        }
    })
    return style;
}
export default useStyles;