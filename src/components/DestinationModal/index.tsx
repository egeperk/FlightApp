import {Text, View, FlatList, StatusBar, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import {IDestinationModalProbs} from '../../types/modals';
import {Location} from '../../constants/dummy';
import useStyle from './styles';
import {textContent} from '../../constants/texts';
import React, {useContext, useEffect, useState} from 'react';
import {ThemeContext} from '../../context/ThemeContext';
import Header from '../Header';
import SearchInput from '../SearchInput';
import Divider from '../Divider';
import LocationItemCard from '../LocationItemCard';
import EmptySearch from '../EmptySearch';
import {
  clearStorage,
  getAllItemsFromStorage,
  saveArrayToStorage,
} from '../../storage';
import {DELETE, IHistory} from '../../types';
import {
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';

const DestinationModal = ({
  isVisible,
  data,
  headerTitle,
  selectedDeparture,
  selectedDestination,
  onSelectLocation,
  onClose,
}: IDestinationModalProbs) => {
  const {
    container,
    modalContainer,
    rowContainer,
    headerText,
    deleteText,
    overlay,
    divider,
  } = useStyle();
  const {colors} = useContext(ThemeContext);

  const [filteredList, setFilterByText] = useState(data);
  const [history, setHistory] = useState([]);
  const [isHistoryVisible, setVisiblity] = useState(false);

  const list = filteredList?.filter(
    location =>
      location !== selectedDeparture && location !== selectedDestination,
  );

  useEffect(() => {
    const fetchSavedItems = async () => {
      const items = await getAllItemsFromStorage('history');
      setHistory(items);
    };

    fetchSavedItems();
  }, []);

  useEffect(() => {
    handleHistoryVisibility();
  }, [history]);

  const saveNewItem = async (newItem: IHistory) => {
    try {
      const existingItems = await getAllItemsFromStorage('history');

      const updatedItems = Array.isArray(existingItems)
        ? [...existingItems, newItem]
        : [newItem];

      if (updatedItems.length > 3) {
        updatedItems.shift();
      }

      await saveArrayToStorage('history', updatedItems);
    } catch (error) {
      console.log('error', error);
    }
    console.log(newItem);
  };

  const handleFilter = (text: string) => {
    const filteredItems = data?.filter(item =>
      item.location.toLowerCase().includes(text.toLowerCase()),
    );
    setFilterByText(filteredItems);
  };

  const handleSelect = (item: Location) => {
    if (onSelectLocation) onSelectLocation(item);
    if (onClose) onClose();
    setVisiblity(false);
    handleFilter('');
  };

  const handleSubmit = async (text: IHistory) => {
    await saveNewItem(text);
    const items = await getAllItemsFromStorage('history');
    setHistory(items);
  };

  const handleHistoryVisibility = () => {
    if (history.length > 0) {
      setVisiblity(true);
    } else {
      setVisiblity(false);
    }
  };

  const handleClearHistory = async (type: DELETE, item?: IHistory) => {
    if (type === DELETE.ALL) {
      await clearStorage('history', type);
    } else {
      await clearStorage('history', type, item);
    }
    setTimeout(async () => {
      const items = await getAllItemsFromStorage('history');
      setHistory(items);
    }, 100);
  };

  const historyRenderItem = ({item}: {item: IHistory}) => {
    return (
      <LocationItemCard
        isCrossVisible={true}
        locationText={item.input}
        onDelete={() => handleClearHistory(DELETE.SINGLE, item)}
      />
    );
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
          <Header
            title={headerTitle}
            onClick={() => {
              if (onClose) onClose();
              handleFilter('');
            }}
          />
          <Divider marginH={0} marginB={16} />
          <SearchInput onType={handleFilter} onSubmit={handleSubmit} />
          <ScrollView>
            {isHistoryVisible && filteredList?.length !== 0 && (
              <View style={rowContainer}>
                <Text style={headerText}>{textContent.prevSearch}</Text>
                <TouchableWithoutFeedback
                  onPress={() => handleClearHistory(DELETE.ALL)}>
                  <Text style={deleteText}>{textContent.delete}</Text>
                </TouchableWithoutFeedback>
              </View>
            )}
            {isHistoryVisible && filteredList?.length !== 0 && (
              <FlatList
                style={{paddingBottom: 20}}
                scrollEnabled={false}
                data={history.reverse()}
                ItemSeparatorComponent={renderSeparator}
                renderItem={historyRenderItem}
              />
            )}
            <EmptySearch
              isVisible={filteredList?.length === 0 ? true : false}
            />
            {isHistoryVisible && filteredList?.length !== 0 && (
              <View style={divider} />
            )}
            {filteredList?.length !== 0 && (
              <Text style={[headerText, {marginStart: 16}]}>
                {textContent.popPlaces}
              </Text>
            )}

            <FlatList
              scrollEnabled={false}
              data={list}
              renderItem={renderItem}
              ItemSeparatorComponent={renderSeparator}
            />
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};
export default DestinationModal;
