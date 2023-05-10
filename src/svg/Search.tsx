import Svg, {Path} from 'react-native-svg';
import {ISvgIcon} from '../types';
import React, {useContext} from 'react';
import {ThemeContext} from '../context/ThemeContext';

const Search = ({color, style, size = 20}: ISvgIcon) => {
  const {colors} = useContext(ThemeContext);
  return (
    <Svg fill="none" width={size} height={size} style={style}>
      <Path
        fill={color ?? colors.tertiary.extras?.gray_jumbo}
        fillRule="evenodd"
        d="M8 0a8 8 0 1 0 4.906 14.32l5.387 5.387a1 1 0 0 0 1.414-1.414l-5.387-5.387A8 8 0 0 0 8 0ZM2 8a6 6 0 1 1 12 0A6 6 0 0 1 2 8Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
export default Search;
