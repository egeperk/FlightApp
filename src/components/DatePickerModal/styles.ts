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
            maxHeight: deviceHeight * 0.8,
            backgroundColor: colors.secondary.main,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            paddingBottom: 32
        },
        overlay: {
            flex: 1,
            justifyContent: 'flex-end'
          },
    })
    return style;
}

export default useStyles;