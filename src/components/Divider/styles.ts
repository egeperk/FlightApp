import { StyleSheet } from "react-native";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";


const useStyles = () => {
    const { colors } = useContext(ThemeContext);

    const style = StyleSheet.create({
      divider: {
        flex: 1,
        height: 1,
        backgroundColor: colors.tertiary.divider,
        marginBottom: 16,
        marginHorizontal: 16
      }
    })
    return style;
};

export default useStyles;