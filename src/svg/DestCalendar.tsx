import Svg, {Path} from 'react-native-svg';
import {ISvgIcon} from '../types';
import React, {useContext} from 'react';
import {ThemeContext} from '../context/ThemeContext';

const DestCalendar = ({color, size = 20}: ISvgIcon) => {
  const {colors} = useContext(ThemeContext);
  return (
    <Svg fill="none" width={size} height={size}>
      <Path
        fill={color ?? colors.secondary.light}
        d="M13 1a1 1 0 1 1 2 0v1h1a4 4 0 0 1 4 4v12c0 1.109-.903 2-2.003 2H13.5a1 1 0 1 1 0-2h4.498l.002-.002V10H1a1 1 0 0 1-1-1V6a4 4 0 0 1 4-4h1V1a1 1 0 0 1 2 0v1h6V1Z"
      />
      <Path
        fill={color ?? colors.secondary.light}
        d="M4.707 13.707a1 1 0 1 0-1.414-1.414l-3 3a1 1 0 0 0 0 1.414l3 3a1 1 0 0 0 1.414-1.414L3.414 17H10a1 1 0 1 0 0-2H3.414l1.293-1.293Z"
      />
    </Svg>
  );
};
export default DestCalendar;
