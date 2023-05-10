import React, {useContext} from 'react';
import Svg, {Path} from 'react-native-svg';
import {ISvgIcon} from '../types';
import {ThemeContext} from '../context/ThemeContext';

const Destination = ({color, size = 20}: ISvgIcon) => {
  const {colors} = useContext(ThemeContext);
  return (
    <Svg width={size} height={size * 1.1}>
      <Path
        fill={color ?? colors.tertiary.extras?.gray_jumbo}
        d="m2.163 11.119-.256-6.132a.5.5 0 0 1 .631-.503l.79.215a1 1 0 0 1 .666.593L4.74 7.15l2.897.777L6.786.788A.5.5 0 0 1 7.49.274l1.556.708a1 1 0 0 1 .538.605l2.4 7.504 4.588 1.23a2.25 2.25 0 1 1-1.164 4.347l-13.245-3.55ZM1 17a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2H1Z"
      />
    </Svg>
  );
};
export default Destination;
