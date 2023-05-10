import { StyleSheet } from "react-native";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";


const useStyles = () => {
    const { colors } = useContext(ThemeContext);

    const style = StyleSheet.create({
      divider: {
        height: 1,
        backgroundColor: colors.tertiary.extras?.divider,
        marginBottom: 16,
      }
    })
    return style;
};

export default useStyles;