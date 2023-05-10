import {TextInput, View} from 'react-native';
import useStyles from './styles';
import {textContent} from '../../constants/texts';
import Search from '../../svg/Search';
import Cross from '../../svg/Cross';
import {useContext, useState} from 'react';
import {ThemeContext} from '../../context/ThemeContext';

const SearchInput = () => {
  const {inputBox, container, icon} = useStyles();
  const {colors} = useContext(ThemeContext);
  const [text, setText] = useState('');

  const clearText = () => setText('');

  return (
    <View style={container}>
      <Search style={icon} />
      <TextInput
        placeholder={textContent.inputPlaceHolder}
        cursorColor={colors.primary.main}
        value={text}
        onChangeText={setText}
        style={inputBox}
      />
      {text !== '' && (
        <Cross
          color={colors.tertiary.extras?.gray_jumbo}
          size={16}
          style={icon}
          onClick={clearText}
        />
      )}
    </View>
  );
};
export default SearchInput;
