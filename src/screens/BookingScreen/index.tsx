import {Image, Text, ScrollView} from 'react-native';
import {textContent} from '../../constants/texts';
import ButtonRow from '../../components/ButtonRow';
import PlanningCard from '../../components/PlanningCard';
import useStyles from './style';
import {useState} from 'react';
import LocationItemCard from '../../components/LocationItemCard';
import DestinationModal from '../../components/DestinationModal';

const BookingScreen = () => {
  const {recentHeader} = useStyles();

  return (
    <ScrollView style={{position: 'relative'}}>
      <Image
        source={require('../../../assets/images/header_image.png')}
        style={{flex: 1, width: '100%'}}
      />
      <ButtonRow />
      <PlanningCard />
      <Text style={recentHeader}>{textContent.prevSearch}</Text>
      <DestinationModal />
    </ScrollView>
  );
};

export default BookingScreen;
