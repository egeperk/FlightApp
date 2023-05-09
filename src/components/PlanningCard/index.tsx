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
import {IPlanningProbs} from '../../types/planningCard';
import Destination from '../../svg/Destination';

const PlanningCard = ({
  isVisible,
  departure,
  destination,
  onChangeLocations,
  onSelectLocation,
}: IPlanningProbs) => {
  const {container, icon} = useStyles();
  const {colors} = useContext(ThemeContext);

  const [isSwitchOpened, setSwitchResults] = useState(false);

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
      <SwitchDest
        opacity={isSwitchOpened ? 1 : 0}
        style={icon}
        onClick={onChangeLocations}
      />
      <SelectionCard
        svg={<Destination />}
        header={textContent.destination}
        selectedRoute={destination}
        switchOpacity={0}
        onClick={onChangeLocations}
        isVisible={isSwitchOpened}
      />
      <Divider />
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
      <Divider />
      <PassengerChoicesTab />

      <AppButton title={textContent.search} />
    </View>
  );
};
export default PlanningCard;
