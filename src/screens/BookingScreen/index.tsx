import {
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View,
} from 'react-native';
import useStyles from './styles';
import SelectionCard from '../../components/SelectionCard';
import {textContent} from '../../constants/texts';
import Departure from '../../svg/Departure';
import React, {useContext, useEffect, useState} from 'react';
import {ThemeContext} from '../../context/ThemeContext';
import AppButton from '../../components/AppButton';
import Divider from '../../components/Divider';
import DepartCalendar from '../../svg/DepartCalendar';
import DestCalendar from '../../svg/DestCalendar';
import PassengerChoicesTab from '../../components/PassengerChoicesTab';
import SwitchDest from '../../svg/SwitchDest';
import Destination from '../../svg/Destination';
import DestinationModal from '../../components/DestinationModal';
import {Location, LocationArray} from '../../constants/dummy';
import {DATA_TYPE, ISearchData, TRAVEL} from '../../types';
import PassangerModal from '../../components/PassengerModal';
import ButtonRow from '../../components/ButtonRow';
import DatePickerModal from '../../components/DatePickerModal';
import moment from 'moment';
import {getAllItemsFromStorage, saveArrayToStorage} from '../../storage';
import Snackbar from 'react-native-snackbar';
import RecentSearchCard from '../../components/RecentSearchCard';
import {FlatList} from 'react-native-gesture-handler';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const BookingScreen = () => {
  const {container, safeArea, icon, recentHeader} = useStyles();
  const {colors} = useContext(ThemeContext);
  const [isDestModalVisible, setDestModal] = useState(false);
  const [isPassangerModalVisible, setPassangerModal] = useState(false);
  const [isSwitchOpened, setSwitchResults] = useState(false);
  const [isDateOpened, setDateModal] = useState(false);
  const [count, setCount] = useState(1);
  const [dataType, setDataType] = useState<DATA_TYPE>();
  const [recentsData, setRecents] = useState([]);
  const [travelType, setTravelType] = useState(TRAVEL.ONE_WAY);
  const [isRefreshed, setRefresh] = useState(false);

  const safeAreaInsets = useSafeAreaInsets();
  const hasDynamicInset = safeAreaInsets.bottom > 0;

  const getMarginValue = () => {
    if (hasDynamicInset) {
      return 0;
    } else if (!hasDynamicInset && Platform.OS === 'ios') {
      return 8;
    } else {
      return 28;
    }
  };

  const [selectedDepartureDate, setDepartureDate] = useState(
    moment().format('ddd') +
      ', ' +
      moment().format('YYYY-MM-DD').split('-').reverse().join('/'),
  );
  const [selectedReturnDate, setReturnDate] = useState('');

  const setData = (type: DATA_TYPE) => {
    return setDataType(type);
  };

  useEffect(() => {
    const fetchSavedItems = async () => {
      const items = await getAllItemsFromStorage('searches');
      setRecents(items);
    };

    fetchSavedItems();
  }, []);

  const [selectedDeparture, setDeparture] = useState<Location>(
    LocationArray[1],
  );
  const [selectedDestination, setSelectedDestination] =
    useState<Location | null>(null);

  const [locationList] = useState(LocationArray);

  const saveNewItem = async (newItem: ISearchData) => {
    try {
      const existingItems = await getAllItemsFromStorage('searches');

      const updatedItems = Array.isArray(existingItems)
        ? [...existingItems, newItem]
        : [newItem];

      await saveArrayToStorage('searches', updatedItems);
      console.log(updatedItems);
    } catch (error) {
      console.log(error);
    }
  };

  const wipeData = () => {
    setSelectedDestination(LocationArray[0]);
    setSelectedDestination(null);
    setCount(1);
    setReturnDate('');
    setRefresh(true);
  };

  const handleSearch = async () => {
    const searchInput: ISearchData = {
      departureLocation: selectedDeparture.location,
      destinationLocation: selectedDestination?.location,
      departureDate: selectedDepartureDate,
      returnDate: selectedDepartureDate,
      passenger: count,
    };

    if (
      selectedDestination === null ||
      (isSwitchOpened && selectedReturnDate === '')
    ) {
      Snackbar.show({
        text: textContent.emptyInfos,
        duration: 3000,
      });
    } else {
      await saveNewItem(searchInput);

      const items = await getAllItemsFromStorage('searches');
      setRecents(items);

      wipeData();
    }
  };

  useEffect(() => {}, [
    selectedDeparture,
    selectedDestination,
    selectedDepartureDate,
    selectedReturnDate,
    count,
  ]);

  const recentRenderItem = ({item}: {item: ISearchData}) => {
    return (
      <RecentSearchCard
        fromLocation={item.departureLocation}
        toLocation={item.destinationLocation}
        departureDate={item.departureDate}
        returnDate={item.returnDate}
      />
    );
  };

  const interchangeLocations = () => {
    if (selectedDestination !== null) {
      const holder = selectedDeparture;
      setDeparture(selectedDestination);
      setSelectedDestination(holder);
    }
  };

  const handleSelectLocation = (location: Location) => {
    if (dataType === DATA_TYPE.DESTINATION) setSelectedDestination(location);
    else setDeparture(location);
  };

  const handleDateSelection = (date: string) => {
    travelType === TRAVEL.ONE_WAY
      ? setDepartureDate(date)
      : setReturnDate(date);
  };

  const handlePassengerCount = (totalCount: number) => {
    setCount(totalCount);
  };

  const openDestionations = () => {
    setDestModal(!isDestModalVisible);
  };

  const openPassangerModal = () => {
    setPassangerModal(!isPassangerModalVisible);
  };

  const openDateModal = () => {
    setDateModal(!isDateOpened);
  };

  const switchAction = () => {
    setSwitchResults(!isSwitchOpened);
    travelType === TRAVEL.ONE_WAY
      ? setTravelType(TRAVEL.ROUND)
      : setTravelType(TRAVEL.ONE_WAY);
  };

  return (
    <ScrollView
      scrollEnabled={Platform.OS !== 'ios'}
      style={{
        position: 'relative',
        flex: 1,
        backgroundColor: colors.tertiary.extras?.background,
      }}>
      <SafeAreaView style={safeArea}>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="light-content"
        />
        <Image
          source={require('../../../assets/images/header_image.png')}
          style={{flex: 1, width: '100%', position: 'absolute'}}
        />
        <View style={{marginTop: getMarginValue()}}>
          <ButtonRow margin={getMarginValue()} />
          <View style={container}>
            <SelectionCard
              svg={<Departure />}
              header={textContent.departure}
              selectedRoute={selectedDeparture.location}
              switchOpacity={0}
              onClick={() => {
                openDestionations(), setData(DATA_TYPE.DEPARTURE);
              }}
              isVisible={true}
            />
            <SwitchDest style={icon} onClick={interchangeLocations} />
            <SelectionCard
              svg={<Destination />}
              header={textContent.destination}
              selectedRoute={
                selectedDestination
                  ? selectedDestination?.location
                  : textContent.selectDestination
              }
              switchOpacity={0}
              onClick={() => {
                openDestionations(), setData(DATA_TYPE.DESTINATION);
              }}
              isVisible={true}
            />
            <Divider marginH={16} marginB={16} />
            <SelectionCard
              svg={<DepartCalendar />}
              header={textContent.depDate}
              selectedRoute={selectedDepartureDate}
              switchOpacity={1}
              isVisible={true}
              switchValue={isSwitchOpened}
              onSwitch={switchAction}
              onClick={openDateModal}
            />
            <SelectionCard
              svg={<DestCalendar />}
              header={textContent.returnDate}
              selectedRoute={
                selectedReturnDate
                  ? selectedReturnDate
                  : textContent.selectReturn
              }
              switchOpacity={0}
              isVisible={isSwitchOpened}
              onClick={openDateModal}
            />
            <Divider marginH={16} marginB={16} />
            <PassengerChoicesTab
              totalPassangerCount={count}
              onPassangerClick={openPassangerModal}
            />

            <AppButton title={textContent.search} onClick={handleSearch} />
            <DestinationModal
              isVisible={isDestModalVisible}
              onClose={openDestionations}
              onSelectLocation={handleSelectLocation}
              headerTitle={
                dataType === DATA_TYPE.DEPARTURE
                  ? textContent.selectDeparture
                  : textContent.selectDestination
              }
              selectedDeparture={selectedDeparture}
              selectedDestination={selectedDestination}
              data={locationList}
            />
            <PassangerModal
              isVisible={isPassangerModalVisible}
              onClose={openPassangerModal}
              isRefreshed={isRefreshed}
              onSelectPassenger={handlePassengerCount}
            />
            <DatePickerModal
              isVisible={isDateOpened}
              onClose={openDateModal}
              type={
                travelType === TRAVEL.ONE_WAY ? TRAVEL.ONE_WAY : TRAVEL.ROUND
              }
              onSelection={handleDateSelection}
            />
          </View>
        </View>
        <Text style={recentHeader}>
          {recentsData.length !== 0 ? textContent.prevSearch : null}
        </Text>
        <FlatList
          style={{marginStart: 16}}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          contentContainerStyle={{alignItems: 'flex-start'}}
          data={recentsData}
          renderItem={recentRenderItem}
        />
      </SafeAreaView>
    </ScrollView>
  );
};
export default BookingScreen;
