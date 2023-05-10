import { StyleSheet } from "react-native";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";


const useStyles = () => {
    const { colors } = useContext(ThemeContext);

    const style = StyleSheet.create({
       container: {
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-evenly",
            paddingHorizontal: 18,
            paddingBottom: 16
       },
       childContainer: {
        flex: 1,
        justifyContent: "flex-start"
       },
       head: {
        fontSize: 14,
        color: colors.tertiary.extras?.black_shark,
        marginStart: 12
       },
       optionText: {
        fontSize: 14,
        color: colors.tertiary.extras?.black_shark,
        fontWeight: "bold",
        lineHeight: 21,
        marginStart: 12,
        paddingTop: 8,
       }
    })
    return style;
};

export default useStyles;