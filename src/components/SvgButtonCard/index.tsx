import {View} from 'react-native';
import {ISvgCardProbs} from '../../types/button';
import useStyles from './styles';

const SvgButtonCard = ({svg}: ISvgCardProbs) => {
  const {circle} = useStyles();
  return (
    <View style={circle}>
      <View>{svg}</View>
    </View>
  );
};

export default SvgButtonCard;
