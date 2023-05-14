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

const DatePickerModal = ({
  isVisible,
  onClose,
  onSetDeparture,
  onSetReturn,
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
    setDepartureDate(departure);
  };

  const handleReturn = (returnDate: string) => {
    setReturnDate(returnDate);
  };

  return (
    <Modal
      isVisible={true}
      animationIn={'slideInUp'}
      animationOut={'slideOutDown'}
      style={container}>
      <View style={overlay}>
        <StatusBar translucent backgroundColor="rgba(0, 0, 0, 0.7)"></StatusBar>
        <View style={modalContainer}>
          <Header
            title={textContent.addPassenger}
            onClick={() => {
              if (onClose) onClose();
            }}
          />
          <View style={rowContainer}>
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
            <View style={divider} />
            <View>
              <Text style={headerText}>{textContent.returnDate}</Text>
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
                {selectedReturn}
              </Text>
            </View>
          </View>
          <DatePicker
            onDepartureSelected={handleDeparture}
            onReturnSelected={handleReturn}
          />
          <Divider marginB={12} marginH={0} />
          <AppButton title={textContent.done} />
        </View>
      </View>
    </Modal>
  );
};
export default DatePickerModal;
