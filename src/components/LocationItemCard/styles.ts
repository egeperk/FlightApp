import { useContext } from "react"
import { ThemeContext } from "../../context/ThemeContext"
import { StyleSheet } from "react-native";

const useStyle = () => {
    const {colors} = useContext(ThemeContext);

    const style = StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: "row",
            marginStart: 16,
            paddingBottom: 8,
            paddingEnd: 26,
            justifyContent: "space-between",
            alignItems:"center"
        },
        text: {
            fontSize: 16,
            color: colors.tertiary.extras?.black_shark
        }
    })
    return style
}
export default useStyle;