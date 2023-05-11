import {StatusBar, View} from 'react-native';
import Modal from 'react-native-modal';
import useStyles from './styles';
import Header from '../Header';
import {textContent} from '../../constants/texts';
import Divider from '../Divider';
import {IPassengerModalProbs} from '../../types/modals';
import PassengerCount from '../PassangerCountCard';
import Adult from '../../svg/Adult';
import Child from '../../svg/Child';
import Baby from '../../svg/Baby';
import AppButton from '../AppButton';

const PassangerModal = ({isVisible, onClose}: IPassengerModalProbs) => {
  const {container, modalContainer, overlay} = useStyles();
  return (
    <Modal
      isVisible={false}
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
          <Divider marginH={0} marginB={16} />
          <PassengerCount
            svg={<Adult />}
            type={textContent.adult}
            description={textContent.adultDesc}
            count={1}
          />
          <Divider marginH={16} marginB={16} />
          <PassengerCount
            svg={<Child />}
            type={textContent.child}
            description={textContent.childDesc}
            count={0}
          />
          <Divider marginH={16} marginB={16} />
          <PassengerCount
            svg={<Baby />}
            type={textContent.baby}
            description={textContent.babyDesc}
            count={0}
          />
          <Divider marginH={0} marginB={16} />
          <AppButton title={textContent.done} />
        </View>
      </View>
    </Modal>
  );
};
export default PassangerModal;
