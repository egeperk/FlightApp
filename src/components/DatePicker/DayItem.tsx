import React, {memo, useCallback, useContext} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import useStyles from './styles';
import {ThemeContext} from '../../context/ThemeContext';

interface DayItemProps {
  date: any;
  isStartOrEnd: boolean;
  isBetweenDates: boolean;
  isInvalidDate: boolean;
  isToday: boolean;
  handleDayPress: (date: any) => void;
  selectedStartDate: string;
  selectedEndDate: string;
}

const DayItem = ({
  date,
  isStartOrEnd,
  isBetweenDates,
  isInvalidDate,
  isToday,
  handleDayPress,
  selectedStartDate,
  selectedEndDate,
}: DayItemProps) => {
  const memoizedHandleDayPress = useCallback(() => {
    handleDayPress(date);
  }, [handleDayPress, date]);

  const {colors} = useContext(ThemeContext);
  const {dayContainer, todayContainer, dayText, priceText} = useStyles();

  return (
    <TouchableOpacity onPress={memoizedHandleDayPress} disabled={isInvalidDate}>
      <View
        style={
          isToday && selectedEndDate === ''
            ? todayContainer
            : [
                dayContainer,
                {
                  backgroundColor: (() => {
                    if (isBetweenDates) {
                      return colors.primary.light;
                    } else if (isStartOrEnd && selectedEndDate === '') {
                      return colors.secondary.main;
                    } else if (isStartOrEnd) {
                      return colors.primary.main;
                    } else {
                      return colors.secondary.main;
                    }
                  })(),
                  borderWidth: isBetweenDates ? 0 : 1,
                  borderColor: isStartOrEnd
                    ? colors.primary.main
                    : colors.secondary.main,
                  borderRadius: isBetweenDates ? 0 : 8,
                  opacity: isInvalidDate ? 0.15 : 1,
                },
              ]
        }>
        <Text
          style={[
            dayText,
            {
              color: (() => {
                if (isBetweenDates) {
                  return colors.tertiary.extras?.black_shark;
                } else if (isStartOrEnd && selectedEndDate === '') {
                  return colors.primary.main;
                } else if (isStartOrEnd) {
                  return colors.secondary.main;
                } else {
                  return colors.tertiary.extras?.black_shark;
                }
              })(),
              fontWeight: isStartOrEnd ? 'bold' : undefined,
            },
          ]}>
          {date.day}
        </Text>
        <Text
          style={[
            priceText,
            {
              color: (() => {
                if (isStartOrEnd && selectedEndDate === '') {
                  return colors.primary.main;
                } else if (isStartOrEnd) {
                  return colors.secondary.main;
                } else {
                  return colors.tertiary.extras?.gray_jumbo;
                }
              })(),
            },
          ]}>
          $ 1600
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default memo(DayItem);
