import {Text, View, StatusBar} from 'react-native';
import {textContent} from '../../constants/texts';
import Modal from 'react-native-modal';
import Header from '../Header';
import {IDatePickerModalProbs} from '../../types/modals';
import useStyles from './styles';
import Divider from '../Divider';
import DatePicker from '../DatePicker';
import {useContext, useState} from 'react';
import AppButton from '../AppButton';
import {ThemeContext} from '../../context/ThemeContext';
import {TRAVEL} from '../../types';

const DatePickerModal = ({
  isVisible,
  type,
  onClose,
  onSelection,
}: IDatePickerModalProbs) => {
  const {
    container,
    divider,
    modalContainer,
    rowContainer,
    headerText,
    dateText,
    overlay,
  } = useStyles();

  const {colors} = useContext(ThemeContext);

  const [selectedDeparture, setDepartureDate] = useState(
    textContent.dateHolder,
  );
  const [selectedReturn, setReturnDate] = useState(textContent.dateHolder);

  const handleDeparture = (departure: string) => {
    if (onSelection) onSelection(departure);
    setDepartureDate(departure);
  };

  const handleReturn = (returnDate: string) => {
    if (onSelection) onSelection(returnDate);
    setReturnDate(returnDate);
  };

  console.log(selectedDeparture);

  return (
    <Modal
      isVisible={isVisible}
      animationIn={'slideInUp'}
      animationOut={'slideOutDown'}
      style={container}>
      <View style={overlay}>
        <StatusBar translucent backgroundColor="rgba(0, 0, 0, 0.7)"></StatusBar>
        <View style={modalContainer}>
          <Header
            title={textContent.selectDate}
            onClick={() => {
              if (onClose) onClose();
            }}
          />
          <View
            style={[
              rowContainer,
              {
                justifyContent:
                  type === TRAVEL.ROUND ? 'space-evenly' : 'center',
              },
            ]}>
            <View>
              <Text style={headerText}>{textContent.depDate}</Text>
              <Text
                style={
                  selectedDeparture === textContent.dateHolder
                    ? dateText
                    : [
                        dateText,
                        {
                          color: colors.tertiary.extras?.black_shark,
                          fontSize: 14,
                          fontWeight: 'bold',
                        },
                      ]
                }>
                {selectedDeparture}
              </Text>
            </View>
            <View style={type === TRAVEL.ROUND ? divider : undefined} />
            <View>
              <Text style={headerText}>
                {type === TRAVEL.ROUND ? textContent.returnDate : undefined}
              </Text>
              <Text
                style={
                  selectedReturn === textContent.dateHolder
                    ? dateText
                    : [
                        dateText,
                        {
                          color: colors.tertiary.extras?.black_shark,
                          fontSize: 14,
                          fontWeight: 'bold',
                        },
                      ]
                }>
                {type === TRAVEL.ROUND ? selectedReturn : undefined}
              </Text>
            </View>
          </View>
          <DatePicker
            type={type === TRAVEL.ROUND ? TRAVEL.ROUND : TRAVEL.ONE_WAY}
            onDepartureSelected={handleDeparture}
            onReturnSelected={handleReturn}
          />
          <Divider marginB={12} marginH={0} />
          <AppButton title={textContent.done} onClick={onClose} />
        </View>
      </View>
    </Modal>
  );
};
export default DatePickerModal;
