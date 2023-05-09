import { StyleSheet } from "react-native";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";


const useStyles = () => {
    const { colors } = useContext(ThemeContext);

    const style = StyleSheet.create({
        button : {
            backgroundColor: colors.primary.main,
            borderRadius: 4,
            marginHorizontal: 16,
            marginBottom: 12
        },
        text: {
            fontSize: 16,
            textAlign: "center",
            paddingVertical: 8,
            lineHeight: 24,
            color: colors.secondary.main
        }
    })
    return style;
};

export default useStyles;