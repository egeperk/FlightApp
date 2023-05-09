import React, {useContext} from 'react';
import Svg, {Path} from 'react-native-svg';
import {ThemeContext} from '../context/ThemeContext';
import {ISvgIcon} from '../types';

const Cross = ({color, style, size = 10}: ISvgIcon) => {
  const {colors} = useContext(ThemeContext);

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 10 10"
      fill="none"
      style={style}>
      <Path
        d="M1.42259 0.244078C1.09715 -0.0813593 0.569515 -0.0813593 0.244078 0.244078C-0.0813592 0.569515 -0.0813592 1.09715 0.244078 1.42259L3.82149 5L0.244078 8.57741C-0.0813593 8.90285 -0.0813592 9.43049 0.244078 9.75592C0.569515 10.0814 1.09715 10.0814 1.42259 9.75592L5 6.17851L8.57741 9.75592C8.90285 10.0814 9.43049 10.0814 9.75592 9.75592C10.0814 9.43049 10.0814 8.90285 9.75592 8.57741L6.17851 5L9.75592 1.42259C10.0814 1.09715 10.0814 0.569515 9.75592 0.244077C9.43048 -0.0813592 8.90285 -0.0813591 8.57741 0.244078L5 3.82149L1.42259 0.244078Z"
        fill={color ?? colors.secondary.main}
      />
    </Svg>
  );
};

export default Cross;
