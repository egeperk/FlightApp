import {View, FlatList, StatusBar, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import {IDestinationModalProbs} from '../../types/modals';
import {Location} from '../../constants/dummy';
import useStyle from './styles';
import {textContent} from '../../constants/texts';
import React, {useContext} from 'react';
import {ThemeContext} from '../../context/ThemeContext';
import Header from '../Header';
import SearchInput from '../SearchInput';
import Divider from '../Divider';
import LocationItemCard from '../LocationItemCard';

const DestinationModal = ({
  isVisible,
  data,
  headerTitle,
  onSelectLocation,
  onClose,
}: IDestinationModalProbs) => {
  const {container, modalContainer, overlay} = useStyle();
  const {colors} = useContext(ThemeContext);

  const handleSelect = (item: Location) => {
    if (onSelectLocation) onSelectLocation(item);
    if (onClose) onClose();
  };

  const renderItem = ({item}: {item: Location}) => {
    return (
      <TouchableOpacity onPress={() => handleSelect(item)}>
        <LocationItemCard isCrossVisible={false} locationText={item.location} />
      </TouchableOpacity>
    );
  };

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
          <Header title={headerTitle} onClick={onClose} />
          <Divider marginH={0} marginB={16} />
          <SearchInput />
          <FlatList
            data={data}
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
