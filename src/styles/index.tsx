import {useContext, useMemo} from 'react';
import {ThemeContext} from '../context/ThemeContext';
import {StyleSheet} from 'react-native';

const useStyles = () => {
  const {colors} = useContext(ThemeContext);
  const style = useMemo(
    () =>
      StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: colors.tertiary.extras?.background,
        },
      }),
    [colors.primary.main, colors.secondary.main, colors.tertiary],
  );

  return style;
};

export default useStyles;
