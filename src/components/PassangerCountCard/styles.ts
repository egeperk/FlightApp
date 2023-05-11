import { useContext } from "react"
import { ThemeContext } from "../../context/ThemeContext"
import { StyleSheet } from "react-native";

const useStyles = () => {
    const {colors} = useContext(ThemeContext);

    const style = StyleSheet.create({
        container: {
            flexDirection: "row",
            alignItems: 'center',
            justifyContent: 'space-between',
            marginHorizontal: 16,
            marginBottom: 8,
            marginTop: -8 
        },
        typeText: {
            fontSize: 14,
            fontWeight: "bold",
            color: colors.tertiary.extras?.black_shark,
        },
        typeDesc: {
            fontSize: 12,
            color: colors.tertiary.extras?.gray_jumbo,
        },
        countBar: {
            height: 40,
            width: 60,
            borderWidth: 1,
            borderRadius: 4,
            marginHorizontal: 4,
            borderColor: colors.tertiary.extras?.gray_mischka,
            justifyContent: "center",
            alignItems: "center"
        },
        flexStart: {
            flexDirection: "row",            
            alignSelf: 'center'
          },
        flexEnd: {
            flexDirection: 'row',
            alignItems: 'center',
          }
    })
    return style;
}

export default useStyles;