import { useContext } from "react"
import { ThemeContext } from "../../context/ThemeContext"
import { Dimensions, StyleSheet } from "react-native";
const deviceHeight = Dimensions.get("window").height

const useStyle = () => {
    const {colors} = useContext(ThemeContext);

    const style = StyleSheet.create({
        headerContainer: {
            flexDirection: "row",
            alignItems: "center",
            margin: 16
        },
        headerText: {
            flex: 1,
            textAlign: "center",
            fontSize: 16,
            fontWeight: "bold",
            color: colors.tertiary.extras?.black_shark
        }
    })
    return style;
}

export default useStyle;