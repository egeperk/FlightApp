import React, {useContext} from 'react';
import Svg, {Path} from 'react-native-svg';
import {ThemeContext} from '../context/ThemeContext';
import {ISvgIcon} from '../types';

const Adult = ({color, style, onClick, size = 20}: ISvgIcon) => {
  const {colors} = useContext(ThemeContext);

  return (
    <Svg width={size} height={size} fill="none" style={style}>
      <Path
        fill={color ?? colors.tertiary.extras?.gray_jumbo}
        d="M14 4a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
      />
      <Path
        fill={color ?? colors.tertiary.extras?.gray_jumbo}
        d="M3.89 7.99a1.5 1.5 0 0 1 2.12-.1C7.138 8.919 8.523 9.5 10 9.5c1.477 0 2.862-.582 3.99-1.61a1.5 1.5 0 0 1 2.02 2.22 9.363 9.363 0 0 1-2.575 1.674l1.167 6.127a1.76 1.76 0 0 1-3.435.756l-.546-2.182a.64.64 0 0 0-1.242 0l-.546 2.182a1.76 1.76 0 0 1-3.435-.756l1.167-6.127A9.362 9.362 0 0 1 3.99 10.11a1.5 1.5 0 0 1-.1-2.119Z"
      />
    </Svg>
  );
};

export default Adult;
