import { useContext } from "react"
import { ThemeContext } from "../../context/ThemeContext"
import { Dimensions, StyleSheet } from "react-native";
const deviceHeight = Dimensions.get("window").height

const useStyle = () => {
    const {colors} = useContext(ThemeContext);

    const style = StyleSheet.create({
        container: {
            width: '100%',
            margin: 0
        },
        modalContainer: {
            flex: 1,
            marginTop: deviceHeight / 5,
            backgroundColor: colors.secondary.main,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8
        },
        overlay: {
            flex: 1,
            justifyContent: 'center'
          },
    })
    return style;
}

export default useStyle;