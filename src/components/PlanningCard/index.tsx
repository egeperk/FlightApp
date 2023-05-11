import {Switch, View} from 'react-native';
import useStyles from './styles';
import SelectionCard from '../SelectionCard';
import {textContent} from '../../constants/texts';
import Departure from '../../svg/Departure';
import {useContext, useEffect, useState} from 'react';
import {ThemeContext} from '../../context/ThemeContext';
import AppButton from '../AppButton';
import Divider from '../Divider';
import DepartCalendar from '../../svg/DepartCalendar';
import DestCalendar from '../../svg/DestCalendar';
import PassengerChoicesTab from '../PassengerChoicesTab';
import SwitchDest from '../../svg/SwitchDest';
import {IPlanningProbs} from '../../types/cards';
import Destination from '../../svg/Destination';
import DestinationModal from '../DestinationModal';
import {Location, LocationArray} from '../../constants/dummy';
import {DATA_TYPE} from '../../types';

const PlanningCard = ({onChangeLocations}: IPlanningProbs) => {
  const {container, icon} = useStyles();
  const {colors} = useContext(ThemeContext);
  const [isDestModalVisible, setDestModal] = useState(false);
  const [isSwitchOpened, setSwitchResults] = useState(false);
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

  const openDestionations = () => {
    setDestModal(!isDestModalVisible);
  };

  const switchAction = () => {
    setSwitchResults(!isSwitchOpened);
  };

  return (
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
        onClick={onChangeLocations}
        isVisible={true}
        switchValue={isSwitchOpened}
        onSwitch={switchAction}
      />
      <SelectionCard
        svg={<DestCalendar />}
        header={textContent.returnDate}
        selectedRoute={textContent.selectReturn}
        switchOpacity={0}
        onClick={onChangeLocations}
        isVisible={isSwitchOpened}
      />
      <Divider marginH={16} marginB={16} />
      <PassengerChoicesTab />

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
        data={locationList.filter(
          location =>
            location !== selectedDeparture && location !== selectedDestination,
        )}
      />
    </View>
  );
};
export default PlanningCard;
