import React, {useContext} from 'react';
import Svg, {Path} from 'react-native-svg';
import {ThemeContext} from '../context/ThemeContext';
import {ISvgIcon} from '../types';

const Favorites = ({color, style, size = 14}: ISvgIcon) => {
  const {colors} = useContext(ThemeContext);

  return (
    <Svg
      width={size}
      height={size * 1.3}
      viewBox="0 0 14 18"
      fill="none"
      style={style}>
      <Path
        d="M4.50016 7.33332C4.50016 6.87309 4.87326 6.49999 5.3335 6.49999H6.16683V5.66666C6.16683 5.20642 6.53993 4.83332 7.00016 4.83332C7.4604 4.83332 7.8335 5.20642 7.8335 5.66666V6.49999H8.66683C9.12707 6.49999 9.50016 6.87309 9.50016 7.33332C9.50016 7.79356 9.12707 8.16666 8.66683 8.16666H7.8335V8.99999C7.8335 9.46023 7.4604 9.83332 7.00016 9.83332C6.53993 9.83332 6.16683 9.46023 6.16683 8.99999V8.16666H5.3335C4.87326 8.16666 4.50016 7.79356 4.50016 7.33332Z"
        fill={color ?? colors.secondary.main}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0.333496 2.33332C0.333496 1.41285 1.07969 0.666656 2.00016 0.666656H12.0002C12.9206 0.666656 13.6668 1.41285 13.6668 2.33332V16.5C13.6668 16.8121 13.4924 17.0981 13.2148 17.241C12.9373 17.3838 12.6031 17.3595 12.3491 17.1781L7.00016 13.3574L1.65119 17.1781C1.39718 17.3595 1.06307 17.3838 0.785511 17.241C0.507952 17.0981 0.333496 16.8121 0.333496 16.5V2.33332ZM12.0002 2.33332L2.00016 2.33332V14.8807L6.5158 11.6552C6.80555 11.4483 7.19478 11.4483 7.48453 11.6552L12.0002 14.8807V2.33332Z"
        fill={color ?? colors.secondary.main}
      />
    </Svg>
  );
};

export default Favorites;
