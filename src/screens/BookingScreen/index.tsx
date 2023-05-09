import {Image, Text, ScrollView} from 'react-native';
import {textContent} from '../../constants/texts';
import ButtonRow from '../../components/ButtonRow';
import PlanningCard from '../../components/PlanningCard';
import useStyles from './style';
import {useState} from 'react';

const BookingScreen = () => {
  const {recentHeader} = useStyles();

  const [departure, setDeparture] = useState(textContent.dummySGN);
  const [destination, setDestination] = useState(textContent.selectDestination);

  const a = () => console.log('aa');

  const editDeparture = () => setDeparture('aaa');
  const editDestination = () => setDestination('bbb');

  const interchangeLocations = () => {
    const holder = departure;
    if (destination !== textContent.selectDestination) {
      setDeparture(destination);
      setDestination(holder);
    }
  };

  return (
    <ScrollView style={{position: 'relative'}}>
      <Image
        source={require('../../../assets/images/header_image.png')}
        style={{flex: 1, width: '100%'}}
      />
      <ButtonRow />
      <PlanningCard
        destination={destination}
        departure={departure}
        onChangeLocations={interchangeLocations}
      />
      <Text style={recentHeader}>{textContent.prevSearch}</Text>
    </ScrollView>
  );
};

export default BookingScreen;
