import {Image, Text, View} from 'react-native';
import useStyles from './styles';
import {} from 'react-native-svg';
import {textContent} from '../../constants/texts';
import {IEmptyPageCardProbs} from '../../types/cards';

const EmptySearch = ({isVisible}: IEmptyPageCardProbs) => {
  const {container, upperText, lowerText} = useStyles();

  return (
    <View>
      {isVisible && (
        <View style={container}>
          <Image
            source={require('../../../assets/images/empty_image.png')}
            style={{aspectRatio: 2, resizeMode: 'contain'}}
          />
          <Text style={upperText}>{textContent.noResult}</Text>
          <Text style={lowerText}>{textContent.noResultDesc}</Text>
        </View>
      )}
    </View>
  );
};
export default EmptySearch;
