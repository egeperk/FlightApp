import { useContext } from "react"
import { ThemeContext } from "../../context/ThemeContext"
import { Dimensions, StyleSheet } from "react-native";
const deviceHeight = Dimensions.get("window").height

const useStyles = () => {
    const {colors} = useContext(ThemeContext);

  
    const style = StyleSheet.create({
        container: {
            width: '100%',
            margin: 0
        },
        modalContainer: {
            maxHeight: deviceHeight,
            backgroundColor: colors.secondary.main,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            paddingBottom: 32
        },
        overlay: {
            flex: 1,
            justifyContent: 'flex-end'
          },
        rowContainer: {
            flexDirection: "row",
            paddingVertical: 12,
            backgroundColor: colors.tertiary.extras?.background,
            borderTopWidth: 1,
            borderColor: colors.tertiary.extras?.gray_mischka
        },
        headerText : {
            fontSize: 12,
            lineHeight: 18,
            textAlign: "center",
            color: colors.tertiary.extras?.black_shark
        },
        dateText: {
            fontSize: 14,
            fontWeight: "bold",
            lineHeight: 21,
            marginTop: 2,
            textAlign: "center",
            color: colors.tertiary.extras?.gray_jumbo
        },
        divider: {
            height: 24,
            width: 1,
            backgroundColor: colors.tertiary.extras?.gray_mischka,
            alignSelf: "center"
        }
    })
    return style;
}

export default useStyles;