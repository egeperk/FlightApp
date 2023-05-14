import {Image, ScrollView, Switch, Text, View} from 'react-native';
import useStyles from './styles';
import SelectionCard from '../../components/SelectionCard';
import {textContent} from '../../constants/texts';
import Departure from '../../svg/Departure';
import {useContext, useEffect, useState} from 'react';
import {ThemeContext} from '../../context/ThemeContext';
import AppButton from '../../components/AppButton';
import Divider from '../../components/Divider';
import DepartCalendar from '../../svg/DepartCalendar';
import DestCalendar from '../../svg/DestCalendar';
import PassengerChoicesTab from '../../components/PassengerChoicesTab';
import SwitchDest from '../../svg/SwitchDest';
import Destination from '../../svg/Destination';
import DestinationModal from '../../components/DestinationModal';
import {Location, LocationArray} from '../../constants/dummy';
import {DATA_TYPE} from '../../types';
import PassangerModal from '../../components/PassengerModal';
import ButtonRow from '../../components/ButtonRow';
import DatePickerModal from '../../components/DatePickerModal';

const BookingScreen = () => {
  const {container, icon, recentHeader} = useStyles();
  const {colors} = useContext(ThemeContext);
  const [isDestModalVisible, setDestModal] = useState(false);
  const [isPassangerModalVisible, setPassangerModal] = useState(false);
  const [isSwitchOpened, setSwitchResults] = useState(false);
  const [count, setCount] = useState(1);
  const [dataType, setDataType] = useState<DATA_TYPE>();

  const setData = (type: DATA_TYPE) => {
    return setDataType(type);
  };

  const [selectedDeparture, setDeparture] = useState<Location>(
    LocationArray[0],
  );
  const [selectedDestination, setSelectedDestination] =
    useState<Location>(null);

  const [locationList, setLocationList] = useState(LocationArray);

  const interchangeLocations = () => {
    if (selectedDestination !== null) {
      const holder = selectedDeparture;
      setDeparture(selectedDestination);
      setSelectedDestination(holder);
    }
  };

  const handleSelectLocation = (location: Location) => {
    if (dataType === DATA_TYPE.DESTINATION) setSelectedDestination(location);
    else setDeparture(location);
  };

  const handlePassengerCount = (totalCount: number) => {
    setCount(totalCount);
  };

  const openDestionations = () => {
    setDestModal(!isDestModalVisible);
  };

  const openPassangerModal = () => {
    setPassangerModal(!isPassangerModalVisible);
  };

  const switchAction = () => {
    setSwitchResults(!isSwitchOpened);
  };

  return (
    <ScrollView style={{position: 'relative'}}>
      <Image
        source={require('../../../assets/images/header_image.png')}
        style={{flex: 1, width: '100%'}}
      />
      <ButtonRow />
      <View style={container}>
        <SelectionCard
          svg={<Departure />}
          header={textContent.departure}
          selectedRoute={selectedDeparture.location}
          switchOpacity={0}
          onClick={() => {
            openDestionations(), setData(DATA_TYPE.DEPARTURE);
          }}
          isVisible={true}
        />
        <SwitchDest style={icon} onClick={interchangeLocations} />
        <SelectionCard
          svg={<Destination />}
          header={textContent.destination}
          selectedRoute={
            selectedDestination === null
              ? textContent.selectDestination
              : selectedDestination?.location
          }
          switchOpacity={0}
          onClick={() => {
            openDestionations(), setData(DATA_TYPE.DESTINATION);
          }}
          isVisible={true}
        />
        <Divider marginH={16} marginB={16} />
        <SelectionCard
          svg={<DepartCalendar />}
          header={textContent.depDate}
          selectedRoute={'Wed, 02/02/2022'}
          switchOpacity={1}
          isVisible={true}
          switchValue={isSwitchOpened}
          onSwitch={switchAction}
        />
        <SelectionCard
          svg={<DestCalendar />}
          header={textContent.returnDate}
          selectedRoute={textContent.selectReturn}
          switchOpacity={0}
          isVisible={isSwitchOpened}
        />
        <Divider marginH={16} marginB={16} />
        <PassengerChoicesTab
          totalPassangerCount={count}
          onPassangerClick={openPassangerModal}
        />

        <AppButton title={textContent.search} />
        <DestinationModal
          isVisible={isDestModalVisible}
          onClose={openDestionations}
          onSelectLocation={handleSelectLocation}
          headerTitle={
            dataType === DATA_TYPE.DEPARTURE
              ? textContent.selectDeparture
              : textContent.selectDestination
          }
          selectedDeparture={selectedDeparture}
          selectedDestination={selectedDestination}
          data={locationList}
        />
        <PassangerModal
          isVisible={isPassangerModalVisible}
          onClose={openPassangerModal}
          onSelectPassenger={handlePassengerCount}
        />
        <DatePickerModal />
      </View>
      <Text style={recentHeader}>{textContent.prevSearch}</Text>
    </ScrollView>
  );
};
export default BookingScreen;
