import React, {useContext} from 'react';
import Svg, {Path} from 'react-native-svg';
import {ThemeContext} from '../context/ThemeContext';
import {ISvgIcon} from '../types';

const Minus = ({color, style, size = 14}: ISvgIcon) => {
  const {colors} = useContext(ThemeContext);

  return (
    <Svg width={size} height={size / 4.6} fill="none" style={style}>
      <Path
        fill={color ?? colors.tertiary.main}
        fillRule="evenodd"
        d="M14 1.5a1 1 0 0 1-1 1H1a1 1 0 0 1 0-2h12a1 1 0 0 1 1 1Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export default Minus;
