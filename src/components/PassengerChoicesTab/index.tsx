import {Text, Touchable, TouchableWithoutFeedback, View} from 'react-native';
import useStyles from './styles';
import Passenger from '../../svg/Passanger';
import {textContent} from '../../constants/texts';
import Seat from '../../svg/Seat';
import {IPassengerChoiceTabProbs} from '../../types/cards';

const PassengerChoicesTab = ({onPassangerClick}: IPassengerChoiceTabProbs) => {
  const {container, head, optionText, childContainer} = useStyles();

  return (
    <View style={container}>
      <Passenger />
      <TouchableWithoutFeedback onPress={onPassangerClick}>
        <View style={childContainer}>
          <Text style={head}>{textContent.passanger}</Text>
          <Text style={optionText}>{1 + ' ' + textContent.passanger}</Text>
        </View>
      </TouchableWithoutFeedback>
      <Seat />
      <View style={childContainer}>
        <Text style={head}>{textContent.class}</Text>
        <Text style={optionText}>{textContent.economy}</Text>
      </View>
    </View>
  );
};
export default PassengerChoicesTab;
