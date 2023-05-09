import {Pressable, Switch, Text, View} from 'react-native';
import {ISelectionCardProbs} from '../../types/selection';
import Cross from '../../svg/Cross';
import useStyles from './styles';
import {SvgUri} from 'react-native-svg';
import {useContext} from 'react';
import {ThemeContext} from '../../context/ThemeContext';
import {textContent} from '../../constants/texts';

const SelectionCard = ({
  isVisible,
  svg,
  header,
  selectedRoute,
  switchOpacity,
  switchValue,
  onClick,
  onSwitch,
}: ISelectionCardProbs) => {
  const {container, childContainer, head, selection, icon} = useStyles();
  const {colors} = useContext(ThemeContext);

  const a = () => console.log('aaa');

  return (
    <View>
      {isVisible && (
        <View style={container}>
          <Switch
            thumbColor={colors.secondary.main}
            trackColor={{
              false: colors.secondary.switch,
              true: colors.primary.main,
            }}
            style={[icon, {opacity: switchOpacity}]}
            value={switchValue}
            onValueChange={onSwitch}
          />
          <View>{svg}</View>
          <View style={childContainer}>
            <Text style={head}>{header}</Text>
            <Pressable onPress={onClick}>
              <Text
                style={[
                  selection,
                  {
                    color:
                      selectedRoute === textContent.selectDestination ||
                      selectedRoute === textContent.selectReturn
                        ? colors.secondary.light
                        : colors.secondary.mid,
                  },
                ]}>
                {selectedRoute}
              </Text>
            </Pressable>
          </View>
        </View>
      )}
    </View>
  );
};

export default SelectionCard;
