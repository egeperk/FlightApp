import {getTheme} from '../../constants/theme';
import React, {useState} from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import {ThemeContext} from '../../context/ThemeContext';
import useStyles from '../../styles';
import BookingScreen from '../../screens/BookingScreen';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const AppWrapper = () => {
  const colorScheme = useColorScheme();
  const theme = getTheme(colorScheme);
  const {container} = useStyles();

  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{flex: 1}}>
        <ThemeContext.Provider value={theme}>
          <BookingScreen />
        </ThemeContext.Provider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
};

export default AppWrapper;
