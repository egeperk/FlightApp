import {View} from 'react-native';
import useStyles from './styles';
import Adult from '../../svg/Adult';
import {Text} from 'react-native';
import CountButton from '../CountButton';
import Minus from '../../svg/Minus';
import {useContext} from 'react';
import {ThemeContext} from '../../context/ThemeContext';
import Plus from '../../svg/Plus';
import {IPassengerCountProbs} from '../../types/cards';
import {textContent} from '../../constants/texts';

const PassengerCount = ({
  svg,
  type,
  description,
  count,
  onChange,
}: IPassengerCountProbs) => {
  const {container, countBar, flexEnd, flexStart, typeText, typeDesc} =
    useStyles();
  const {colors} = useContext(ThemeContext);

  const handleCountChange = (increment: boolean, type: string) => {
    if (onChange) {
      if (type === textContent.adult) {
        if (increment || count > 1) {
          onChange(increment);
        }
      } else {
        if (count > 0 || increment) {
          onChange(increment);
        }
      }
    }
  };

  return (
    <View style={container}>
      <View style={flexStart}>
        {svg}
        <View style={{marginStart: 10}}>
          <Text style={typeText}>{type}</Text>
          <Text style={typeDesc}>{description}</Text>
        </View>
      </View>
      <View style={flexEnd}>
        <CountButton
          svg={<Minus />}
          color={colors.tertiary.main}
          opacity={0.15}
          onClick={() => handleCountChange(false, type)}
        />
        <View style={countBar}>
          <Text style={typeText}>{count}</Text>
        </View>
        <CountButton
          svg={<Plus />}
          color={colors.primary.main}
          onClick={() => handleCountChange(true, type)}
        />
      </View>
    </View>
  );
};
export default PassengerCount;
