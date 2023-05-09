import Svg, {G, Path, Rect} from 'react-native-svg';
import {ISvgIcon} from '../types';
import {useContext} from 'react';
import {ThemeContext} from '../context/ThemeContext';

const SwitchDest = ({color, style, onClick, size = 24}: ISvgIcon) => {
  const {colors} = useContext(ThemeContext);

  return (
    <Svg fill="none" width={size} height={size} style={style} onPress={onClick}>
      <G>
        <Path
          fill={color ?? colors.primary.main}
          fillRule="evenodd"
          d="M8.195 5.529c.26-.26.683-.26.943 0l2.667 2.666a.667.667 0 0 1-.943.943L9.333 7.609v9.058a.667.667 0 1 1-1.333 0V7.609L6.47 9.138a.667.667 0 1 1-.942-.943L8.195 5.53Zm7.138 1.138c.368 0 .667.298.667.666v9.057l1.529-1.528a.667.667 0 0 1 .942.943l-2.666 2.666a.667.667 0 0 1-.943 0l-2.667-2.666a.667.667 0 1 1 .943-.943l1.529 1.528V7.333c0-.368.298-.666.666-.666Z"
          clipRule="evenodd"
        />
      </G>
      <Rect
        width={size - 1}
        height={size - 1}
        x={0.5}
        y={0.5}
        stroke="#1A94FF"
        rx={(size - 1) / 2}
      />
    </Svg>
  );
};

export default SwitchDest;
