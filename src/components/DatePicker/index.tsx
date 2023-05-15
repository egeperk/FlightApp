import React, {useContext, useEffect, useRef, useState} from 'react';
import {Calendar, CalendarList} from 'react-native-calendars';
import moment from 'moment';
import DayItem from './DayItem';
import {IDatePickerProps} from '../../types/datePicker';
import {textContent} from '../../constants/texts';
import {ThemeContext} from '../../context/ThemeContext';

const DatePicker = ({
  type,
  onDepartureSelected,
  onReturnSelected,
}: IDatePickerProps) => {
  const {colors} = useContext(ThemeContext);

  const [selectedStartDate, setSelectedStartDate] = useState('');
  const [selectedEndDate, setSelectedEndDate] = useState('');
  const [visibleMonth, setVisibleMonth] = useState(moment().format('YYYY-MM'));

  const handleDayPress = (date: any) => {
    if (!selectedStartDate || (selectedStartDate && selectedEndDate)) {
      setSelectedStartDate(date.dateString);
      setSelectedEndDate('');
      if (onReturnSelected) onReturnSelected(textContent.dateHolder);
      if (onDepartureSelected)
        onDepartureSelected(
          moment(date.dateString).format('ddd') +
            ', ' +
            date.dateString.split('-').reverse().join('/'),
        );
    } else {
      setSelectedEndDate(date.dateString);
      if (onReturnSelected)
        onReturnSelected(
          moment(date.dateString).format('ddd') +
            ', ' +
            date.dateString.split('-').reverse().join('/'),
        );
    }
  };

  const handleVisibleMonthsChange = months => {
    if (months && months.length > 0) {
      const currentMonth = moment(visibleMonth, 'YYYY-MM');
      const newVisibleMonth = moment(months[0].dateString, 'YYYY-MM-DD');

      if (
        newVisibleMonth.isValid() &&
        newVisibleMonth.isAfter(currentMonth, 'month')
      ) {
        const nextMonth = currentMonth.clone().add(1, 'month');
        setVisibleMonth(nextMonth.format('YYYY-MM'));
      }
    }
  };

  const isDateBetweenRange = date => {
    return date > selectedStartDate && date < selectedEndDate;
  };

  const isStartOrEndDate = date => {
    return date === selectedStartDate || date === selectedEndDate;
  };

  const renderDay = ({date}: any) => {
    const isStartOrEnd = isStartOrEndDate(date.dateString);
    const isBetweenDates = isDateBetweenRange(date.dateString);
    const isInvalidDate = moment(date.dateString).isBefore(moment(), 'day');

    const isToday = date.dateString === moment().format('YYYY-MM-DD');

    return (
      <DayItem
        date={date}
        isStartOrEnd={isStartOrEnd}
        isBetweenDates={isBetweenDates}
        isInvalidDate={isInvalidDate}
        isToday={isToday}
        handleDayPress={handleDayPress}
        selectedEndDate={selectedEndDate}
        selectedStartDate={selectedStartDate}
      />
    );
  };

  return (
    <Calendar
      horizontal
      hideArrows={false}
      pastScrollRange={0}
      hideExtraDays={false}
      dayComponent={renderDay}
      current={visibleMonth}
      onDayPress={handleDayPress}
      onVisibleMonthsChange={handleVisibleMonthsChange}
      style={{marginBottom: 10}}
      theme={{
        monthTextColor: colors.tertiary.extras?.black_shark,
        textMonthFontSize: 16,
      }}
    />
  );
};

export default DatePicker;
