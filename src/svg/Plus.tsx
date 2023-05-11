import React, {useContext} from 'react';
import Svg, {Path} from 'react-native-svg';
import {ThemeContext} from '../context/ThemeContext';
import {ISvgIcon} from '../types';

const Plus = ({color, style, onClick, size = 14}: ISvgIcon) => {
  const {colors} = useContext(ThemeContext);

  return (
    <Svg width={size} height={size} fill="none" style={style}>
      <Path
        fill={color ?? colors.primary.main}
        d="M8 1.5a1 1 0 0 0-2 0v5H1a1 1 0 1 0 0 2h5v5a1 1 0 1 0 2 0v-5h5a1 1 0 1 0 0-2H8v-5Z"
      />
    </Svg>
  );
};

export default Plus;
