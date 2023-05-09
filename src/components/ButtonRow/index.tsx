import {View} from 'react-native';
import Cross from '../../svg/Cross';
import Favorites from '../../svg/Favorites';
import MoreAction from '../../svg/MoreAction';
import Options from '../../svg/Options';
import SvgButtonCard from '../SvgButtonCard';
import useStyles from './styles';

const ButtonRow = () => {
  const {buttonRow, flexEnd, flexStart} = useStyles();

  return (
    <View style={buttonRow}>
      <SvgButtonCard svg={<Cross />} style={flexStart} />
      <View style={flexEnd}>
        <SvgButtonCard svg={<Favorites />} />
        <SvgButtonCard svg={<Options />} />
        <SvgButtonCard svg={<MoreAction />} />
      </View>
    </View>
  );
};

export default ButtonRow;
