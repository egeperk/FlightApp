import Svg, {Path} from 'react-native-svg';
import {ISvgIcon} from '../types';
import React, {useContext} from 'react';
import {ThemeContext} from '../context/ThemeContext';

const Departure = ({color, size = 20}: ISvgIcon) => {
  const {colors} = useContext(ThemeContext);
  return (
    <Svg fill="none" width={size * 1.18} height={size}>
      <Path
        fill={color ?? colors.tertiary.extras?.gray_jumbo}
        d="M4.375 13.064 1.087 7.88a.5.5 0 0 1 .295-.751l.793-.209a1 1 0 0 1 .872.18L4.622 8.34l2.898-.777-4.307-5.756a.5.5 0 0 1 .352-.798L5.267.843a1 1 0 0 1 .769.256l5.83 5.298 4.588-1.229a2.25 2.25 0 0 1 1.165 4.347L4.375 13.064ZM1 16a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2H1Z"
      />
    </Svg>
  );
};
export default Departure;
