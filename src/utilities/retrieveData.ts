import AsyncStorage from '@react-native-async-storage/async-storage';

const retrieveData = async (key: string) => {
  try {
    const storedData = await AsyncStorage.getItem(key);
    if (storedData) {
      console.log('pava-070707-70000', storedData);
      //   const { key: storedName, value: storedBase64Image } =
      //     JSON.parse(storedData);
      //   setName(storedName);
      //   setBase64Image(storedBase64Image);
    }
  } catch (error) {
    console.error('Error retrieving data:', error);
  }
};

export default retrieveData;
