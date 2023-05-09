import Svg, {Path} from 'react-native-svg';
import {ISvgIcon} from '../types';
import React, {useContext} from 'react';
import {ThemeContext} from '../context/ThemeContext';

const Passenger = ({color, size = 16}: ISvgIcon) => {
  const {colors} = useContext(ThemeContext);
  return (
    <Svg fill="none" width={size} height={size * 1.06}>
      <Path
        fill={color ?? colors.secondary.light}
        d="M10.425 9.374a5 5 0 1 0-4.849 0 8.008 8.008 0 0 0-5.514 6.628C-.006 16.55.448 17 1 17h14c.552 0 1.007-.45.938-.998a8.008 8.008 0 0 0-5.514-6.628Z"
      />
    </Svg>
  );
};
export default Passenger;
