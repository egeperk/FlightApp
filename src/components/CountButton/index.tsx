import {TouchableWithoutFeedback, View} from 'react-native';
import useStyles from './styles';
import {Svg} from 'react-native-svg';
import {ICountButtonProbs} from '../../types/button';

const CountButton = ({svg, color, opacity, onClick}: ICountButtonProbs) => {
  const {container} = useStyles();
  return (
    <TouchableWithoutFeedback onPress={onClick}>
      <View style={[container, {borderColor: color, opacity: opacity}]}>
        {svg}
      </View>
    </TouchableWithoutFeedback>
  );
};
export default CountButton;
