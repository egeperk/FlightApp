import {getTheme} from '../../constants/theme';
import React, {useState} from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import {ThemeContext} from '../../context/ThemeContext';
import useStyles from '../../styles';
import BookingScreen from '../../screens/BookingScreen';

const AppWrapper = () => {
  const colorScheme = useColorScheme();
  const theme = getTheme(colorScheme);
  const {container} = useStyles();

  return (
    <SafeAreaView style={container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <ThemeContext.Provider value={theme}>
        <BookingScreen />
      </ThemeContext.Provider>
    </SafeAreaView>
  );
};

export default AppWrapper;
