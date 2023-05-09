import {Switch, Text, View} from 'react-native';
import {ISelectionCardProbs} from '../../types/selection';
import Cross from '../../svg/Cross';
import useStyles from './styles';
import {SvgUri} from 'react-native-svg';
import {useContext} from 'react';
import {ThemeContext} from '../../context/ThemeContext';

const SelectionCard = ({
  svg,
  header,
  selectedRoute,
  switchOpacity,
}: ISelectionCardProbs) => {
  const {container, childContainer, head, selection, icon} = useStyles();
  const {colors} = useContext(ThemeContext);

  return (
    <View style={container}>
      <Switch
        thumbColor={colors.secondary.main}
        trackColor={{
          false: colors.secondary.switch,
          true: colors.primary.main,
        }}
        style={[icon, {opacity: switchOpacity}]}
      />
      <View>{svg}</View>
      <View style={childContainer}>
        <Text style={head}>{header}</Text>
        <Text style={selection}>{selectedRoute}</Text>
      </View>
    </View>
  );
};

export default SelectionCard;
