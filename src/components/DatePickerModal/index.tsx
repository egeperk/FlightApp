import {View, StatusBar} from 'react-native';
import {textContent} from '../../constants/texts';
import Modal from 'react-native-modal';
import Header from '../Header';
import {IDatePickerModalProbs} from '../../types/modals';
import useStyles from './styles';

const DatePickerModal = ({isVisible, onClose}: IDatePickerModalProbs) => {
  const {container, modalContainer, overlay} = useStyles();
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
        </View>
      </View>
    </Modal>
  );
};
export default DatePickerModal;
