import React, {useContext} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {ThemeContext} from '../../context/ThemeContext';
import useStyles from './styles';
import {IAppButtonProbs} from '../../types/button';

const AppButton = ({title, onClick}: IAppButtonProbs) => {
  const {colors} = useContext(ThemeContext);
  const {button, text} = useStyles();
  return (
    <TouchableOpacity style={button} onPress={onClick}>
      <Text style={text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;
