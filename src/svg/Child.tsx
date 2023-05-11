import React, {useContext} from 'react';
import Svg, {Path} from 'react-native-svg';
import {ThemeContext} from '../context/ThemeContext';
import {ISvgIcon} from '../types';

const Child = ({color, style, onClick, size = 20}: ISvgIcon) => {
  const {colors} = useContext(ThemeContext);

  return (
    <Svg width={size} height={size} fill="none" style={style}>
      <Path
        fill={color ?? colors.tertiary.extras?.gray_jumbo}
        d="M14 4a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
      />
      <Path
        fill={color ?? colors.tertiary.extras?.gray_jumbo}
        d="M7 3a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM8.662 7h2.676a3 3 0 0 1 2.846 2.051l1.877 5.633A1 1 0 0 1 15.113 16H13l-.81 3.242a1 1 0 0 1-.97.758H8.78a1 1 0 0 1-.97-.758L7 16H4.887a1 1 0 0 1-.948-1.316L5.816 9.05A3 3 0 0 1 8.662 7Z"
      />
    </Svg>
  );
};

export default Child;
