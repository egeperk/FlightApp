import {Text, TouchableOpacity, View} from 'react-native';
import Cross from '../../svg/Cross';
import useStyle from './styles';
import {useContext} from 'react';
import {ThemeContext} from '../../context/ThemeContext';
import {IHeaderProbs} from '../../types/cards';

const Header = ({title, onClick}: IHeaderProbs) => {
  const {headerContainer, headerText} = useStyle();
  const {colors} = useContext(ThemeContext);

  return (
    <View style={headerContainer}>
      <Text style={headerText}>{title}</Text>
      <TouchableOpacity onPress={onClick}>
        <Cross color={colors.tertiary.extras?.black_shark} size={16} />
      </TouchableOpacity>
    </View>
  );
};
export default Header;
