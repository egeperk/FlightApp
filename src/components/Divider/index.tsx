import {View} from 'react-native';
import useStyles from './styles';

const Divider = () => {
  const {divider} = useStyles();

  return <View style={divider}></View>;
};
export default Divider;
