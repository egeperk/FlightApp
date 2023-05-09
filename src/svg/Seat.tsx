import Svg, {Path} from 'react-native-svg';
import {ISvgIcon} from '../types';
import React, {useContext} from 'react';
import {ThemeContext} from '../context/ThemeContext';

const Seat = ({color, size = 20}: ISvgIcon) => {
  const {colors} = useContext(ThemeContext);
  return (
    <Svg fill="none" width={size} height={size}>
      <Path
        fill={color ?? colors.secondary.light}
        d="M4.5 0h12a2 2 0 0 1 2 2v3.5H18a4 4 0 0 0-4 4v1H7v-1a4 4 0 0 0-4-4h-.5V2a2 2 0 0 1 2-2Z"
      />
      <Path
        fill={color ?? colors.secondary.light}
        d="M3 7A2.5 2.5 0 0 0 .5 9.5V16a1 1 0 0 0 1 1h1v2a1 1 0 1 0 2 0v-2h12v2a1 1 0 1 0 2 0v-2h1a1 1 0 0 0 1-1V9.5a2.5 2.5 0 0 0-5 0V11a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1V9.5A2.5 2.5 0 0 0 3 7Z"
      />
    </Svg>
  );
};
export default Seat;
