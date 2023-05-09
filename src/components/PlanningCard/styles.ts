import { StyleSheet } from "react-native";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";


const useStyles = () => {
    const { colors } = useContext(ThemeContext);

    const style = StyleSheet.create({
       container: {
        flex: 1,
        backgroundColor: colors.secondary.main,
        borderRadius: 8,
        paddingTop: 12,
        marginHorizontal: 16,
        marginTop: -24
       },
       icon: {
        position: 'absolute',
        right: 16,
        marginTop: 48
       }
    })
    return style;
};

export default useStyles;