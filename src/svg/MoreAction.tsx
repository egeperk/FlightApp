import React, {useContext} from 'react';
import Svg, {Path} from 'react-native-svg';
import {ThemeContext} from '../context/ThemeContext';
import {ISvgIcon} from '../types';

const MoreAction = ({color, style, size = 14}: ISvgIcon) => {
  const {colors} = useContext(ThemeContext);

  return (
    <Svg
      width={size}
      height={size / 3.5}
      viewBox="0 0 14 4"
      fill="none"
      style={style}>
      <Path
        d="M2.8335 2C2.8335 2.69036 2.27385 3.25 1.5835 3.25C0.89314 3.25 0.333496 2.69036 0.333496 2C0.333496 1.30964 0.89314 0.75 1.5835 0.75C2.27385 0.75 2.8335 1.30964 2.8335 2Z"
        fill={color ?? colors.secondary.main}
      />
      <Path
        d="M13.6668 2C13.6668 2.69036 13.1072 3.25 12.4168 3.25C11.7265 3.25 11.1668 2.69036 11.1668 2C11.1668 1.30964 11.7265 0.75 12.4168 0.75C13.1072 0.75 13.6668 1.30964 13.6668 2Z"
        fill={color ?? colors.secondary.main}
      />
      <Path
        d="M7.00016 3.25C7.69052 3.25 8.25016 2.69036 8.25016 2C8.25016 1.30964 7.69052 0.75 7.00016 0.75C6.30981 0.75 5.75016 1.30964 5.75016 2C5.75016 2.69036 6.30981 3.25 7.00016 3.25Z"
        fill={color ?? colors.secondary.main}
      />
    </Svg>
  );
};

export default MoreAction;
