import { useContext } from "react";
import { StyleSheet } from "react-native/types"
import { ThemeContext } from "../../context/ThemeContext";

const useStyles = () => {
    const {colors} =useContext(ThemeContext);

    const style = StyleSheet.create({
        inputBox: {
            flex: 1,
            marginHorizontal: 16,
            borderWidth: 1,
            borderRadius: 4,
        }
    })
    return style;
}
export default useStyles;