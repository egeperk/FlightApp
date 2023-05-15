import {Text, View} from 'react-native';
import useStyles from './styles';
import {IRecentSearchCardProbs} from '../../types/cards';
import {textContent} from '../../constants/texts';

const RecentSearchCard = ({
  fromLocation,
  toLocation,
  departureDate,
  returnDate,
}: IRecentSearchCardProbs) => {
  const {container, locationsText, datesText} = useStyles();

  return (
    <View style={container}>
      <Text style={locationsText}>{fromLocation + ' - ' + toLocation}</Text>
      <Text style={datesText}>
        {textContent.departureWithDots + departureDate}{' '}
        <Text>{' - ' + textContent.return + returnDate}</Text>
      </Text>
    </View>
  );
};

export default RecentSearchCard;
