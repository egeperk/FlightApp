import {TextInput, TouchableWithoutFeedback, View} from 'react-native';
import useStyles from './styles';
import {textContent} from '../../constants/texts';
import Search from '../../svg/Search';
import Cross from '../../svg/Cross';
import {useContext, useState} from 'react';
import {ThemeContext} from '../../context/ThemeContext';
import {ISearchInputProbs} from '../../types/input';

const SearchInput = ({onType}: ISearchInputProbs) => {
  const {inputBox, container, icon} = useStyles();
  const {colors} = useContext(ThemeContext);
  const [text, setText] = useState('');

  const clearText = () => {
    setText('');
    filterBySearch('');
  };

  const filterBySearch = (text: string) => {
    setText(text);
    onType(text);
  };

  return (
    <View style={container}>
      <Search style={icon} />
      <TextInput
        placeholder={textContent.inputPlaceHolder}
        cursorColor={colors.primary.main}
        value={text}
        onChangeText={filterBySearch}
        style={inputBox}
      />
      {text !== '' && (
        <TouchableWithoutFeedback onPress={clearText}>
          <Cross
            color={colors.tertiary.extras?.gray_jumbo}
            size={16}
            style={icon}
          />
        </TouchableWithoutFeedback>
      )}
    </View>
  );
};
export default SearchInput;
