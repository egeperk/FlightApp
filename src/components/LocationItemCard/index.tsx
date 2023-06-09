import {Text, TouchableOpacity, View} from 'react-native';
import useStyle from './styles';
import Cross from '../../svg/Cross';
import {ILocationCardProbs} from '../../types/cards';
import {useContext} from 'react';
import {ThemeContext} from '../../context/ThemeContext';

const LocationItemCard = ({
  isCrossVisible,
  locationText,
  onDelete,
}: ILocationCardProbs) => {
  const {container, text} = useStyle();
  const {colors} = useContext(ThemeContext);

  return (
    <View style={container}>
      <Text style={text}>{locationText}</Text>
      {isCrossVisible && (
        <Cross
          size={12}
          color={colors.tertiary.extras?.gray_jumbo}
          onClick={onDelete}
        />
      )}
    </View>
  );
};
export default LocationItemCard;
