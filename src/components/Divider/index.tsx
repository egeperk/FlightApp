import {View} from 'react-native';
import useStyles from './styles';

export interface IDividerProbs {
  marginH: number;
  marginB: number;
}

const Divider = ({marginH, marginB}: IDividerProbs) => {
  const {divider} = useStyles();

  return (
    <View
      style={[
        divider,
        {marginHorizontal: marginH, marginBottom: marginB},
      ]}></View>
  );
};
export default Divider;
