import {View, FlatList, Text, StatusBar} from 'react-native';
import Modal from 'react-native-modal';
import {IDestinationModalProbs} from '../../types/modals';
import {Location, LocationArray} from '../../constants/dummy';
import useStyle from './styles';
import {textContent} from '../../constants/texts';
import Cross from '../../svg/Cross';
import {useCallback, useContext, useState} from 'react';
import {ThemeContext} from '../../context/ThemeContext';
import Header from '../Header';
import SearchInput from '../SearchInput';
import Divider from '../Divider';
import LocationItemCard from '../LocationItemCard';

const DestinationModal = ({isVisible, isClosed}: IDestinationModalProbs) => {
  const {container, modalContainer, overlay} = useStyle();
  const {colors} = useContext(ThemeContext);

  const renderItem = useCallback(({item}: {item: Location}) => {
    return (
      <LocationItemCard isCrossVisible={true} locationText={item.location} />
    );
  }, []);

  const renderSeparator = () => <Divider marginH={16} marginB={8} />;

  return (
    <Modal
      isVisible={isVisible}
      animationIn={'slideInUp'}
      animationOut={'slideOutDown'}
      style={container}>
      <View style={overlay}>
        <StatusBar translucent backgroundColor="rgba(0, 0, 0, 0.7)"></StatusBar>
        <View style={modalContainer}>
          <Header title={textContent.selectDestination} onClick={isClosed} />
          <Divider marginH={0} marginB={16} />
          <SearchInput />
          <FlatList
            data={LocationArray}
            renderItem={renderItem}
            ItemSeparatorComponent={renderSeparator}
            style={{marginTop: 24}}
          />
        </View>
      </View>
    </Modal>
  );
};
export default DestinationModal;
