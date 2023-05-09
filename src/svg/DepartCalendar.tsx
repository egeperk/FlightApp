import Svg, {Path} from 'react-native-svg';
import {ISvgIcon} from '../types';
import React, {useContext} from 'react';
import {ThemeContext} from '../context/ThemeContext';

const DepartCalendar = ({color, size = 20}: ISvgIcon) => {
  const {colors} = useContext(ThemeContext);
  return (
    <Svg fill="none" width={size} height={size}>
      <Path
        fill={color ?? colors.secondary.light}
        d="M6 0a1 1 0 0 1 1 1v1h6V1a1 1 0 1 1 2 0v1h1a4 4 0 0 1 4 4v3a1 1 0 0 1-1 1H2v7.998l.002.002H6.5a1 1 0 1 1 0 2H2.003C.903 20 0 19.109 0 18V6a4 4 0 0 1 4-4h1V1a1 1 0 0 1 1-1Z"
      />
      <Path
        fill={color ?? colors.secondary.light}
        d="m16.707 12.293 3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414L16.586 17H10a1 1 0 1 1 0-2h6.586l-1.293-1.293a1 1 0 0 1 1.414-1.414Z"
      />
    </Svg>
  );
};
export default DepartCalendar;
