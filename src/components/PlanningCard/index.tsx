import {Switch, View} from 'react-native';
import useStyles from './styles';
import SelectionCard from '../SelectionCard';
import {textContent} from '../../constants/texts';
import Departure from '../../svg/Departure';
import {useContext, useState} from 'react';
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

const PlanningCard = ({
  isVisible,
  departure,
  destination,
  onChangeLocations,
  onSelectLocation,
}: IPlanningProbs) => {
  const {container, icon} = useStyles();
  const {colors} = useContext(ThemeContext);
  const [isDestModalVisible, setDestModal] = useState(false);

  const [isSwitchOpened, setSwitchResults] = useState(false);

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
        selectedRoute={departure}
        switchOpacity={0}
        isVisible={true}
      />
      <SwitchDest style={icon} onClick={onChangeLocations} />
      <SelectionCard
        svg={<Destination />}
        header={textContent.destination}
        selectedRoute={destination}
        switchOpacity={0}
        onClick={openDestionations}
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
        isClosed={openDestionations}
      />
    </View>
  );
};
export default PlanningCard;
