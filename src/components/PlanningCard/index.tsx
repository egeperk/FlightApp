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

const PlanningCard = () => {
  const {container, icon} = useStyles();
  const {colors} = useContext(ThemeContext);
  const [departure, setDeparture] = useState(textContent.sgn);
  const [destination, setDestination] = useState(textContent.selectDestination);

  const a = () => console.log('aa');

  const editDeparture = () => setDeparture('aaa');
  const editDestination = () => setDestination('bbb');

  const interchangeLocations = () => {
    const temp = departure;
    setDeparture(destination);
    setDestination(temp);
  };

  return (
    <View style={container}>
      <SelectionCard
        svg={<Departure />}
        header={textContent.departure}
        selectedRoute={departure}
        switchOpacity={0}
      />
      <SwitchDest style={icon} onClick={interchangeLocations} />
      <SelectionCard
        svg={<Departure color={colors.secondary.main} />}
        header={textContent.destination}
        selectedRoute={destination}
        switchOpacity={0}
      />
      <Divider />
      <SelectionCard
        svg={<DepartCalendar />}
        header={textContent.depDate}
        selectedRoute={textContent.sgn}
        switchOpacity={1}
      />
      <SelectionCard
        svg={<DestCalendar />}
        header={textContent.returnDate}
        selectedRoute={textContent.selectDestination}
        switchOpacity={0}
      />
      <Divider />
      <PassengerChoicesTab />

      <AppButton title={textContent.search} />
    </View>
  );
};
export default PlanningCard;
