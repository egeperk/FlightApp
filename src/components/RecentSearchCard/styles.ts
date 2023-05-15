import { useContext } from "react";
import { Dimensions, StyleSheet } from "react-native"
import { ThemeContext } from "../../context/ThemeContext";
const deviceWidth = Dimensions.get("window").width

const useStyles = () => {

const {colors} = useContext(ThemeContext);
    
    const style = StyleSheet.create({
        container: {
            backgroundColor: colors.secondary.main,
            marginEnd: 8,
            borderRadius: 8,
            paddingHorizontal: 16,
            paddingVertical: 8
        },
        locationsText: {
            fontSize: 14,
            color: colors.primary.main,
            paddingBottom: 4
        },
        datesText: {
            fontSize: 12,
            color: colors.tertiary.extras?.gray_jumbo
        }
    })

    return style;

}

export default useStyles;