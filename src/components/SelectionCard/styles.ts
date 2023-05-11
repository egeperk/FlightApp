import { StyleSheet } from "react-native";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";


const useStyles = () => {
    const { colors } = useContext(ThemeContext);

    const style = StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: "row",
            paddingHorizontal: 18
        },
        rowContainer: {
            flexDirection: "row",
            flex: 1,
            position: "absolute",
            alignItems: "center",
            top: 4,
            right: 16,
        },
        childContainer: {
            flex: 1,
            justifyContent: "flex-start"
        },
        head : {
            color: colors.tertiary.main,
            fontSize: 14,
            marginHorizontal: 10
        },
        selection: {
            fontSize: 14,
            fontWeight: "bold",
            marginHorizontal: 10,
            paddingBottom: 16,
            marginTop: 4
        },
        icon : {
            marginStart: 6
        },
        switchText: {
            fontSize: 12,
            color: colors.tertiary.extras?.black_shark
        }
    })
    return style;
};

export default useStyles;