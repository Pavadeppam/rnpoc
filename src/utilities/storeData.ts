import AsyncStorage from '@react-native-async-storage/async-storage';

export type storeDataT = {
  key: string;
  value: string;
};

const storeData = async (inputData: storeDataT) => {
  try {
    const data = JSON.stringify(inputData);
    await AsyncStorage.setItem(inputData.key, inputData?.value);
    console.log('Data stored successfully.');
  } catch (error) {
    console.error('Error storing data:', error);
  }
};

export default storeData;
