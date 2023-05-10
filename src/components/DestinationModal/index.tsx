import {View, FlatList, Text, StatusBar} from 'react-native';
import Modal from 'react-native-modal';
import {IDestinationModalProbs} from '../../types/modals';
import {LocationArray} from '../../constants/dummy';
import useStyle from './styles';
import {textContent} from '../../constants/texts';
import Cross from '../../svg/Cross';
import {useContext} from 'react';
import {ThemeContext} from '../../context/ThemeContext';
import Header from '../Header';

const DestinationModal = ({isVisible}: IDestinationModalProbs) => {
  const {container, modalContainer, overlay} = useStyle();
  const {colors} = useContext(ThemeContext);

  return (
    <Modal
      isVisible={false}
      animationIn={'slideInUp'}
      animationOut={'slideOutDown'}
      style={container}>
      <View style={overlay}>
        <StatusBar translucent backgroundColor="rgba(0, 0, 0, 0.7)"></StatusBar>

        <View style={modalContainer}>
          <Header title={textContent.selectDestination} />
          <FlatList data={LocationArray}></FlatList>
        </View>
      </View>
    </Modal>
  );
};
export default DestinationModal;
