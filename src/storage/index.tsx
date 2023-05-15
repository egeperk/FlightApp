import AsyncStorage from '@react-native-async-storage/async-storage';
import {DELETE} from '../types';

export const saveArrayToStorage = async (key: string, data: any[]) => {
  try {
    const serializedData = JSON.stringify(data);
    await AsyncStorage.setItem(key, serializedData);
  } catch (error) {
    console.log(error);
  }
};

export const getAllItemsFromStorage = async (key: string) => {
  try {
    const serializedData = await AsyncStorage.getItem(key);
    if (serializedData !== null) {
      const data = JSON.parse(serializedData);
      return data;
    } else {
      return [];
    }
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const clearStorage = async (key: string, type: DELETE, data?: any) => {
  try {
    if (type === DELETE.ALL) {
      const keys = await AsyncStorage.getAllKeys();
      const keysToDelete = keys.filter(storedKey => storedKey.includes(key));
      await AsyncStorage.multiRemove(keysToDelete);
    } else if (type === DELETE.SINGLE) {
      const storedItems = await AsyncStorage.getItem(key);
      let itemsArray = storedItems ? JSON.parse(storedItems) : [];

      const indexToRemove = itemsArray.findIndex(item => item.id === data.id);

      if (indexToRemove !== -1) {
        itemsArray.splice(indexToRemove, 1);

        await AsyncStorage.setItem(key, JSON.stringify(itemsArray));
      } else {
        console.log('Object not found in storage.');
      }
    }

    console.log(key);
  } catch (error) {
    console.error(error);
  }
};
