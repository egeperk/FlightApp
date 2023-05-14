import { useContext } from "react"
import { ThemeContext } from "../../context/ThemeContext"
import { Dimensions, StyleSheet } from "react-native"

const useStyles = () => {
    const {colors} = useContext(ThemeContext)

    const style = StyleSheet.create({
        dayContainer: {
          alignItems: 'center',
          justifyContent: 'center',
          width: Dimensions.get('window').width / 7.5,
          aspectRatio: 1,
        },
        dayText: {
          fontSize: 16,
          color: 'white',
        },
        calendarContainer: {
          flexDirection: 'row',
          alignItems: 'center',
        },
        priceText: {
          fontSize: 10,
          fontWeight: 'bold',
          textAlignVertical: 'bottom',
          color: colors.secondary.main,
          top: 8,
          bottom: 0,
        },
        todayContainer: {
            alignItems: 'center',
            justifyContent: 'center',
            width: Dimensions.get('window').width / 7.5,
            borderWidth: 1,
            borderColor: colors.primary.main,
            borderRadius: 8,
            backgroundColor: colors.secondary.main,
            aspectRatio: 1,
        }
      });
    return style
}
export default useStyles;