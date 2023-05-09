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
            color: colors.secondary.light,       
            fontSize: 14,
            fontWeight: "bold",
            marginHorizontal: 10,
            paddingBottom: 16,
            marginTop: 4
        },
        icon : {
            flex: 1,
            position: "absolute",
            top: 4,
            right: 16,
            zIndex: 999
        }
    })
    return style;
};

export default useStyles;